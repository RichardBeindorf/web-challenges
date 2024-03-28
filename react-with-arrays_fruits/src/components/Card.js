import "./Card.css";

export default function Card({ name, key }) {
  return <p className="card" key={key}>{name}</p>;
}
