// Image URLs (you can add more or fetch from API)
const images = [
  "https://source.unsplash.com/random/300x200?sig=1",
  "https://source.unsplash.com/random/300x200?sig=2",
  "https://source.unsplash.com/random/300x200?sig=3",
  "https://source.unsplash.com/random/300x200?sig=4",
  "https://source.unsplash.com/random/300x200?sig=5",
  "https://source.unsplash.com/random/300x200?sig=6"
];

let index = 0;
const gallery = document.getElementById("gallery");
const loadMoreBtn = document.getElementById("loadMore");

// Function to load images
function loadImages(count = 3) {
  for (let i = 0; i < count; i++) {
    if (index >= images.length) {
      loadMoreBtn.style.display = "none";
      break;
    }

    const img = document.createElement("img");
    img.src = images[index];
    img.alt = `Image ${index + 1}`;
    img.addEventListener("click", function () {
      alert(`You clicked on image ${index + 1}`);
    });

    gallery.appendChild(img);
    index++;
  }
}

// Event listener
loadMoreBtn.addEventListener("click", () => {
  loadImages();
});

// Load initial images
window.onload = () => {
  loadImages();
};
