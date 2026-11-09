import { useState } from "react";

import { pizzaCart as initialCart } from "../components/pizzas"; 

const Cart = () => {
  
  const [cart, setCart] = useState(initialCart || []);

  const totalCart = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className="container my-5" style={{ minHeight: "60vh" }}>
      <h2 className="mb-4 text-center fw-bold">🛒 Tu Carrito de Compras</h2>
      
      {cart.length === 0 ? (
        <p className="text-center text-muted fs-5">Tu carrito está actualmente vacío.</p>
      ) : (
        <div className="mx-auto" style={{ maxWidth: "600px" }}>
          {cart.map((item) => (
            <div key={item.id} className="d-flex align-items-center justify-content-between p-3 mb-3 border rounded shadow-sm bg-white">
              <div className="d-flex align-items-center gap-3">
                <img src={item.img} alt={item.name} style={{ width: "60px", height: "60px", objectFit: "cover" }} className="rounded" />
                <h5 className="text-capitalize mb-0 fw-semibold">{item.name}</h5>
              </div>
              <div className="d-flex align-items-center gap-3">
                <span className="fw-bold">${(item.price * item.count).toLocaleString()}</span>
                <span className="badge bg-dark px-3 py-2">Cantidad: {item.count}</span>
              </div>
            </div>
          ))}
          <hr />
          <div className="d-flex justify-content-between align-items-center mt-4">
            <h3 className="fw-bold">Total: ${totalCart.toLocaleString()}</h3>
            <button className="btn btn-dark px-4 py-2">Pagar 💳</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
