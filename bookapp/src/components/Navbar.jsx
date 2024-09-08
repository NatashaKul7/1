import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <h2>Books App</h2>
      </Link>
      <Link to="/favorites">
        <h2>Your Favorites</h2>
      </Link>
    </div>
  );
};

export default Navbar;
