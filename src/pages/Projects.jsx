import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import styles from "../styles/projects.module.css";

const IMAGE_MAP = {
  fieldalpha: "fa-hero.jpg",
  "fix-flow-imow": "fixflow-hero.jpg",
  jinx: "jinx-hero.jpg",
};

export default function Projects() {
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

    const timer = setTimeout(() => {
      Object.keys(refs.current).forEach((id) => {
        const el = refs.current[id];
        if (el) observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const setRef = (id) => (el) => {
    refs.current[id] = el;
  };

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
          Three things that define how I build: a live SaaS, the business and
          ops platform behind it, and the AI assistant that keeps it all in
          focus.
        </p>
      </div>

      <div className={styles.cardGrid}>
        {projects.map((p, i) => (
          <div
            key={p.slug}
            ref={setRef(`card-${i}`)}
            data-reveal-id={`card-${i}`}
            className={`${styles.reveal} ${visible[`card-${i}`] ? styles.revealVisible : ""}`}
          >
            <Link to={`/projects/${p.slug}`} className={styles.storyCard}>
              <div className={styles.storyCardImage}>
                <img
                  src={`/images/${IMAGE_MAP[p.slug] || `${p.slug}-hero.jpg`}`}
                  alt={p.title}
                  onError={(e) => (e.target.style.display = "none")}
                />
              </div>
              <div className={styles.storyCardContent}>
                <h2 className={styles.storyCardTitle}>{p.title}</h2>
                <p className={styles.storyCardDesc}>{p.oneLiner}</p>
                <div className={styles.storyCardTools}>
                  {p.tools.slice(0, 5).map((t) => (
                    <span key={t} className={styles.storyPill}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
