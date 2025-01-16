const images = document.querySelectorAll('.pic img');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal img');
const closeBtn = document.querySelector('.close');

// Open Modal
images.forEach(image => {
  image.addEventListener('click', () => {
    modal.classList.add('show');
    modalImg.src = image.src; // Set modal image to the clicked image's src
  });
});

// Close Modal
closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});

// Close Modal when clicking outside the image
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
});
