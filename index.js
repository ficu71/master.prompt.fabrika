const openButton = document.getElementById('open-modal');
const modal = document.getElementById('qr-modal');

openButton.addEventListener('click', () => {
  modal.classList.add('flex');
  modal.classList.remove('hidden');
});

modal.addEventListener('click', (e) => {
  if (e.target.id === 'qr-modal') {
    e.target.classList.add('hidden');
    e.target.classList.remove('flex');
  }
});
