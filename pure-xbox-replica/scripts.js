document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('.search input');
  searchInput.addEventListener('input', () => {
    console.log('Ricerca:', searchInput.value);
  });
});
