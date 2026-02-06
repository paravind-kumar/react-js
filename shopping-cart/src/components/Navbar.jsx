import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; 

function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand fw-bold" to="/">
          🛒 ShopKart
        </Link>
        
        <Link className="btn btn-outline-light ms-auto d-lg-none me-2" to="/cart">
            Cart{" "}
            <span className="badge bg-warning text-dark ms-1">
              {cart.length}
            </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
          </ul>

          <Link className="btn btn-outline-light d-none d-lg-block" to="/cart">
            Cart{" "}
            <span className="badge bg-warning text-dark ms-1">
              {cart.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
