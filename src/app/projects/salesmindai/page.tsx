"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { SalesMindAIPreview } from "@/components/SalesMindAIPreview";

export default function SalesMindAICaseStudy() {
  const featureBullets = [
    "customer management",
    "task & activity tracking",
    "AI lead scoring",
    "analytics dashboard",
    "follow-up email generation",
    "data import/export",
  ];

  const archNodes = [
    { title: "React", subtitle: "UI & State" },
    { title: "FastAPI", subtitle: "REST API & Auth" },
    { title: "PostgreSQL", subtitle: "Relational DB" },
    { title: "AI Providers", subtitle: "LLM Fallback" },
    { title: "Tailwind CSS", subtitle: "Design System" },
  ];

  return (
    <div className="case-study-shell">
      <div className="site-grain" aria-hidden="true" />

      <header className="case-study-header">
        <div className="page-frame case-study-header-inner">
          <Link className="brand" href="/" aria-label="Sohham Choudhary home">
            <span className="brand-mark">SC</span>
            <span className="brand-copy">
              <strong>Sohham Choudhary</strong>
              <small>Data · AI · Software</small>
            </span>
          </Link>

          <span className="case-study-header-meta">Work / 01</span>

          <Link className="case-study-back" href="/">
            <ArrowLeft size={15} />
            <span>Back to portfolio</span>
          </Link>
        </div>
      </header>

      <main className="case-study-main">
        <section className="case-study-hero">
          <div className="page-frame">
            <div className="section-kicker case-study-kicker">
              <span className="section-kicker-index">01</span>
              <span>/</span>
              <span>Featured system / case study</span>
            </div>

            <div className="case-study-hero-grid">
              <div className="case-study-copy">
                <span className="case-study-status">
                  <span className="status-dot" aria-hidden="true" />
                  Live build
                </span>

                <h1>
                  SalesMind
                  <br />
                  <em>AI</em>
                </h1>

                <p className="case-study-tagline">AI-powered CRM</p>
                <p className="case-study-description">
                  A full-stack CRM that centralizes customer data, automates workflows and
                  provides AI-powered insights to help teams sell smarter.
                </p>

                <div className="case-study-features">
                  {featureBullets.map((bullet) => (
                    <div className="case-study-feature" key={bullet}>
                      <CheckCircle2 size={14} />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="case-study-actions">
                  <a className="button button-dark" href="/projects/salesmindai/demo">
                    Live demo <ArrowRight size={16} />
                  </a>
                  <a
                    className="button button-outline"
                    href="https://github.com/Sohham01/SalesMindAI"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub <ArrowRight size={16} />
                  </a>
                </div>

                <Link className="case-study-demo-link" href="/projects/salesmindai/demo">
                  Demo access available <ArrowRight size={14} />
                </Link>
              </div>

              <SalesMindAIPreview />
            </div>
          </div>
        </section>

        <section className="case-study-section">
          <div className="page-frame">
            <div className="case-study-context-grid">
              <article className="case-study-context-card">
                <span>The problem</span>
                <p>
                  Sales information is often fragmented across customers, tasks, notes and
                  activities, making it hard to get a clear picture and take action.
                </p>
              </article>

              <article className="case-study-context-card">
                <span>The approach</span>
                <p>
                  Build a centralized CRM with analytics and AI-assisted workflows to help teams
                  focus on what matters most.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="case-study-section case-study-architecture-section">
          <div className="page-frame">
            <div className="case-study-section-heading">
              <div className="section-kicker">
                <span className="section-kicker-index">02</span>
                <span>/</span>
                <span>Architecture</span>
              </div>
              <p>Five layers from interface to model provider.</p>
            </div>

            <div className="case-study-architecture">
              {archNodes.map((node, index) => (
                <div className="case-study-architecture-node" key={node.title}>
                  <div>
                    <strong>{node.title}</strong>
                    <span>{node.subtitle}</span>
                  </div>
                  {index < archNodes.length - 1 && <ArrowRight size={16} />}
                </div>
              ))}
            </div>

            <div className="case-study-engineering">
              <div className="case-study-engineering-heading">
                <div className="section-kicker">
                  <span className="section-kicker-index">03</span>
                  <span>/</span>
                  <span>Build notes</span>
                </div>
                <p>Implementation details from the project repository.</p>
              </div>

              <div className="case-study-engineering-grid">
                <article>
                  <span>Backend</span>
                  <strong>FastAPI + SQLAlchemy + Pydantic</strong>
                  <p>25+ REST endpoints across authentication, customers, tasks, notes, analytics and AI workflows.</p>
                </article>
                <article>
                  <span>Data layer</span>
                  <strong>PostgreSQL + Alembic</strong>
                  <p>Six SQLAlchemy models with migrations applied automatically during startup.</p>
                </article>
                <article>
                  <span>AI routing</span>
                  <strong>Four-provider fallback chain</strong>
                  <p>Groq, OpenRouter, Cerebras and Gemini can be tried in sequence when automatic routing is enabled.</p>
                </article>
                <article>
                  <span>Security + deployment</span>
                  <strong>JWT auth · Vercel + Render</strong>
                  <p>Access and refresh tokens, login rate limiting, CORS controls and separate frontend/backend deployment.</p>
                </article>
              </div>
            </div>

            <div className="case-study-bottomline">
              <span>SalesMindAI / 001</span>
              <Link href="/">
                Back to selected work <ArrowLeft size={14} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
