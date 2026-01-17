export default function ProjectLayout({
  title,
  subtitle,
  tools = [],
  meta = [],
  links = [],
  children,
}) {
  return (
    <section className="card">
      <div className="cardInner" style={{ padding: 28 }}>
        <div style={{ display: "flex", gap: 12, justifyContent: "space-between", flexWrap: "wrap" }}>
          <div>
            <h1 className="h2" style={{ marginBottom: 6 }}>{title}</h1>
            <p className="p" style={{ marginTop: 0 }}>{subtitle}</p>
          </div>
          {meta.length > 0 && (
            <div style={{ display: "grid", gap: 6, minWidth: 240 }}>
              {meta.map((m) => (
                <div key={m.label} className="pill" style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <span style={{ color: "var(--muted)" }}>{m.label}</span>
                  <span style={{ color: "var(--text)" }}>{m.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="pillRow" style={{ marginTop: 10 }}>
          {tools.map((t) => (
            <span key={t} className="pill">{t}</span>
          ))}
        </div>

        <hr className="hr" />

        <div style={{ display: "grid", gap: 22 }}>
          {children}
        </div>

        {links.filter(l => !!l.url).length > 0 && (
          <>
            <hr className="hr" />
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {links
                .filter((l) => !!l.url)
                .map((l) => (
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
