import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        KAYBROS
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Link to="/contact" className="nav-cta">
        Start a Project
        <ArrowUpRight size={18} />
      </Link>
    </header>
  );
}

export default Navbar;