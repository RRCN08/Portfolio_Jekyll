let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#checkBox');

const enableDarkMode = () => {
  document.body.classList.add("dark-theme");
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  document.body.classList.remove("dark-theme");
  localStorage.setItem('darkMode', null);
};

if (darkMode == 'enabled') {
  enableDarkMode();
  $('#checkBox').prop( "checked", true);
  $('#fas-id').toggleClass("rotate", false);
}

darkModeToggle.addEventListener('change', () => {

  darkMode = localStorage.getItem('darkMode');

  if(darkMode !== 'enabled') {
    enableDarkMode();
    $('#fas-id').toggleClass("rotate", false);
  } else {
    disableDarkMode();
    $('#fas-id').toggleClass("rotate", true);
  }

});
