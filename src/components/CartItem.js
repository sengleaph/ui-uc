export default function CartItem({ item, onUpdateQuantity, onRemove }) {
    return (
      <div className="cart-item">
        <img src={item.image} alt={item.name} />
        <div className="cart-item-details">
          <h3>{item.name}</h3>
          <p>Price: {item.price}</p>
          <p>Quantity:</p>
          <div className="quantity-control">
            <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
          </div>
        </div>
        <button className="remove-button" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </div>
    );
  }
  