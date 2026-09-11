import { NextResponse } from "next/server";

const GITHUB_USERNAME = "Sohham01";
const TOKEN = process.env.GITHUB_TOKEN;

const CONTRIBUTIONS_QUERY = `
  query($login: String!) {
    user(login: $login) {
      name
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

const LEVEL_MAP: Record<string, number> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

const MONTHS = [
  "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
];

function helpers() {
  const headers = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
  };
  return headers;
}

export async function GET() {
  try {
    if (!TOKEN) {
      return NextResponse.json(
        { error: "GITHUB_TOKEN is not configured. Add it to .env.local to enable live GitHub data." },
        { status: 503 }
      );
    }

    const [contributionsRes, reposRes] = await Promise.all([
      fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: CONTRIBUTIONS_QUERY, variables: { login: GITHUB_USERNAME } }),
        next: { revalidate: 300 },
      }),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=1`, {
        headers: helpers(),
        next: { revalidate: 300 },
      }),
    ]);

    if (!contributionsRes.ok) {
      return NextResponse.json(
        { error: `GitHub GraphQL request failed: ${contributionsRes.status}` },
        { status: contributionsRes.status }
      );
    }

    const graphql = await contributionsRes.json();
    const user = graphql?.data?.user;

    if (!user) {
      const message = graphql?.errors?.[0]?.message ?? "GitHub GraphQL returned no user data";
      return NextResponse.json({ error: message }, { status: 502 });
    }

    const repos = reposRes.ok ? await reposRes.json() : [];
    const repo = repos[0] ?? null;

    const now = new Date();

    const weeks =
      user.contributionsCollection?.contributionCalendar?.weeks?.map(
        (week: { contributionDays: Array<Record<string, unknown>> }) => ({
          days: week.contributionDays.map((day) => ({
            date: day.date as string,
            count: day.contributionCount as number,
            level: LEVEL_MAP[day.contributionLevel as string] ?? 0,
          })),
        })
      ) ?? [];

    return NextResponse.json(
      {
        username: GITHUB_USERNAME,
        date: `${MONTHS[now.getMonth()]} ${now.getFullYear()}`,
        year: now.getFullYear(),
        totalContributions:
          user.contributionsCollection?.contributionCalendar?.totalContributions ?? 0,
        weeks,
        latestRepository: repo
          ? {
              name: repo.name as string,
              desc: (repo.description as string | null) ?? "",
              url: repo.html_url as string,
            }
          : null,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}