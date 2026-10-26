"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Now", href: "#now" },
  { label: "Contact", href: "#contact" },
];

const practiceAreas = [
  {
    id: "data",
    label: "Data",
    detail: "Find the structure before reaching for the solution.",
  },
  {
    id: "ai",
    label: "AI / ML",
    detail: "Turn patterns into decisions people can actually use.",
  },
  {
    id: "software",
    label: "Software",
    detail: "Build the dependable layer that makes the idea real.",
  },
  {
    id: "product",
    label: "Product",
    detail: "Keep the work pointed at a clearer, better next move.",
  },
] as const;

type FieldPoint = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
};

function SignalField({ activeArea }: { activeArea: string }) {
  const fieldRef = useRef<HTMLDivElement>(null);
  const activeAreaRef = useRef(activeArea);

  useEffect(() => {
    activeAreaRef.current = activeArea;
  }, [activeArea]);

  useEffect(() => {
    const field = fieldRef.current;
    const canvas = field?.querySelector("canvas");
    if (!field || !canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: 0.68, y: 0.42, active: false };
    const points: FieldPoint[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let animationFrame = 0;

    const colors: Record<string, [number, number, number]> = {
      data: [241, 116, 84],
      ai: [111, 133, 255],
      software: [23, 23, 20],
      product: [143, 178, 44],
    };

    const resize = () => {
      const bounds = field.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!points.length) {
        for (let index = 0; index < 44; index += 1) {
          points.push({
            x: (Math.sin(index * 9.17) * 0.5 + 0.5) * 0.98 + 0.01,
            y: (Math.sin(index * 4.73 + 1.7) * 0.5 + 0.5) * 0.96 + 0.02,
            vx: (Math.sin(index * 2.4) * 0.00015) + 0.00008,
            vy: Math.cos(index * 3.1) * 0.00012,
            radius: 1.1 + (index % 3) * 0.55,
            phase: index * 0.8,
          });
        }
      }
    };

    const setPointer = (event: globalThis.PointerEvent) => {
      const bounds = field.getBoundingClientRect();
      const inside =
        event.clientX >= bounds.left &&
        event.clientX <= bounds.right &&
        event.clientY >= bounds.top &&
        event.clientY <= bounds.bottom;

      pointer.active = inside && event.pointerType !== "touch";
      if (pointer.active) {
        pointer.x = (event.clientX - bounds.left) / bounds.width;
        pointer.y = (event.clientY - bounds.top) / bounds.height;
      }
    };

    const draw = () => {
      const [red, green, blue] = colors[activeAreaRef.current] ?? colors.data;
      context.clearRect(0, 0, width, height);

      const positions = points.map((point) => {
        if (!reducedMotion) {
          point.x += point.vx;
          point.y += point.vy;

          if (point.x > 1.04) point.x = -0.04;
          if (point.x < -0.04) point.x = 1.04;
          if (point.y > 1.04) point.y = -0.04;
          if (point.y < -0.04) point.y = 1.04;

          if (pointer.active) {
            const dx = pointer.x - point.x;
            const dy = pointer.y - point.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 0.22 && distance > 0.01) {
              point.x -= (dx / distance) * 0.0008;
              point.y -= (dy / distance) * 0.0008;
            }
          }
        }

        return { x: point.x * width, y: point.y * height, point };
      });

      context.lineWidth = 1;
      for (let first = 0; first < positions.length; first += 1) {
        for (let second = first + 1; second < positions.length; second += 1) {
          const start = positions[first];
          const end = positions[second];
          const dx = start.x - end.x;
          const dy = start.y - end.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance > 125) continue;

          const opacity = (1 - distance / 125) * 0.2;
          context.strokeStyle = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
          context.beginPath();
          context.moveTo(start.x, start.y);
          context.lineTo(end.x, end.y);
          context.stroke();
        }
      }

      positions.forEach(({ x, y, point }) => {
        const pulse = reducedMotion ? 0 : Math.sin(frame * 0.035 + point.phase) * 0.35;
        context.fillStyle = `rgba(${red}, ${green}, ${blue}, ${0.4 + pulse * 0.14})`;
        context.beginPath();
        context.arc(x, y, point.radius + pulse, 0, Math.PI * 2);
        context.fill();
      });

      if (pointer.active) {
        const cursorX = pointer.x * width;
        const cursorY = pointer.y * height;
        context.strokeStyle = `rgba(${red}, ${green}, ${blue}, 0.42)`;
        context.lineWidth = 1;
        context.beginPath();
        context.arc(cursorX, cursorY, 19 + Math.sin(frame * 0.04) * 2, 0, Math.PI * 2);
        context.stroke();
        context.beginPath();
        context.arc(cursorX, cursorY, 3, 0, Math.PI * 2);
        context.fillStyle = `rgba(${red}, ${green}, ${blue}, 0.9)`;
        context.fill();
      }

      frame += 1;
      if (!reducedMotion) animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", setPointer, { passive: true });

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(field);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", setPointer);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={fieldRef} className="hero-field" aria-hidden="true">
      <canvas />
      <div className="hero-field-label">
        <span className="hero-field-label-line" />
        <span>Interactive signal field</span>
        <span>Move to explore</span>
      </div>
    </div>
  );
}

function SectionIntro({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-intro" data-reveal>
      <div>
        <div className="section-kicker">
          <span className="section-kicker-index">{index}</span>
          <span>/</span>
          <span>{eyebrow}</span>
        </div>
        <h2 className="section-title">{title}</h2>
      </div>
      <p className="section-description">{description}</p>
    </div>
  );
}

export function PortfolioHome() {
  const shellRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeArea, setActiveArea] = useState("data");
  const [scrollProgress, setScrollProgress] = useState(0);
  const featuredProject = PORTFOLIO_DATA.projects.find((project) => project.featured);
  const secondaryProjects = PORTFOLIO_DATA.projects.filter((project) => !project.featured);
  const { personal } = PORTFOLIO_DATA;
  const selectedArea = practiceAreas.find((area) => area.id === activeArea) ?? practiceAreas[0];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -36px" },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0);
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch" || !shellRef.current) return;

    const bounds = shellRef.current.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const normalizedX = x / bounds.width - 0.5;
    const normalizedY = y / bounds.height - 0.5;

    shellRef.current.style.setProperty("--mouse-x", normalizedX.toFixed(3));
    shellRef.current.style.setProperty("--mouse-y", normalizedY.toFixed(3));
    shellRef.current.style.setProperty("--spotlight-x", `${x}px`);
    shellRef.current.style.setProperty("--spotlight-y", `${y}px`);
    shellRef.current.classList.add("pointer-active");
  };

  const handlePointerLeave = () => {
    shellRef.current?.classList.remove("pointer-active");
  };

  return (
    <div
      ref={shellRef}
      className="portfolio-shell"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="site-grain" aria-hidden="true" />
      <div className="mouse-spotlight" aria-hidden="true" />
      <div
        className="scroll-progress"
        aria-hidden="true"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      <header className="site-header">
        <div className="page-frame header-inner">
          <a className="brand" href="#top" aria-label="Sohham Choudhary home">
            <span className="brand-mark">SC</span>
            <span className="brand-copy">
              <strong>Sohham Choudhary</strong>
              <small>Data · AI · Software</small>
            </span>
          </a>

          <nav className="site-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-meta">
            <span className="status-dot" aria-hidden="true" />
            <span>Open to opportunities</span>
          </div>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-nav-wrap">
            <nav className="page-frame mobile-nav" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={closeMobileMenu}>
                  <span>{item.label}</span>
                  <ArrowUpRight size={16} />
                </a>
              ))}
              <div className="mobile-nav-footer">
                <span>{personal.institution}</span>
                <span className="mobile-status">
                  <span className="status-dot" aria-hidden="true" />
                  {personal.currentState.status}
                </span>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section id="top" className="hero-section">
          <SignalField activeArea={activeArea} />
          <div className="page-frame hero-grid">
            <div className="hero-copy" data-reveal>
              <div className="eyebrow">
                <span className="eyebrow-index">00</span>
                <span>Independent builder</span>
              </div>

              <h1 className="hero-title" data-reveal data-reveal-delay="80">
                I build
                <br className="hero-mobile-break" /> <em>data products</em>
                <br />
                and software.
              </h1>

              <p className="hero-lede">
                {personal.bio} I turn messy questions into useful interfaces, analytical tools and
                dependable systems.
              </p>

              <div className="hero-actions">
                <a className="button button-dark" href="#work">
                  See selected work
                  <ArrowDownRight size={17} />
                </a>
                <a className="text-link" href={`mailto:${personal.socials.email}`}>
                  Start a conversation <ArrowUpRight size={15} />
                </a>
              </div>

              <div className="hero-signature">
                <span className="signature-line" />
                <span>Seeking software, data and ML internships</span>
                <span className="signature-year">2026</span>
              </div>

              <a className="hero-scroll-cue" href="#work" aria-label="Scroll to selected work">
                <span className="hero-scroll-cue-dot" />
                <span>Scroll to explore</span>
                <ArrowDownRight size={15} />
              </a>
            </div>

            <div className="hero-aside">
              <div className="hero-workcard" data-reveal data-reveal-delay="140">
                <div className="hero-workcard-topline">
                  <span>How I work</span>
                  <span>Choose a lens</span>
                </div>

                <div className="hero-workcard-heading">
                  <span>From question</span>
                  <strong>to something useful.</strong>
                </div>

                <div className="practice-list" role="tablist" aria-label="Practice areas">
                  {practiceAreas.map((area, index) => (
                    <button
                      key={area.id}
                      type="button"
                      className={`practice-item${activeArea === area.id ? " is-active" : ""}`}
                      onClick={() => setActiveArea(area.id)}
                      onMouseEnter={() => setActiveArea(area.id)}
                      onKeyDown={(event) => {
                          if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                            event.preventDefault();
                            setActiveArea(
                              practiceAreas[(index + 1) % practiceAreas.length].id,
                            );
                          }
                          if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                            event.preventDefault();
                            setActiveArea(
                              practiceAreas[(index - 1 + practiceAreas.length) % practiceAreas.length].id,
                            );
                          }
                        }}
                      role="tab"
                      aria-selected={activeArea === area.id}
                    >
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <strong>{area.label}</strong>
                      <ArrowUpRight
                        size={15}
                        aria-label={`Move to ${practiceAreas[(index + 1) % practiceAreas.length].label}`}
                        onClick={(event) => {
                          event.stopPropagation();
                          setActiveArea(practiceAreas[(index + 1) % practiceAreas.length].id);
                        }}
                      />
                    </button>
                  ))}
                </div>

                <div key={selectedArea.id} className="practice-detail" aria-live="polite">
                  <span>{selectedArea.label} / in focus</span>
                  <strong>{selectedArea.detail}</strong>
                </div>

                <div className="hero-workcard-footer">
                  <span>Data · AI · Software · Product</span>
                  <span>{personal.currentState.status}</span>
                </div>
              </div>

              <div className="hero-details">
                <div>
                  <span>Focus</span>
                  <strong>{personal.title}</strong>
                </div>
                <div>
                  <span>Degree</span>
                  <strong>{personal.period}</strong>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section id="work" className="section section-work">
          <div className="page-frame">
            <SectionIntro
              index="01"
              eyebrow="Selected work"
              title="Systems with a point of view."
              description="A small collection of experiments, products and analytical tools built to make complicated things easier to act on."
            />

            {featuredProject && (
              <article className="featured-project" data-reveal data-reveal-delay="120">
                <div className="featured-project-topline">
                  <span>01 / Featured system</span>
                  <span>{featuredProject.category}</span>
                </div>

                <div className="featured-project-grid">
                  <div className="featured-project-copy">
                    <div className="project-status-pill">
                      <span className="status-dot" aria-hidden="true" />
                      Live build
                    </div>
                    <h3>{featuredProject.title}</h3>
                    <p className="featured-project-tagline">{featuredProject.tagline}</p>
                    <p className="featured-project-description">{featuredProject.description}</p>

                    <div className="project-actions">
                      {featuredProject.caseStudyUrl && (
                        <a className="button button-acid" href={featuredProject.caseStudyUrl}>
                          Read the case study <ArrowUpRight size={16} />
                        </a>
                      )}
                      {featuredProject.githubUrl && (
                        <a
                          className="project-text-link"
                          href={featuredProject.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Github size={15} /> Source on GitHub
                        </a>
                      )}
                    </div>

                    <div className="project-metrics">
                      {featuredProject.metrics?.slice(0, 3).map((metric) => (
                        <div key={metric.label}>
                          <span>{metric.label}</span>
                          <strong>{metric.value}</strong>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="project-visual" aria-label="SalesMindAI system flow">
                    <div className="project-visual-header">
                      <span>Sales intelligence / 001</span>
                      <span className="visual-live">● live</span>
                    </div>

                    <div className="project-flow">
                      {[
                        ["01", "Customer data", "ingest"],
                        ["02", "Health score", "interpret"],
                        ["03", "AI signal", "prioritize"],
                        ["04", "Next action", "move"],
                      ].map(([number, title, detail]) => (
                        <div className="flow-step" key={number}>
                          <span className="flow-number">{number}</span>
                          <strong>{title}</strong>
                          <small>{detail}</small>
                        </div>
                      ))}
                    </div>

                    <div className="project-visual-note">
                      <span className="note-mark">↗</span>
                      <span>From raw signals to a better next move.</span>
                    </div>
                  </div>
                </div>
              </article>
            )}

            <div className="project-list-label">
              <span>More work</span>
              <span>Open the repo ↗</span>
            </div>

            <div className="project-list" data-reveal data-reveal-delay="180">
              {secondaryProjects.map((project) => {
                const href = project.githubUrl ?? project.caseStudyUrl ?? "#contact";
                return (
                  <a
                    className="project-row"
                    href={href}
                    key={project.id}
                    target={project.githubUrl ? "_blank" : undefined}
                    rel={project.githubUrl ? "noreferrer" : undefined}
                  >
                    <span className="project-row-number">{project.number}</span>
                    <span className="project-row-main">
                      <strong>{project.title}</strong>
                      <small>{project.tagline}</small>
                    </span>
                    <span className="project-row-category">{project.category}</span>
                    <ArrowUpRight className="project-row-arrow" size={19} />
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className="section section-about">
          <div className="page-frame">
            <SectionIntro
              index="02"
              eyebrow="The practice"
              title="Curious by default. Useful on purpose."
              description="I like the middle layer between a question and a working thing: the framing, the trade-offs, and the details that make a system feel clear."
            />

            <div className="about-grid" data-reveal data-reveal-delay="120">
              <div className="about-copy">
                {personal.aboutLong.map((paragraph, index) => (
                  <p key={paragraph} className={index === 0 ? "about-lede" : undefined}>
                    {paragraph}
                  </p>
                ))}

                <div className="education-card">
                  <div className="education-card-icon">
                    <CalendarDays size={18} />
                  </div>
                  <div>
                    <span>Currently studying</span>
                    <strong>{personal.degree}</strong>
                    <small>
                      {personal.institution} · {personal.period}
                    </small>
                  </div>
                </div>
              </div>

              <div className="pillar-list">
                {PORTFOLIO_DATA.pillars.map((pillar, index) => (
                  <div className="pillar-item" key={pillar.code}>
                    <span className="pillar-number">0{index + 1}</span>
                    <div>
                      <div className="pillar-heading">
                        <strong>{pillar.title}</strong>
                        <span>{pillar.step}</span>
                      </div>
                      <p>{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="now" className="section section-now">
          <div className="page-frame">
            <SectionIntro
              index="03"
              eyebrow="Now / in progress"
              title="The things getting my attention."
              description="A live snapshot of what I am practicing, shipping and trying to understand better right now."
            />

            <div className="now-grid" data-reveal data-reveal-delay="120">
              <div className="now-card">
                <div className="now-card-heading">
                  <span>Current coordinates</span>
                  <span className="now-card-status">
                    <span className="status-dot" aria-hidden="true" />
                    {personal.currentState.status}
                  </span>
                </div>

                <div className="now-state-list">
                  <div>
                    <span>Building</span>
                    <strong>{personal.currentState.building}</strong>
                    <small>Turning open-ended questions into dependable systems.</small>
                  </div>
                  <div>
                    <span>Learning</span>
                    <strong>{personal.currentState.learning}</strong>
                    <small>Strengthening the fundamentals behind the interfaces.</small>
                  </div>
                  <div>
                    <span>Exploring</span>
                    <strong>{personal.currentState.exploring}</strong>
                    <small>Making useful systems feel simple enough to trust.</small>
                  </div>
                </div>

                <div className="now-card-footer">
                  <span>Updated August 2026</span>
                  <span>01 / 03</span>
                </div>
              </div>

              <div className="focus-grid">
                {PORTFOLIO_DATA.nowFocus.map((focus) => (
                  <article className="focus-card" key={focus.number}>
                    <div className="focus-card-topline">
                      <span>{focus.number}</span>
                      <span>{focus.tag}</span>
                    </div>
                    <h3>{focus.title}</h3>
                    <p>{focus.description}</p>
                    <div className="focus-card-bottom">
                      <span>Practice track</span>
                      <strong>Ongoing</strong>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="toolbox" className="section section-toolbox">
          <div className="page-frame">
            <SectionIntro
              index="04"
              eyebrow="Toolbox / experience"
              title="The stack is a means, not the point."
              description="I reach for the tools that let me move from an idea to a dependable result — quickly, carefully and with room to learn."
            />

            <div className="toolbox-grid" data-reveal data-reveal-delay="120">
              <div className="skills-grid">
                {PORTFOLIO_DATA.skills.map((category) => (
                  <div
                    className={`skill-group skill-group-${category.title
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")}`}
                    key={category.title}
                  >
                    <span>{category.title}</span>
                    <div className="skill-pills">
                      {category.skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="experience-card">
                <div className="experience-card-topline">
                  <span>Experience</span>
                  <span>01 entry</span>
                </div>

                {PORTFOLIO_DATA.experience.map((item) => (
                  <div className="experience-entry" key={`${item.organization}-${item.role}`}>
                    <div className="experience-meta">
                      <span>{item.period}</span>
                      <span>{item.location ?? "Remote"}</span>
                    </div>
                    <h3>{item.role}</h3>
                    <strong>{item.organization}</strong>
                    <p>{item.description}</p>
                    {item.highlights && (
                      <ul>
                        {item.highlights.map((highlight) => (
                          <li key={highlight}>
                            <Check size={14} /> {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="page-frame contact-inner">
            <div className="section-kicker contact-kicker">
              <span className="section-kicker-index">05</span>
              <span>/</span>
              <span>Contact</span>
            </div>

            <div className="contact-grid" data-reveal data-reveal-delay="120">
              <div>
                <h2 className="contact-title">
                  Let&apos;s make the
                  <br />
                  <em>hard thing</em> useful.
                </h2>
                <p className="contact-copy">
                  I&apos;m interested in ambitious projects, internships, technical challenges and
                  good people to learn with.
                </p>
              </div>

              <div className="contact-actions">
                <a className="contact-primary-link" href={`mailto:${personal.socials.email}`}>
                  <span>Send an email</span>
                  <ArrowUpRight size={21} />
                </a>
                <div className="contact-links">
                  <a href={personal.socials.github} target="_blank" rel="noreferrer">
                    <Github size={16} /> GitHub
                  </a>
                  <a href={personal.socials.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin size={16} /> LinkedIn
                  </a>
                  <a href={`mailto:${personal.socials.email}`}>
                    <Mail size={16} /> {personal.socials.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-bottomline">
              <span>
                <MapPin size={14} /> {personal.location}
              </span>
              <span>{personal.status.text}</span>
              <span>© 2026 Sohham Choudhary</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-frame site-footer-inner">
          <span>Built with intent.</span>
          <a href="#top">
            Back to top <ArrowUpRight size={14} />
          </a>
        </div>
      </footer>
    </div>
  );
}
