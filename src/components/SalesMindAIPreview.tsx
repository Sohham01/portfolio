"use client";

import { useState } from "react";
import {
  Activity,
  BarChart3,
  LayoutDashboard,
  Settings,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

export function SalesMindAIPreview() {
  const [activeView, setActiveView] = useState<"dashboard" | "copilot">("dashboard");

  return (
    <div className="salesmind-preview">
      <div className="salesmind-preview-bar">
        <div className="salesmind-preview-window">
          <span />
          <span />
          <span />
          <code>app.salesmindai.io/dashboard</code>
        </div>
        <span className="salesmind-preview-label">Preview</span>
      </div>

      <div className="salesmind-preview-body">
        <aside className="salesmind-sidebar">
          <div className="salesmind-mark">S</div>
          <button
            type="button"
            className={activeView === "dashboard" ? "is-active" : ""}
            onClick={() => setActiveView("dashboard")}
            aria-label="Show dashboard preview"
          >
            <LayoutDashboard size={15} />
          </button>
          <button
            type="button"
            className={activeView === "copilot" ? "is-active" : ""}
            onClick={() => setActiveView("copilot")}
            aria-label="Show AI copilot preview"
          >
            <Sparkles size={15} />
          </button>
          <span>
            <Users size={15} />
          </span>
          <span>
            <BarChart3 size={15} />
          </span>
          <span>
            <Settings size={15} />
          </span>
        </aside>

        <div className="salesmind-dashboard">
          <div className="salesmind-dashboard-heading">
            <div className="salesmind-metrics">
              <div>
                <span>Total customers</span>
                <strong>2,431</strong>
              </div>
              <div>
                <span>Pipeline value</span>
                <strong>$1.29M</strong>
              </div>
              <div>
                <span>Conversion rate</span>
                <strong>51.3%</strong>
              </div>
              <div>
                <span>AI suggestions</span>
                <strong>1,203</strong>
              </div>
            </div>
            <span className="salesmind-demo-label">Demo data</span>
          </div>

          {activeView === "dashboard" ? (
            <div className="salesmind-panels">
              <div className="salesmind-panel salesmind-revenue-panel">
                <div className="salesmind-panel-heading">
                  <strong>
                    <TrendingUp size={13} /> Revenue trends
                  </strong>
                  <span>+24.8% yoy</span>
                </div>

                <div className="salesmind-chart">
                  <svg viewBox="0 0 400 120" aria-label="Revenue trends chart" role="img">
                    <defs>
                      <linearGradient id="salesmind-purple-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#d8ff62" stopOpacity="0.22" />
                        <stop offset="100%" stopColor="#d8ff62" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <line x1="0" y1="30" x2="400" y2="30" />
                    <line x1="0" y1="70" x2="400" y2="70" />
                    <path
                      className="salesmind-chart-fill"
                      d="M 0 90 Q 60 75, 120 45 T 240 60 T 360 20 L 400 15 L 400 120 L 0 120 Z"
                    />
                    <path
                      className="salesmind-chart-line"
                      d="M 0 90 Q 60 75, 120 45 T 240 60 T 360 20 L 400 15"
                    />
                    <circle cx="120" cy="45" r="3" />
                    <circle cx="240" cy="60" r="3" />
                    <circle cx="400" cy="15" r="3.5" />
                  </svg>
                </div>

                <div className="salesmind-chart-labels">
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>May</span>
                  <span>Jul</span>
                  <span>Sep</span>
                  <span>Nov</span>
                </div>
              </div>

              <div className="salesmind-panel salesmind-health-panel">
                <div className="salesmind-panel-heading">
                  <strong>
                    <Activity size={13} /> Lead health
                  </strong>
                </div>

                <div className="salesmind-health-ring">
                  <svg viewBox="0 0 100 100" aria-hidden="true">
                    <circle cx="50" cy="50" r="38" />
                    <circle cx="50" cy="50" r="38" />
                    <circle cx="50" cy="50" r="38" />
                  </svg>
                  <div>
                    <strong>84%</strong>
                    <span>Healthy</span>
                  </div>
                </div>

                <div className="salesmind-health-list">
                  <span>
                    <i className="health-blue" /> High propensity <b>58%</b>
                  </span>
                  <span>
                    <i className="health-orange" /> Nurture required <b>26%</b>
                  </span>
                  <span>
                    <i className="health-muted" /> Risk alert <b>16%</b>
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="salesmind-copilot-panel">
              <div>
                <span>AI copilot / active</span>
                <strong>Turn signals into the next action.</strong>
              </div>
              <div className="salesmind-copilot-lines">
                <span>✓ Prioritized 18 follow-ups</span>
                <span>↗ Found 6 high-intent accounts</span>
                <span>＋ Drafted 4 outreach notes</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
