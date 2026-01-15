import { Link, NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  textDecoration: "none",
  padding: "8px 12px",
  borderRadius: 8,
  fontWeight: 600,
  opacity: isActive ? 1 : 0.75,
});

export default function NavBar() {
  return (
    <header style={{ borderBottom: "1px solid #e5e7eb" }}>
      <nav
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <Link to="/" style={{ textDecoration: "none", fontWeight: 800 }}>
          Ales Lucatero
        </Link>

        <div style={{ display: "flex", gap: 8 }}>
          <NavLink to="/projects" style={linkStyle}>
            Projects
          </NavLink>
          <NavLink to="/resume" style={linkStyle}>
            Resume
          </NavLink>
          <NavLink to="/contact" style={linkStyle}>
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
