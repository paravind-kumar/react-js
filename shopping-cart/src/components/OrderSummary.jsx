export default function OrderSummary({ cartItems = [], total = 0 }) {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Order Summary</h5>
        <hr />
        <p>Total Items: {cartItems.length}</p>
        <h5>Total Price: ₹ {total}</h5>

        <button className="btn btn-dark w-100 mt-3">
          Checkout
        </button>
      </div>
    </div>
  );
}
