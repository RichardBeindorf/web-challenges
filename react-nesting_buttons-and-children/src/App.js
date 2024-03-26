import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>This is a Text</Button>
      <Button >This is a Text</Button>
      <Button >This is a Text</Button>
      <Button >This is a Text</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}