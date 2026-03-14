export default function Resume() {
  return (
    <div className="container">
      <section className="card">
        <div className="cardInner" style={{ padding: 28 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              flexWrap: "wrap",
              marginBottom: "1.5rem",
              paddingBottom: "1.5rem",
              borderBottom: "1px solid var(--line)",
            }}
          >
            <div
              style={{
                width: 96,
                height: 96,
                borderRadius: 12,
                overflow: "hidden",
                flexShrink: 0,
                border: "1px solid var(--line)",
              }}
            >
              <img
                src="/images/ales.png"
                alt="Ales Lucatero"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <h1 className="h2" style={{ marginBottom: 4 }}>Ales Lucatero</h1>
              <p className="p" style={{ marginTop: 0, marginBottom: 8 }}>
                Founder · Builder · UW Informatics 2026
              </p>
              <a
                href="/Ales_Lucatero_Resume.pdf"
                download
                className="btn btnPrimary"
              >
                Download PDF
              </a>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              height: "80vh",
              borderRadius: 14,
              overflow: "hidden",
              border: "1px solid var(--border)",
              background: "rgba(255,255,255,.02)",
            }}
          >
            <iframe
              src="/Ales_Lucatero_Resume.pdf"
              title="Resume PDF"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
