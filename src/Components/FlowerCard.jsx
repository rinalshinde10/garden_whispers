function FlowerCard({ name, price, color, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Color: {color}</p>
      <p>Price: ₹{price}</p>
      <button>Buy Now</button>
    </div>
  );
}

export default FlowerCard;