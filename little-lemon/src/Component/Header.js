import { Link } from 'react-router-dom';
import food from './Asset/Food.jpg';

function Header() {
  return (
    <header>
      <div className="hero-center">
        <div className="hero-info">
          <h1>little lemon</h1>
          <h2>chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          {/* <button className="hero-btn">
            <a href="#">reserve a table</a>
          </button> */}
          <button>
            <Link to="/booking">Reserve a table</Link>
          </button>
        </div>
        <div className="hero-img">
          <img src={food} alt="lovely food" />
        </div>
      </div>
    </header>
  );
}
export default Header;
