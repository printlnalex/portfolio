import { Link, NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  "navLink" + (isActive ? " navLinkActive" : "");

export default function NavBar() {
  return (
    <header
      style={{
        borderBottom: "1px solid var(--border)",
        background: "rgba(11,15,20,.55)",
        backdropFilter: "blur(10px)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        className="container"
        style={{
          paddingTop: 14,
          paddingBottom: 14,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 14,
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          Ales<span style={{ color: "var(--accent)" }}>.</span>
        </Link>

        <nav style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>
          <NavLink to="/resume" className={navLinkClass}>
            Resume
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
