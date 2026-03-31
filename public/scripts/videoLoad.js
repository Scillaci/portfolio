const cards = document.querySelectorAll('.vimeo');

cards.forEach((card) => {
  const iframe = card.querySelector('.vimeo-embed');
  const poster = card.querySelector('.poster');

  if (iframe && poster) {
    iframe.addEventListener('load', () => {
      setTimeout(() => {
        iframe.classList.add('is-loaded');
        poster.classList.add('is-hidden');
      }, 200);
    });
  }
});