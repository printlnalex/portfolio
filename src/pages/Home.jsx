import { useEffect } from "react";
import styles from "../styles/home.module.css";

export default function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add(styles.on);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document
      .querySelectorAll(
        `.${styles.reveal}, .${styles.revealLeft}, .${styles.revealRight}`
      )
      .forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* NAV */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <a href="#hero" className={styles.navLogo}>Ales</a>
          <div className={styles.navLinks}>
            <a href="#fieldalpha" className={styles.navLink}>FieldAlpha</a>
            <a href="#fixflow" className={styles.navLink}>Fix Flow</a>
            <a href="#jinx" className={styles.navLink}>Jinx</a>
            <a href="#origin" className={styles.navLink}>Story</a>
            <a href="#contact" className={styles.navLink}>Contact</a>
          </div>
          <a href="#contact" className={styles.navCta}>Get in touch</a>
        </div>
      </nav>

      {/* HERO */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroOrbital}>
          <div className={styles.orbitRing}></div>
          <div className={styles.orbitRing2}></div>
          <div className={styles.heroPhoto}>
            <img
              src="/images/ales.png"
              alt="Ales"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentNode.innerHTML = '<div class="' + styles.heroPhotoFallback + '">A</div>';
              }}
            />
          </div>
          <div className={`${styles.orbitNode} ${styles.nodeTop} ${styles.d1}`}>
            <div className={styles.orbitNodeInner}>
              <span className={styles.orbitNodeLabel}>Status</span>
              <span className={styles.orbitNodeVal}>Open to work</span>
            </div>
          </div>
          <div className={`${styles.orbitNode} ${styles.nodeRight} ${styles.d2}`}>
            <div className={styles.orbitNodeInner}>
              <span className={styles.orbitNodeLabel}>Role</span>
              <span className={styles.orbitNodeVal}>Full-stack dev</span>
            </div>
          </div>
          <div className={`${styles.orbitNode} ${styles.nodeBr} ${styles.d3}`}>
            <div className={styles.orbitNodeInner}>
              <span className={styles.orbitNodeLabel}>Companies</span>
              <span className={styles.orbitNodeVal}>2 co-founded</span>
            </div>
          </div>
          <div className={`${styles.orbitNode} ${styles.nodeBl} ${styles.d4}`}>
            <div className={styles.orbitNodeInner}>
              <span className={styles.orbitNodeLabel}>Location</span>
              <span className={styles.orbitNodeVal}>Seattle, WA</span>
            </div>
          </div>
          <div className={`${styles.orbitNode} ${styles.nodeLeft} ${styles.d5}`}>
            <div className={styles.orbitNodeInner}>
              <span className={styles.orbitNodeLabel}>Studying</span>
              <span className={styles.orbitNodeVal}>UW Info '26</span>
            </div>
          </div>
        </div>

        <div className={styles.heroText}>
          <div className={styles.statusBadge}>
            <span className={styles.pulseDot}></span>
            Available for opportunities
          </div>
          <p className={styles.heroEyebrow}>Co-founder · Builder · Developer</p>
          <h1 className={styles.heroName}>
            I build things<br />that <em>run</em> businesses.
          </h1>
          <p className={styles.heroBio}>
            Not just code — real products used by real people, solving real problems
            I found by doing the work myself. From door-to-door sales at 18 to
            running two companies and building the software that powers them.
          </p>
          <div className={styles.heroCta}>
            <a href="#fieldalpha" className={`${styles.btn} ${styles.btnPrimary}`}>Read the story ↓</a>
            <a href="https://fieldalpha.dev" className={styles.btn} target="_blank" rel="noreferrer">FieldAlpha ↗</a>
            <a href="https://github.com/printlnalex" className={styles.btn} target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>

        <div className={styles.heroScrollHint}>
          <div className={styles.scrollLine}></div>
          scroll
        </div>
      </section>

      {/* MARQUEE */}
      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeTrack}>
          {["Next.js","Supabase","TypeScript","Gemini AI","Twilio","Claude API","React","Python","PostgreSQL","Tailwind","D2D Sales","B2B","Music Production",
            "Next.js","Supabase","TypeScript","Gemini AI","Twilio","Claude API","React","Python","PostgreSQL","Tailwind","D2D Sales","B2B","Music Production"].map((item, i) => (
            <span key={i} className={styles.mi}>{item}<span className={styles.ms}> · </span></span>
          ))}
        </div>
      </div>

      {/* CH1: FIELDALPHA */}
      <section className={`${styles.chapter} ${styles.chapterDark}`} id="fieldalpha">
        <div className={styles.chapterInner}>
          <div className={`${styles.chapterLabel} ${styles.reveal}`}>Chapter 01 — The SaaS</div>
          <div className={styles.storyGrid}>
            <div className={styles.revealLeft}>
              <div className={styles.storyEyebrow}>
                <span className={`${styles.eyDot} ${styles.dotFa}`}></span>
                Co-founded · 2023–present · Live
              </div>
              <h2 className={styles.storyTitle}>
                FieldAlpha —<br /><em>born from chaos</em>
              </h2>
              <div className={styles.storyBody}>
                <p>Running an appliance repair business means scheduling chaos, missed jobs, and technicians calling at 7am with no idea where to go. No software actually solved this for small operators.</p>
                <p>So I co-founded FieldAlpha and built it from scratch. AI-powered job intake using Gemini, real-time dispatch, invoicing, customer management, SMS via Twilio — every feature was earned by experiencing the problem first.</p>
                <p>Multi-tenant architecture, row-level security, live technicians using it in production today.</p>
              </div>
              <div className={styles.tags}>
                {["Next.js","Supabase","TypeScript","Gemini AI","Twilio","SendGrid","RLS","Vercel"].map(t => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
              <div className={styles.storyLinks}>
                <a href="https://fieldalpha.dev" className={`${styles.btn} ${styles.btnPrimary}`} target="_blank" rel="noreferrer">Visit fieldalpha.dev ↗</a>
                <a href="#" className={`${styles.btn} ${styles.btnGhost}`}>Case study →</a>
              </div>
            </div>
            <div className={styles.revealRight}>
              <a
                href="https://fieldalpha.dev"
                target="_blank"
                rel="noreferrer"
                className={styles.siteLink}
              >
                <div className={styles.siteLinkInner}>
                  <span className={styles.siteLinkDomain}>fieldalpha.dev</span>
                  <span className={styles.siteLinkHint}>AI-powered field service management</span>
                  <span className={styles.siteLinkArrow}>Visit site ↗</span>
                </div>
              </a>
            </div>
          </div>
          <div className={`${styles.impact} ${styles.impactDark} ${styles.reveal}`}>
            {[["AI","Gemini job intake"],["RT","Real-time dispatch"],["Multi","Tenant architecture"]].map(([n,l]) => (
              <div key={n} className={`${styles.impactBox} ${styles.impactBoxDark}`}>
                <div className={styles.iNum}>{n}</div>
                <div className={styles.iLabel}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CH2: FIX FLOW */}
      <section className={`${styles.chapter} ${styles.chapterWarm}`} id="fixflow">
        <div className={styles.chapterInner}>
          <div className={`${styles.chapterLabel} ${styles.reveal}`}>Chapter 02 — The Business</div>
          <div className={`${styles.storyGrid} ${styles.storyGridFlip}`}>
            <div className={styles.revealRight}>
              <div className={styles.storyEyebrow}>
                <span className={`${styles.eyDot} ${styles.dotFf}`}></span>
                Co-founded · Co-run · Field operations
              </div>
              <h2 className={styles.storyTitle}>
                Fix Flow —<br /><em>where it started</em>
              </h2>
              <div className={styles.storyBody}>
                <p>Before a single line of FieldAlpha existed, I was answering calls, dispatching Peter, Maxim, and Ruvim, and figuring out how to actually run an appliance repair company day to day.</p>
                <p>Fix Flow isn't just a business — it's the reason everything I build is grounded. No hypothetical workflows. Real technicians, real scheduling pressure, real customers who need their fridge fixed today.</p>
                <p>Co-founding and co-running it taught me more about product than any course ever could.</p>
              </div>
              <div className={styles.tags}>
                {["Operations","Field service","Team management","Co-founded"].map(t => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
            <div className={styles.revealLeft}>
              <a
                href="https://www.fixflowappliance.com/"
                target="_blank"
                rel="noreferrer"
                className={`${styles.siteLink} ${styles.siteLinkWarm}`}
              >
                <div className={styles.siteLinkInner}>
                  <span className={styles.siteLinkDomain}>fixflowappliance.com</span>
                  <span className={styles.siteLinkHint}>Professional appliance repair · Texas & Washington</span>
                  <span className={styles.siteLinkArrow}>Visit site ↗</span>
                </div>
              </a>
            </div>
          </div>

          {/* IMOW bridge */}
          <div className={styles.bridge}>
            <div className={`${styles.chapterLabel} ${styles.reveal}`}>The solution I had to build</div>
            <div className={styles.storyGrid}>
              <div className={styles.revealLeft}>
                <div className={styles.storyEyebrow}>
                  <span className={`${styles.eyDot} ${styles.dotImow}`}></span>
                  Built solo · IMOW Devops
                </div>
                <h2 className={`${styles.storyTitle} ${styles.storyTitleSm}`}>
                  Two companies,<br />one <em>platform</em>
                </h2>
                <div className={styles.storyBody}>
                  <p>Juggling two companies across Slack, Notion, and spreadsheets was burning time and context. I built IMOW Devops as my own solution — entirely designed and developed by me.</p>
                  <p>Dual-workspace (indigo for FieldAlpha, orange for Fix Flow). Discord-style messaging, task boards, wiki, calendar, deliverable approvals with sign-off workflows, and a built-in Claude AI assistant. Fully real-time.</p>
                </div>
                <div className={styles.tags}>
                  {["Next.js 16","Supabase Realtime","Claude AI","Tailwind","PWA"].map(t => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
              <div className={styles.revealRight}>
                <a
                  href="https://imow.dev/"
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.siteLink} ${styles.siteLinkImow}`}
                >
                  <div className={styles.siteLinkInner}>
                    <span className={styles.siteLinkDomain}>imow.dev</span>
                    <span className={styles.siteLinkHint}>Your company. Organized.</span>
                    <span className={styles.siteLinkMeta}>13 tables · Realtime</span>
                    <span className={styles.siteLinkArrow}>Visit site ↗</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CH3: JINX */}
      <section className={`${styles.chapter} ${styles.chapterTeal}`} id="jinx">
        <div className={styles.chapterInner}>
          <div className={`${styles.chapterLabel} ${styles.reveal}`}>Chapter 03 — The Assistant</div>
          <div className={styles.storyGridSingle}>
            <div className={styles.revealLeft}>
              <div className={styles.storyEyebrow}>
                <span className={`${styles.eyDot} ${styles.dotJinx}`}></span>
                Co-built · Personal AI
              </div>
              <h2 className={styles.storyTitle}>
                Jinx — an AI that<br /><em>knows you</em>
              </h2>
              <div className={styles.storyBody}>
                <p>What if your AI assistant actually knew your context — your companies, your priorities, your communication style — instead of starting cold every time?</p>
                <p>Jinx is a personal assistant layer co-built to plug into the real work I do every day. Part of a longer exploration into what ambient, context-aware AI tooling looks like for small business operators who can't afford an ops team.</p>
              </div>
              <div className={styles.tags}>
                {["Claude API","AI","Context-aware","Co-built"].map(t => (
                  <span key={t} className={`${styles.tag} ${styles.tagTeal}`}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CH4: ORIGIN */}
      <section className={`${styles.chapter} ${styles.chapterBg2}`} id="origin">
        <div className={styles.chapterInner}>
          <div className={`${styles.chapterLabel} ${styles.reveal}`}>Chapter 04 — The Origin</div>
          <div className={styles.storyGrid}>
            <div className={styles.revealLeft}>
              <h2 className={styles.storyTitle}>
                Before code,<br />there was <em>the door.</em>
              </h2>
              <div className={styles.storyBody}>
                <p>At 18, I was in Connecticut knocking on doors — summer D2D sales. You learn to handle rejection before 9am, read people in seconds, and make someone believe something is worth paying for while standing on their porch.</p>
                <p>Then B2B — selling tires and wheels to businesses. Longer cycles, relationship-based, higher stakes. The pattern was always the same: find the real pain, earn the trust, deliver.</p>
                <p>That thread runs through everything I build. I don't just ship features — I understand why they need to exist, and who has to pay for them.</p>
              </div>
              <div className={styles.musicStrip}>
                <div className={styles.musicStripLabel}>Also</div>
                <div className={styles.musicStripText}>I produce music. There's something about arranging sounds that feels like the same impulse as designing systems — find the structure, let things breathe, make something that hits. It keeps me honest about what creativity actually is.</div>
              </div>
            </div>
            <div className={styles.revealRight}>
              <div className={styles.tl}>
                <div className={styles.tlLine}></div>
                {[
                  ["Age 18–19 · Connecticut","Door-to-door sales.","Summer programs, hundreds of doors a week. Built the foundation for reading people, handling objections, and closing without a slide deck."],
                  ["B2B · Tires & Wheels","Business-to-business selling.","Commercial accounts, relationship-driven, long cycles. Learned how businesses actually decide what to buy — and why they don't."],
                  ["Co-founding","Fix Flow Appliance.","Applied the customer empathy, operations instinct, and sales drive to build and run a real business from scratch with a partner."],
                  ["Now · UW Informatics","Building FieldAlpha.","The sales background means I build for buyers. Every feature has a real conversation behind it — someone's actual problem, not an assumption."],
                ].map(([year, bold, text], i) => (
                  <div key={i} className={`${styles.tlItem} ${styles["d"+(i+1)]}`}>
                    <div className={styles.tlDot}></div>
                    <div className={styles.tlYear}>{year}</div>
                    <div className={styles.tlText}><strong>{bold}</strong> {text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className={styles.contactWrap} id="contact">
        <div className={styles.contactInner}>
          <div className={`${styles.chapterLabelDark} ${styles.reveal}`}>Let's talk</div>
          <h2 className={`${styles.contactTitle} ${styles.reveal}`}>
            Build something<br /><em>together.</em>
          </h2>
          <p className={`${styles.contactSub} ${styles.reveal}`}>
            Investor, co-founder, employer, or someone who just wants to talk about building things — I'm always up for a real conversation.
          </p>
          <div className={`${styles.cLinks} ${styles.reveal}`}>
            <a href="mailto:ales@fieldalpha.dev" className={`${styles.cBtn} ${styles.cBtnPrimary}`}>ales@fieldalpha.dev</a>
            <a href="https://linkedin.com/in/alexis-lucatero" className={styles.cBtn} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/printlnalex" className={styles.cBtn} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://fieldalpha.dev" className={styles.cBtn} target="_blank" rel="noreferrer">FieldAlpha ↗</a>
          </div>
        </div>
      </section>
    </>
  );
}
