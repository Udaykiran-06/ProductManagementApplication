import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <h3>🛒 Product Manager</h3>
      <div className="nav-links">
        <Link to="/">Products</Link>
        <Link to="/add">Add Product</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;