import { useCart } from "../context/CartContext";

export default function CartCard({ item }) {
  const { removeFromCart, updateQty } = useCart();

  return (
    <div className="card mb-3 shadow-sm">
      <div className="row g-0 align-items-center">
        <div className="col-md-2">
          <img
            src={item.image}
            className="img-fluid rounded-start"
            alt={item.name}
            style={{ height: "120px", objectFit: "cover" }}
          />
        </div>

        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text mb-1">₹ {item.price}</p>

            <div className="d-flex align-items-center">
              <button
                onClick={() => updateQty(item.id, item.qty - 1)}
                className="btn btn-outline-secondary btn-sm"
                disabled={item.qty <= 1}
              >
                −
              </button>
              <span className="mx-2">{item.qty}</span>
              <button
                onClick={() => updateQty(item.id, item.qty + 1)}
                className="btn btn-outline-secondary btn-sm"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-2 text-center">
          <button
            className="btn btn-danger rounded-circle btn-sm"
            onClick={() => removeFromCart(item.id)}
            style={{ width: 30, height: 30 }}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
