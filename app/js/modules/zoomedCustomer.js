function zoomedCustomer() {
  const images = document.querySelectorAll(".reviews__card-img");

  images.forEach((img) => {
    img.addEventListener("click", (loop) => {
      loop.stopPropagation();

      const isZoomed = img.classList.contains("zoomed");

      images.forEach((i) => i.classList.remove("zoomed"));

      if (!isZoomed) {
        img.classList.add("zoomed");
      }
    });
  });

  document.addEventListener("click", () => {
    images.forEach((img) => img.classList.remove("zoomed"));
  });
}
