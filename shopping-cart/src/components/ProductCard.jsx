import { useCart } from "../context/CartContext"


export default function ProductCard({ product }) {
    const { addToCart } = useCart()

  return (
    <div className="card h-100 shadow-sm">
        <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
        />

        <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text fw-bold">₹ {product.price}</p>

        <button 
        onClick={() => addToCart(product)}
        className="btn btn-dark mt-auto">
            Add to Cart
        </button>
        </div>
    </div>
  )
}
