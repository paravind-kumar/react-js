import CartCard from "../components/CartCard";
import OrderSummary from "../components/OrderSummary";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="container my-5">
      <h2 className="mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <h5 className="alert alert-info text-center">Your cart is empty</h5>
      ) : (
        <div className="row">
          <div className="col-md-8">
            {cart.map((item) => (
              <CartCard key={item.id} item={item} />
            ))}
          </div>

          <div className="col-md-4">
            <OrderSummary cartItems={cart} total={total} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
