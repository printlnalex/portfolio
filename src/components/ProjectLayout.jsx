export default function ProjectLayout({
  title,
  subtitle,
  tools = [],
  children,
  links = [],
}) {
  return (
    <section className="card">
      <div className="cardInner" style={{ padding: 28 }}>
        <h1 className="h2">{title}</h1>
        <p className="p" style={{ marginTop: 6 }}>{subtitle}</p>

        <div className="pillRow" style={{ marginTop: 10 }}>
          {tools.map(t => <span key={t} className="pill">{t}</span>)}
        </div>

        <hr className="hr" />

        <div style={{ display: "grid", gap: 22 }}>
          {children}
        </div>

        {links.length > 0 && (
          <>
            <hr className="hr" />
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {links.map(l => (
                <a
                  key={l.label}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className={l.primary ? "btn btnPrimary" : "btn"}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
