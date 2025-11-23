const allCards = document.querySelectorAll(".about-card");

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top < window.innerHeight &&
    rect.bottom > 0
  );
}

window.addEventListener("scroll", () => {
  allCards.forEach(card => {
    if (isInViewport(card)) {
      card.classList.add("about-card-opened");
      console.log("Card in view:", card);
    } else {
      card.classList.remove("about-card-opened");
      console.log("Card not in view:", card);
    }
  });
});