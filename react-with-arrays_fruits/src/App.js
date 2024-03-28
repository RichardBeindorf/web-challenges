import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      name: "🍌 banana",
      id: 1,
      color: "yellow",
    },
    {
      name: "🍎 Apple",
      id: 2,
      color: "red",
    },
    {
      name: "🍐 Pear",
      id: 3,
      color: "purple",
    },
    {
      name: "🥑Avocado",
      id: 4,
      color: "magenta"
    },
    {
      name: "🥝 Kiwi",
      id: 5,
      color: "blue"
    },
  ];

  return (
    <div className="app">
    {fruits.map((fruits) => (

      <Card key={fruits.id} name={fruits.name} />

      ))}
    </div>
  );
}
