import Logo from './Logo.svg';

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="logo">
          <img src={Logo} alt="little lemon logo" />
        </div>
        <div className="navbar-links">
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#features">About</a>
            </li>
            <li>
              <a href="#testimonials">Menu</a>
            </li>
            <li>
              <a href="#pricing">Reservation</a>
            </li>
            <li>
              <a href="#footer">Order online</a>
            </li>
            <li>
              <a href="#login">Log in</a>
            </li>
            <li>
              <a href="#signup" className="cta-btn">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
