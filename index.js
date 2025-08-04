const outputPrompt = document.getElementById('output-prompt');
const copyBtn = document.getElementById('copy-btn');

copyBtn.addEventListener('click', () => {
  if (!navigator.clipboard) {
    showToast("Kopiowanie nie jest obsługiwane.");
    return;
  }

  navigator.clipboard.writeText(outputPrompt.value)
    .then(() => showToast("Skopiowano do schowka!"))
    .catch(err => showToast("Kopiowanie nie powiodło się."));
});
