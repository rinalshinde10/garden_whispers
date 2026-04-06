import flowers from "../../data/flowers.json";
import FlowerCard from "../../Components/FlowerCard";
// import "./Home.css";

function Home() {
  return (
    <div className="container">
      <h1>Welcome to Our Flower Shop 🌼</h1>

      <div className="card-container">
        {flowers.map((flower) => (
          <FlowerCard
            key={flower.id}
            name={flower.name}
            price={flower.price}
            color={flower.color}
            image={flower.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;