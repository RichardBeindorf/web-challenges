console.clear();

const cards = [
  {
    id: "1",
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

// Write code as such as the named variables demand it. Use the filter method.

const onlyCardWithIdTwo = cards.filter((card) => {
    return (card.id === "2");
});

console.log(onlyCardWithIdTwo);


const allCardsWith3Tags = cards.filter((card) => {
  return (card.tags.length === 3);
});
console.log(allCardsWith3Tags);

const allCardsThatAreNotBookmarked = cards.filter((card) => {
  return (card.isBookmarked === false);
});
console.log(allCardsThatAreNotBookmarked);

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter((card) => {
  const hasHTMLorJS = ((card.tags === "js") || (card.tags === "html"));
  const isBookmarkedForReal = (card.isBookmarked === true);
  return (hasHTMLorJS && isBookmarkedForReal);
});
console.log(allCardsWithTagsHTMLOrJSThatAreBookmarked);

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
