import React from "react";
import "./styles.css";

export default function App() {
  return (HelloWorldArticle());
}

function HelloWorldArticle(){
 return (<article>
 <h1>This is an article about article creation.</h1>
 <p>So once there was an author…</p>
</article>);
}