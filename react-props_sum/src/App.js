import React from "react";
import "./styles.css";

export default function App() {
  return <div>
    <Sum area1={13} area2={31}/>
  </div>;
}

function Sum({area1, area2}){
  const fullArea = area1 * area2;
  return fullArea;
}