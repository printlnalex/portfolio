import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [activeCompany, setActiveCompany] = useState(null);
  const [activeJourney, setActiveJourney] = useState(null);

  const toggleCompany = (id) => {
    setActiveCompany((prev) => (prev === id ? null : id));
  };

  const toggleJourney = (id) => {
    setActiveJourney((prev) => (prev === id ? null : id));
  };

  return (
    <div style={{ background: "#fafaf8", minHeight: "100vh" }}>
      <section
        className="section"
        style={{
          paddingTop: "6rem",
          paddingBottom: "4rem",
          borderBottom: "1px solid rgba(0,0,0,0.07)",
        }}
      >
        <p className="hero-eyebrow">Founder · Builder · UW Informatics 2026</p>
        <h1 className="serif hero-name">
          Ales
          <br />
          <em>builds things</em>
        </h1>
        <p className="hero-bio">
          I write code that runs real businesses. Currently operating two
          companies and finishing my degree at UW — building in the spaces where
          software hasn't caught up yet.
        </p>
        <div className="hero-row">
          <span className="status-badge">
            <span className="pulse"></span>Open to opportunities
          </span>
        </div>
        <div className="hero-row">
          <Link to="/projects" className="btn btn-primary">
            View projects ↓
          </Link>
          <Link to="/contact" className="btn">
            Contact me
          </Link>
          <a
            href="https://github.com/printlnalex"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </section>

      <div className="divider"></div>

      <section className="section">
        <div className="section-label">About me</div>
        <div className="about-grid">
          <div className="photo-slot">
            <img
              src="/images/ales.png"
              alt="Ales"
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>
          <div className="about-text">
            <h2 className="serif">
              Founder who codes,
              <br />
              <em>developer who ships</em>
            </h2>
            <p>
              I started building software because I saw real operational gaps in
              my own appliance repair business — and decided to fix them myself
              instead of waiting for someone else to.
            </p>
            <p>
              That turned into FieldAlpha, an AI-powered SaaS now used by live
              technicians. I build across the full stack: Next.js, Supabase,
              TypeScript, AI integrations — and I care deeply about things that
              actually work in production.
            </p>
            <p>
              I'm driven by the gap between what software <em>could</em> do for
              small businesses and what's currently available to them.
            </p>
            <div className="goal-strip">
              <div className="goal-label">My goal</div>
              <div className="goal-text">
                Full-stack developer who brings ideas to life — building products
                that solve real problems at real scale.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section className="section">
        <div className="section-label">My companies</div>
        <p
          style={{
            fontSize: "15px",
            color: "#5a5a5a",
            marginBottom: "2rem",
            lineHeight: 1.8,
          }}
        >
          I don't just build for others — I run two businesses. This is where my
          software gets battle-tested against real operational constraints.
        </p>

        <div className="company-grid">
          <div
            className={`company-card ${activeCompany === "ff" ? "active" : ""}`}
            onClick={() => toggleCompany("ff")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && toggleCompany("ff")}
          >
            <div className="company-num">Company 01</div>
            <div className="serif company-name">
              Fix Flow
              <br />
              Appliance
            </div>
            <div className="company-tag">Operations · Field Service</div>
            <div className="company-desc">
              Appliance repair company I founded and operate — managing
              technicians, field operations, and customer experience day to day.
            </div>
          </div>
          <div
            className={`company-card ${activeCompany === "fa" ? "active" : ""}`}
            onClick={() => toggleCompany("fa")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && toggleCompany("fa")}
          >
            <div className="company-num">Company 02</div>
            <div className="serif company-name">FieldAlpha</div>
            <div className="company-tag">SaaS · AI · Field Ops</div>
            <div className="company-desc">
              AI-powered field service management software built from scratch to
              solve the exact problems I face running Fix Flow.
            </div>
          </div>
        </div>

        <div
          className={`company-detail ${activeCompany === "ff" ? "open" : ""}`}
        >
          <div className="detail-inner">
            <div>
              <div className="detail-img-slot">
                <img
                  src="/images/fixflow.jpg"
                  alt="Fix Flow"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                  onError={(e) => (e.target.style.display = "none")}
                />
              </div>
              <div className="impact-row" style={{ marginTop: "1rem" }}>
                <div className="impact-box">
                  <div className="impact-num serif">3+</div>
                  <div className="impact-label">Technicians managed</div>
                </div>
                <div className="impact-box">
                  <div className="impact-num serif">Live</div>
                  <div className="impact-label">Operating today</div>
                </div>
                <div className="impact-box">
                  <div className="impact-num serif">Real</div>
                  <div className="impact-label">Testbed for software</div>
                </div>
              </div>
            </div>
            <div className="detail-facts">
              <div className="fact">
                <div className="fact-label">Role</div>
                <div className="fact-value">Founder & Operator</div>
              </div>
              <div className="fact">
                <div className="fact-label">Team</div>
                <div className="fact-value">Peter (Lead), Maxim, Ruvim</div>
              </div>
              <div className="fact">
                <div className="fact-label">Why it matters</div>
                <div
                  className="fact-value"
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.7,
                    color: "#5a5a5a",
                  }}
                >
                  Every feature in FieldAlpha is validated here first. Real
                  scheduling conflicts, real invoice edge cases, real customer
                  expectations — no simulations.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`company-detail ${activeCompany === "fa" ? "open" : ""}`}
        >
          <div className="detail-inner">
            <div>
              <div className="detail-img-slot">
                <img
                  src="/images/fieldalpha-app.jpg"
                  alt="FieldAlpha"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                  onError={(e) => (e.target.style.display = "none")}
                />
              </div>
              <div className="impact-row" style={{ marginTop: "1rem" }}>
                <div className="impact-box">
                  <div className="impact-num serif">Live</div>
                  <div className="impact-label">Production users</div>
                </div>
                <div className="impact-box">
                  <div className="impact-num serif">AI</div>
                  <div className="impact-label">Gemini job intake</div>
                </div>
                <div className="impact-box">
                  <div className="impact-num serif">Full</div>
                  <div className="impact-label">Stack built solo</div>
                </div>
              </div>
            </div>
            <div className="detail-facts">
              <div className="fact">
                <div className="fact-label">Role</div>
                <div className="fact-value">Founder & Developer</div>
              </div>
              <div className="fact">
                <div className="fact-label">Stack</div>
                <div className="fact-value">
                  <div className="stack-pills">
                    <span className="spill">Next.js</span>
                    <span className="spill">Supabase</span>
                    <span className="spill">TypeScript</span>
                    <span className="spill">Gemini AI</span>
                    <span className="spill">Twilio</span>
                    <span className="spill">SendGrid</span>
                  </div>
                </div>
              </div>
              <div className="fact">
                <div className="fact-label">What it does</div>
                <div
                  className="fact-value"
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.7,
                    color: "#5a5a5a",
                  }}
                >
                  AI-powered job intake, real-time dispatch, scheduling,
                  invoicing, customer management, and SMS notifications —
                  multi-tenant with row-level security.
                </div>
              </div>
              <div className="fact">
                <div className="fact-label">Live at</div>
                <div className="fact-value">
                  <a
                    href="https://fieldalpha.dev"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "#0f0f0f",
                      fontWeight: 500,
                      textDecoration: "underline",
                      textUnderlineOffset: "3px",
                    }}
                  >
                    fieldalpha.dev ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section className="section">
        <div className="section-label">Project journey</div>
        <p
          style={{
            fontSize: "15px",
            color: "#5a5a5a",
            marginBottom: "2.5rem",
            lineHeight: 1.8,
          }}
        >
          Every project tells a story. Click to expand the full picture — what I
          built, why, and what it produced.
        </p>

        <div className="journey-list">
          <div className="journey-line"></div>

          <div
            className={`journey-item ${activeJourney === "imow" ? "open" : ""}`}
            onClick={() => toggleJourney("imow")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && toggleJourney("imow")}
          >
            <div className="journey-dot">01</div>
            <div>
              <div className="journey-header">
                <div>
                  <div className="journey-title">
                    IMOW Devops — internal ops platform
                  </div>
                  <div className="journey-sub">
                    Full internal workspace for both companies: tasks, messaging,
                    wiki, calendar, AI assistant
                  </div>
                </div>
                <span className="arrow-icon">↓</span>
              </div>
              <div className="journey-tags">
                <span className="spill">Next.js 16</span>
                <span className="spill">Supabase Realtime</span>
                <span className="spill">Claude AI</span>
                <span className="spill">PWA</span>
              </div>
              <div className="journey-expand">
                <div className="expand-inner">
                  <div className="expand-grid">
                    <div className="expand-img">
                      <img
                        src="/images/imow-dashboard.jpg"
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                        onError={(e) => (e.target.style.display = "none")}
                      />
                    </div>
                    <div className="expand-img">
                      <img
                        src="/images/imow-messaging.jpg"
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                        onError={(e) => (e.target.style.display = "none")}
                      />
                    </div>
                  </div>
                  <p className="expand-story">
                    Running two companies across Slack, Notion, and spreadsheets
                    was chaos. I built IMOW as one unified place — dual-workspace
                    (indigo for Field Alpha, orange for Fix Flow), real-time
                    messaging, deliverable approvals, and a built-in Claude AI
                    assistant. 13 Supabase tables, role-based access, PWA-ready.
                  </p>
                  <div className="impact-row">
                    <div className="impact-box">
                      <div className="impact-num serif">13</div>
                      <div className="impact-label">DB tables</div>
                    </div>
                    <div className="impact-box">
                      <div className="impact-num serif">2</div>
                      <div className="impact-label">Workspaces</div>
                    </div>
                    <div className="impact-box">
                      <div className="impact-num serif">RT</div>
                      <div className="impact-label">Realtime sync</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`journey-item ${activeJourney === "secureco" ? "open" : ""}`}
            onClick={() => toggleJourney("secureco")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && toggleJourney("secureco")}
          >
            <div className="journey-dot">02</div>
            <div>
              <div className="journey-header">
                <div>
                  <div className="journey-title">
                    SecureCO: Nothing to Hide
                  </div>
                  <div className="journey-sub">
                    Branching visual novel exploring data privacy ethics — built
                    under deadline in RenPy
                  </div>
                </div>
                <span className="arrow-icon">↓</span>
              </div>
              <div className="journey-tags">
                <span className="spill">RenPy</span>
                <span className="spill">Python</span>
                <span className="spill">Narrative Design</span>
                <span className="spill">INFO 351</span>
              </div>
              <div className="journey-expand">
                <div className="expand-inner">
                  <div className="expand-grid">
                    <div className="expand-img">
                      <img
                        src="/images/secureco-scene.jpg"
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                        onError={(e) => (e.target.style.display = "none")}
                      />
                    </div>
                    <div className="expand-img">
                      <img
                        src="/images/secureco-branch.jpg"
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                        onError={(e) => (e.target.style.display = "none")}
                      />
                    </div>
                  </div>
                  <p className="expand-story">
                    A visual novel that forces players to make real choices about
                    data sharing, surveillance, and consent — each decision leads
                    to different narrative outcomes. Built to make privacy ethics
                    feel personal, not abstract. Submitted under a tight deadline
                    with bug fixes and narrative expansions.
                  </p>
                  <div className="impact-row">
                    <div className="impact-box">
                      <div className="impact-num serif">Multi</div>
                      <div className="impact-label">Branching endings</div>
                    </div>
                    <div className="impact-box">
                      <div className="impact-num serif">INFO</div>
                      <div className="impact-label">351 project</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`journey-item ${activeJourney === "ml" ? "open" : ""}`}
            onClick={() => toggleJourney("ml")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && toggleJourney("ml")}
          >
            <div className="journey-dot">03</div>
            <div>
              <div className="journey-header">
                <div>
                  <div className="journey-title">Art Auction ML Models</div>
                  <div className="journey-sub">
                    Regression + classification on a Kaggle art auction dataset
                  </div>
                </div>
                <span className="arrow-icon">↓</span>
              </div>
              <div className="journey-tags">
                <span className="spill">Python</span>
                <span className="spill">Scikit-learn</span>
                <span className="spill">Regression</span>
                <span className="spill">Classification</span>
                <span className="spill">INFO 371</span>
              </div>
              <div className="journey-expand">
                <div className="expand-inner">
                  <div className="expand-grid">
                    <div className="expand-img">
                      <img
                        src="/images/ml-model.jpg"
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                        onError={(e) => (e.target.style.display = "none")}
                      />
                    </div>
                    <div className="expand-img">
                      <img
                        src="/images/ml-features.jpg"
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                        onError={(e) => (e.target.style.display = "none")}
                      />
                    </div>
                  </div>
                  <p className="expand-story">
                    Two ML proposals on a Kaggle art auction dataset: a regression
                    model predicting sale price from artist, medium, dimensions,
                    and provenance — and a classification model predicting
                    museum acquisition likelihood. Feature engineering,
                    cross-validation, held-out test evaluation.
                  </p>
                  <div className="impact-row">
                    <div className="impact-box">
                      <div className="impact-num serif">2</div>
                      <div className="impact-label">ML models</div>
                    </div>
                    <div className="impact-box">
                      <div className="impact-num serif">Kaggle</div>
                      <div className="impact-label">Real dataset</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section className="section" style={{ paddingBottom: "6rem" }}>
        <div className="section-label">Education</div>
        <div className="edu-strip">
          <div>
            <div className="serif edu-school">University of Washington</div>
            <div className="edu-deg">
              B.S. Informatics — Information Systems · INFO 490, INFO 371, COM 468
            </div>
          </div>
          <div className="serif edu-year">2026</div>
        </div>
      </section>
    </div>
  );
}
