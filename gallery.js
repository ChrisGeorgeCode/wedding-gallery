async function loadGallery() {
  const response = await fetch('data.json');
  const items = await response.json();

  const gallery = document.getElementById('gallery');

  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'gallery-item';

    if (item.type === 'image') {
      const img = document.createElement('img');
      img.src = item.thumbnail;
      img.loading = 'lazy';

      img.addEventListener('click', () => {
        window.open(item.original, '_blank');
      });

      div.appendChild(img);
    }

    gallery.appendChild(div);
  });
}

loadGallery();
