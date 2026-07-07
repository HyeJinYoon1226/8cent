import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">8cent</Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/brand">Brand</Link>
        <Link to="/collection">Collection</Link>
        <Link to="/test">Test</Link>
        <Link to="/upcycling">Upcycling</Link>
        <Link to="/find-us">Find Us</Link>
        <Link to="/saved">Saved</Link>
      </nav>
    </header>
  );
}

export default Header;