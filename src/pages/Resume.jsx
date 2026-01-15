export default function Resume() {
  return (
    <section>
      <h1 style={{ fontSize: 32 }}>Resume</h1>
      <p>
        Add your PDF to <code>public/</code> as <code>resume.pdf</code> and this will work:
      </p>
      <a href="/resume.pdf" target="_blank" rel="noreferrer">
        Open Resume PDF
      </a>
    </section>
  );
}
