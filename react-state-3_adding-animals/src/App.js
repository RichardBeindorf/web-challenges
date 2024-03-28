import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";
import { uid } from "uid";

const initialAnimals = [
  {
    id: "mTBErig",
    name: "Octopus",
    emoji: "🐙",
  },
  {
    id: "iMsbXQ1",
    name: "Crocodile",
    emoji: "🐊",
  },
  {
    id: "Qjf_K7V",
    name: "Beaver",
    emoji: "🦫",
  },
];



export default function App() {
  const [animals, setAnimals] = useState(initialAnimals);
  // Hier wird setAnimals nicht genutzt, state baut nur initalAnimals ein. Ich will, dass die neuen animals von der Form an die Liste weitergegeben werden, hierfür ist der State dann das Bindeglied

  function handleAddAnimal(newAnimal) {
    console.log(newAnimal);
    setAnimals([...animals, { ...newAnimal, id: uid()}]);
    //  Nur ein console.log für adding von neuen Tieren, die Funktion bekommt allerdings, das neue Objekt von der "Form" Funktion. Ich möchte hier ein neues Objekt aus dem Input und dem alten Array zusammensetzen. Ich vermute, das ich das neue in das alte Array "spreaden" kann.
  }


  return (
    // App Funktion setzt Form und Listen Funktion um und baut diese in eine main Sektion
    <main className="app">
      <Form onAddAnimal={handleAddAnimal} />
      <List animals={animals} />
    </main>
    
  );
}
