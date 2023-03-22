import food from './Assets/food.jpg';

function Header() {
  return (
    <header>
      <div className="left-side">
        <h1>little lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button>reserve a table</button>
      </div>
      <div className="right-side">
        <img src={food} alt="lovely food" />
      </div>
    </header>
  );
}
export default Header;
