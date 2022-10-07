// Tailwind CSS
tailwind.config = {
  theme: {
    fontFamily: {
      robot: "font-family: 'Roboto', sans-serif;"
    },

    screens: {
      sm: '767px',

      md: '768px',

      lg: '1024px',

      xl: '1280px',

      '2xl': '1536px',
    },
    extend: {
      colors: {
        mybrown: '#ad9970',
      },
    },
  },
};

// Theme Switcher

const themeSwitch = document.querySelector(".theme-switch");
const header = document.querySelector(".header");
const body = document.querySelector(".theme-body");
let isTheme = false;
themeSwitch.addEventListener("click", function (e) {
  e.preventDefault();
  if (!isTheme) {
    isTheme = true;
    this.innerHTML = '  <i class="fa-solid fa-sun"></i>';
    body.classList.add("bg-gray-900");
    body.classList.remove("text-gray-800");
    body.classList.add("text-white");
    header.classList.remove("bg-white");
    header.classList.add("bg-gray-900");

  } else {
    isTheme = false;
    this.innerHTML = '<i class="fa-solid fa-moon"></i>   ';
    body.classList.remove("bg-gray-900");
    body.classList.add("text-gray-800");
    body.classList.remove("text-white");
    header.classList.add("bg-white");
    header.classList.remove("bg-gray-900");
  }
});