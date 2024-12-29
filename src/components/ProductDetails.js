export default function ProductDetails({ product }) {
    return (
      <div className="product-details">
        <img src={product.image} alt={product.name} />
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <div className="actions">
          <button>Add to Cart</button>
        </div>
      </div>
    );
  }
  