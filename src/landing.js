const loadContent = () => {
  const desc = document.createElement("div");
  desc.classList.add("desc");
  desc.innerHTML = "The most delicate pastry shop in all of Nebelsbad, with the most delicious signature treat and other item.";

  return desc;
}

export {loadContent};