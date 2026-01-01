fetch("data.json")
  .then(response => response.json())
  .then(images => {
    const gallery = document.getElementById("gallery");

    images.forEach(item => {
      // Create link for full-size download
      const link = document.createElement("a");
      link.href = item.original;
      link.target = "_blank";
      link.download = "";

      // Create image element
      const img = document.createElement("img");
      img.src = item.thumbnail;
      img.alt = "Wedding photo";

      // Fade-in effect (polish)
      img.style.opacity = 0;
      img.onload = () => {
        img.style.opacity = 1;
      };

      link.appendChild(img);
      gallery.appendChild(link);
    });
  })
  .catch(err => {
    console.error("Failed to load gallery data:", err);
  });
