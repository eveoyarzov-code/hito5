import { Link } from "react-router-dom";

const Navbar = () => {
  const total = 25000; // Valor del carrito de compras

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 justify-content-between">
      <div className="d-flex align-items-center">
        {/* Enlace de la marca al Home */}
        <Link to="/" className="navbar-brand text-white fw-bold me-4">
          🍕 Pizzería Mamma Mía!
        </Link>

        {/* Lista completa de botones de navegación (Todos visibles) */}
        <div className="d-flex gap-2">
          <Link to="/" className="btn btn-outline-light btn-sm">
            🏠 Home
          </Link>
          
          <Link to="/login" className="btn btn-outline-light btn-sm">
            🔐 Login
          </Link>
          
          <Link to="/register" className="btn btn-outline-light btn-sm">
            🔐 Register
          </Link>
          
          <Link to="/profile" className="btn btn-outline-light btn-sm">
            👤 Profile
          </Link>
          
          <button className="btn btn-outline-danger btn-sm">
            🚪 Logout
          </button>
        </div>
      </div>

      {/* Botón de acceso directo al Carrito */}
      <Link to="/cart" className="btn btn-outline-info btn-sm text-info fw-semibold">
        🛒 Total: ${total.toLocaleString()}
      </Link>
    </nav>
  );
};

export default Navbar;
