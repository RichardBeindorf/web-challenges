import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  // let code = "?";

  let [code, setCode] = useState("");
  const validCode = "🐡🐠🐋";

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            setCode(code + "🐡");

          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            setCode(code + "🐋");
    
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            setCode(code + "🐠");
           
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={() => {
          setCode("");
          console.log("Reset Code!");
        }}
      >
        Reset
      </button>

      {code === validCode ? (
        <p>You owned it!</p>
      ) : (
        <p>
          <em>hmm…</em>
        </p>
      )}
    </div>
  );
}
