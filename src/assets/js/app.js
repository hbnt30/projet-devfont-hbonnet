var fade = {
  opacity: 0.1,
  delay: 200,
  duration: 50000,
  reset: true
};

var right = {
  opacity: 0.1,
  delay: 200,
  duration: 50000,
  distance: "100px",
  origin: "left"
};

ScrollReveal().reveal("section", fade);
ScrollReveal().reveal("h2", right);
ScrollReveal().reveal("h3", right);
