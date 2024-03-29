console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  let pizzaSize1 = parseInt(pizzaInput1.value);
  let pizzaSize2 = parseInt(pizzaInput2.value);
  calculatePizzaGain(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  let pizzaSize1 = parseInt(pizzaInput1.value);
  let pizzaSize2 = parseInt(pizzaInput2.value);
    calculatePizzaGain(pizzaSize1, pizzaSize2);
  
});

// Task 1

function calculatePizzaGain(diameter1, diameter2) {
  const area1 = Math.PI * diameter1;
  const area2 = Math.PI * diameter2;
  const gainOne = (area2 - area1) / area1 * 100;
  return outputSection.textContent = Math.round(gainOne)+"%";
}

// calculatePizzaGain(pizzaSize1, pizzaSize2);

// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here
