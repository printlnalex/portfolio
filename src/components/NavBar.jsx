import { Link, NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  "navLink" + (isActive ? " navLinkActive" : "");

export default function NavBar() {
  return (
    <header style={{
      borderBottom: "1px solid rgba(0,0,0,0.08)",
      background: "rgba(250,250,248,0.92)",
      backdropFilter: "blur(12px)",
      position: "sticky",
      top: 0,
      zIndex: 50,
    }}>
      <div style={{
        maxWidth: 780,
        margin: "0 auto",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 56,
      }}>
        <Link to="/" style={{
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: 18,
          color: "#0f0f0f",
          letterSpacing: "-0.3px",
        }}>
          Ales
        </Link>
        <nav style={{ display: "flex", gap: 4 }}>
          <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
          <NavLink to="/resume" className={navLinkClass}>Resume</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
