console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElement = event.target.elements;
  const firstNameData = formElement.firstName.value;

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  event.target.elements.firstName.focus();
});
