import "./styles.css";
import { useState } from "react";

export default function App() {

const [isActive, setIsActive] = useState(false);
console.log(isActive);

function toggleLiked(){
  setIsActive(!isActive);
  console.log(isActive);
}

return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={toggleLiked}>{isActive ? "Deactivate" : "Activate"}</button>
    </main>
  );
}