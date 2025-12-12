document.addEventListener('DOMContentLoaded', () => {
  new Glide('.glide', {
    type: 'carousel',   // 👈 this makes it a carousel
    perView: 1,         // how many slides visible at once
    focusAt: 'center',  // optional: keeps the active slide centered
    autoplay: 3000      // optional: auto-slide every 3s
  }).mount();
});


document.addEventListener('DOMContentLoaded', () => {
  new Glide('.glide_2', {
    type: 'carousel',   // 👈 this makes it a carousel
    perView: 1,         // how many slides visible at once
    focusAt: 'center',  // optional: keeps the active slide centered
    autoplay: 3000      // optional: auto-slide every 3s
  }).mount();
});
