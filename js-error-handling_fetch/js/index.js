console.clear();

const userElement = document.querySelector(".user");


async function getUser(url) {
  
  const response = await fetch(url)
  if (!response.ok) {
    console.log('Network error');
    return null;
  }
  try{
  const json = await response.json();
  return json.data;}
  catch (error){
  }
}

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    const user = await getUser(event.target.dataset.url);
    if (!user){
    const errorMessage = document.querySelector(".error");
    errorMessage.textContent = "Sorry, this is a dead end…";
    return;
    } else if(user){
      const errorMessage = document.querySelector(".error")
      errorMessage.textContent = "";}
    userElement.innerHTML = `
    <h2>${user.first_name} ${user.last_name}</h2>
    <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
    `;
  })
);