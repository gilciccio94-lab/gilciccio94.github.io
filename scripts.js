document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');

  // Simula una ricerca
  searchInput.addEventListener('input', () => {
    console.log('Hai cercato:', searchInput.value);
  });

  // Animazione card al hover (opzionale)
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
});
