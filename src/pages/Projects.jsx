import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import styles from "../styles/projects.module.css";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "saas", label: "SaaS" },
  { id: "business", label: "Business" },
  { id: "internal", label: "Internal" },
  { id: "ai", label: "AI" },
  { id: "academic", label: "Academic" },
];

const FEATURED_SLUG = "fieldalpha";
const STORY_SLUGS = ["fix-flow", "imow-devops", "jinx"];
const ACADEMIC_SLUGS = ["secureco", "art-auction-ml"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visible, setVisible] = useState({});
  const refs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.revealId;
            if (id) setVisible((v) => ({ ...v, [id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    Object.keys(refs.current).forEach((id) => {
      const el = refs.current[id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const setRef = (id) => (el) => {
    refs.current[id] = el;
  };

  const featured = projects.find((p) => p.slug === FEATURED_SLUG);
  const storyProjects = projects.filter((p) => STORY_SLUGS.includes(p.slug));
  const academicProjects = projects.filter((p) =>
    ACADEMIC_SLUGS.includes(p.slug)
  );

  const filteredStory =
    activeFilter === "all"
      ? storyProjects
      : storyProjects.filter((p) => p.category === activeFilter);
  const filteredAcademic =
    activeFilter === "all"
      ? academicProjects
      : academicProjects.filter((p) => p.category === activeFilter);
  const showFeatured =
    activeFilter === "all" || (featured && featured.category === activeFilter);
  const showStorySection =
    activeFilter === "all" ||
    ["business", "internal", "ai"].includes(activeFilter);
  const showAcademicSection =
    activeFilter === "all" || activeFilter === "academic";

  return (
    <div className={styles.page}>
      <div
        ref={setRef("header")}
        data-reveal-id="header"
        className={`${styles.reveal} ${visible.header ? styles.revealVisible : ""}`}
      >
        <div className={styles.sectionLabel}>Work</div>
        <h1 className={styles.pageTitle}>Projects</h1>
        <p className={styles.pageIntro}>
          Real products, academic work, and everything in between. Each one
          shaped how I build.
        </p>

        <div className={styles.filterRow}>
          {FILTERS.map((f) => (
            <button
              key={f.id}
              className={`${styles.filterBtn} ${activeFilter === f.id ? styles.filterBtnActive : ""}`}
              onClick={() => setActiveFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {showFeatured && featured && (
        <div
          ref={setRef("hero")}
          data-reveal-id="hero"
          className={`${styles.reveal} ${visible.hero ? styles.revealVisible : ""}`}
        >
          <Link to={`/projects/${featured.slug}`} className={styles.heroCard}>
            <div className={styles.heroImage}>
              <img
                src="/images/fieldalpha-hero.jpg"
                alt="FieldAlpha"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
            <div className={styles.heroContent}>
              <div className={styles.heroTag}>Featured — SaaS</div>
              <h2 className={styles.heroTitle}>{featured.title}</h2>
              <p className={styles.heroDesc}>{featured.oneLiner}</p>
              <div className={styles.heroTools}>
                {featured.tools.map((t) => (
                  <span key={t} className={styles.heroPill}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </div>
      )}

      {showStorySection && filteredStory.length > 0 && (
        <div
          ref={setRef("story")}
          data-reveal-id="story"
          className={`${styles.reveal} ${visible.story ? styles.revealVisible : ""}`}
        >
          <div className={styles.storyGrid}>
            {filteredStory.map((p, i) => (
              <Link
                key={p.slug}
                to={`/projects/${p.slug}`}
                className={`${styles.revealLeft} ${visible[`story-${i}`] ? styles.revealLeftVisible : ""}`}
                ref={setRef(`story-${i}`)}
                data-reveal-id={`story-${i}`}
                style={{ textDecoration: "none" }}
              >
                <div className={styles.storyCard}>
                  <div className={styles.storyCardImage}>
                    <img
                      src={`/images/${p.slug}-thumb.jpg`}
                      alt={p.title}
                      onError={(e) => (e.target.style.display = "none")}
                    />
                  </div>
                  <h3 className={styles.storyCardTitle}>{p.title}</h3>
                  <p className={styles.storyCardDesc}>{p.oneLiner}</p>
                  <div className={styles.storyCardTools}>
                    {p.tools.slice(0, 4).map((t) => (
                      <span key={t} className={styles.storyPill}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {showAcademicSection && filteredAcademic.length > 0 && (
        <div
          ref={setRef("academic")}
          data-reveal-id="academic"
          className={`${styles.reveal} ${visible.academic ? styles.revealVisible : ""}`}
        >
          <div className={styles.academicSection}>
            <div className={styles.academicLabel}>Academic work</div>
            <div className={styles.academicList}>
              {filteredAcademic.map((p) => (
                <Link
                  key={p.slug}
                  to={`/projects/${p.slug}`}
                  className={styles.academicRow}
                >
                  <div>
                    <div className={styles.academicRowTitle}>{p.title}</div>
                    <div className={styles.academicRowDesc}>{p.oneLiner}</div>
                  </div>
                  <span className={styles.academicArrow}>↗</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeFilter !== "all" &&
        !showFeatured &&
        filteredStory.length === 0 &&
        filteredAcademic.length === 0 && (
          <p
            className={styles.pageIntro}
            style={{ marginTop: "2rem", textAlign: "center" }}
          >
            No projects in this category yet.
          </p>
        )}
    </div>
  );
}
