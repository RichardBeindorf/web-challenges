console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.


  //creating all the new tags/elements in an empty room in js
  const newPost = document.createElement("article");
  const newParagraph = document.createElement("p");
  const newFooter = document.createElement("footer");
  const newUsername = document.createElement("span");
  const newLikeButton = document.createElement("button");

  //adding all the classes and stuff
  newPost.classList.add("post");
  newParagraph.classList.add("post__content");
  newFooter.classList.add("post__footer");
  newUsername.classList.add("post__username");
  newLikeButton.classList.add("post__button");
  newLikeButton.setAttribute("data-js", "like-button");
  //Eventually still have to add the type attribute

  //adding content to respective tags
  newParagraph.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
  newUsername.textContent = "@new User";
  newLikeButton.textContent = "♥ Like";

  newLikeButton.addEventListener("click", handleLikeButtonClick);

  //implementing al the elements
  document.body.append(newPost);
  newPost.append(newParagraph);
  newPost.append(newFooter);
  newPost.append(newUsername);
  newPost.append(newLikeButton);

