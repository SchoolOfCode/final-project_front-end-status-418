import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <div className="header-container-left">
        <img className="header-logo" src="" alt="Rootine logo" />
        <h1 className="Rootine-title">Rootine</h1>
      </div>
      <div className="header-container-right">
        <a href="">Blog</a>
        <a href="">About</a>
        <img className="hamburger-menu" src="" alt="hamburger-menu" />
      </div>
    </header>
  );
}
