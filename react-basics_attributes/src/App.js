import React from "react";
import "./styles.css";

export default function App() {
  return (HelloWorld());
}

function HelloWorld(){
  return (
  <article>
    <h1>My newes post about learning to be a react engineer.</h1>
    <p className = "article__title">Last week we left of into the universe that is react! Exciting.</p>
    <a href="https://react.dev/learn/your-first-component" className="article__link">Some more in depth content about your first react component.</a>
    <br></br>
    <label htmlFor="input"></label>
    <input id="input"></input>
  </article>
  );
}