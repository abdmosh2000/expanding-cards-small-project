const imgs = document.querySelectorAll("img");

imgs.forEach((img) => {
  img.addEventListener("click", () => {
    // remove active class from all images
    imgs.forEach((img) => img.classList.remove("active"));
    // add active class in the clicked image
    img.classList.add("active");
  });
});
