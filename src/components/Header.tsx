import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">8cent</Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/test">Scent Test</Link>
        <Link to="/saved">Archive</Link>
      </nav>
    </header>
  );
}

export default Header;