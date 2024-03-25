import "./styles.css";

export default function App() {
  return (
  <div>
  <Greeting name="Harry"/>
  <Greeting name="Harry" coach="Feline"/>
  </div>
  );
}

function Greeting({ name, coach}) {
  return (
    <div>
      {coach === "Feline" ? ({"Hello Feline!" : `Hello ${name}!`}
    </div>
  );
}