export interface GithubDay {
  date: string;
  count: number;
  level: number;
}

export interface GithubWeek {
  days: GithubDay[];
}

export interface GithubLiveData {
  username: string;
  date: string;
  year: number;
  totalContributions: number;
  weeks: GithubWeek[];
  latestRepository: {
    name: string;
    desc: string;
    url: string;
  } | null;
}

export interface GithubApiResponse {
  error?: string;
  username: string;
  date: string;
  year: number;
  totalContributions: number;
  weeks: GithubWeek[];
  latestRepository: GithubLiveData["latestRepository"];
}