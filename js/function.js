const toggleSwitch = document.querySelector('#toggle-switch');
const toggleHandle = document.querySelector('.toggle-handle');

toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    toggleHandle.style.transform = 'translateX(30px)';
  } else {
    toggleHandle.style.transform = 'translateX(0)';
  }
});
