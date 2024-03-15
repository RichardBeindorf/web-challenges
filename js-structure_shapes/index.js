import getRandomColor from "./utils/randomColor.js";
import Circle from "./components/Circle/circle.js";
import Square from "./components/Square/Square.js";
import Pentagon from "./components/Pentagon/Pentagon.js";

const root = document.getElementById("root");

const circleSwitch = Circle();
const squareSwitch = Square();
const pentagonSwitch = Pentagon();

root.append(circleSwitch, squareSwitch, pentagonSwitch);
