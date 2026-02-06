import ProductCard from "../components/ProductCard";

function Products() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1999,
      image:
        "https://img.freepik.com/free-photo/black-headphones-digital-device_53876-97302.jpg?ga=GA1.1.486164251.1762189853&semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 2999,
      image:
        "https://img.freepik.com/free-vector/realistic-style-fitness-trackers_23-2148509776.jpg?ga=GA1.1.486164251.1762189853&semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: 999,
      image:
        "https://img.freepik.com/premium-photo/black-red-computer-mouse-with-glowing-light_1103290-18116.jpg?ga=GA1.1.486164251.1762189853&semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: 1499,
      image:
        "https://img.freepik.com/free-photo/wireless-white-smart-speaker-digital-device_53876-96821.jpg?ga=GA1.1.486164251.1762189853&semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 5,
      name: "Laptop Backpack",
      price: 1299,
      image:
        "https://img.freepik.com/premium-psd/black-bag-with-laptop-inside-isolated-background_934629-1618.jpg?ga=GA1.1.486164251.1762189853&semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 6,
      name: "Mechanical Keyboard",
      price: 3499,
      image:
        "https://img.freepik.com/premium-photo/elegant-gaming-keyboard-neutral-background_1106493-217202.jpg?ga=GA1.1.486164251.1762189853&semt=ais_hybrid&w=740&q=80",
    },
  ];

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-center">🛍 Our Products</h2>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
