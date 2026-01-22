export default function Resume() {
  return (
    <div className="container">
      <section className="card">
        <div className="cardInner" style={{ padding: 28 }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: 12,
            }}
          >
            <div>
              <h1 className="h2">Resume</h1>
              <p className="p" style={{ marginTop: 6 }}>
                View or download my resume as a PDF.
              </p>
            </div>

            <a
              href="/Ales_Lucatero_Resume.pdf"
              download
              className="btn btnPrimary"
            >
              Download PDF
            </a>
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
