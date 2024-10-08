// **Typewirter**
const text = document.querySelector(".sec-text");
const Text = document.querySelector(".text");

const textt = "Hi.";
const speed = 100;

function typeWriter() {
  let charIndex = 0;
  const typewriter = document.getElementById("typewriter");
  typewriter.innerHTML = "";
  const typingInterval = setInterval(() => {
    if (charIndex < textt.length) {
      typewriter.innerHTML += textt.charAt(charIndex);
      charIndex++;
    } else {
      clearInterval(typingInterval);
      setTimeout(typeWriter, 2000);
    }
  }, speed);
}

typeWriter();

// *Navbar*
// Add smooth transition and animations for both navbars

const plusIcon = document.querySelector(".plus-icon");
const navTop = document.querySelector(".navbar-top");
const navRight = document.querySelector(".navbar-right");
const faPlus = document.getElementsByClassName("fa-times");
var isActive = false; // Keep track of the toggle state

// Function to open the navbar with smooth transition
let addStyle = function () {
  navTop.style.transform = "translateX(0px)"; // Slide top navbar from left to right
  navRight.style.transform = "translateY(0px)"; // Slide right navbar from bottom to top
  plusIcon.classList.add("rotate"); // Rotate the plus icon
  navRight.classList.add("show"); // Add the "show" class to display the right navbar
  
  setTimeout(function () {
    plusIcon.classList.remove("rotate");
    plusIcon.classList.add("fa-white"); // Change icon color after transition
  }, 500); // Adjust timing to match transition duration
};

// Function to close the navbar with smooth transition
let closeStyle = function () {
  navTop.style.transform = "translateX(-100vw)"; // Slide top navbar back out of view
  navRight.style.transform = "translateY(100vh)"; 
  plusIcon.classList.add("revrotate"); 
  
  plusIcon.classList.remove("fa-white"); 
  navRight.classList.remove("show"); 
  
  setTimeout(function () {
    plusIcon.classList.remove("revrotate");
  }, 2000); 
};


function reverseRotate() {
  plusIcon.classList.add("rotate");
  setTimeout(function () {
    plusIcon.classList.remove("revrotate");
  }, 2000); 
}


plusIcon.addEventListener("click", function () {
  if (isActive) {
    closeStyle(); 
  } else {
    addStyle(); 
    reverseRotate(); 
  }
  
  isActive = !isActive; state
});


// **Portfolio section**

// **Modal Window Section**
const modalContent = document.querySelectorAll(".modal-content-root");
const CloseBtn = document.querySelectorAll(".modal-close-btn");
const overlay = document.querySelector(".modal-image-overlay");
const OpenBtn = document.querySelectorAll(".ps");
const sunBtn = document.querySelector(".fa-sun");


function showModal() {
  this.style.display = "block";
}

function hideModal() {
  this.style.display = "none";
}

for (var i = 0; i < modalContent.length; i++) {
  (function (index) {
    OpenBtn[index].addEventListener("click", function () {
      modalContent[index].style.display = "block";
    });
    CloseBtn[index].addEventListener("click", function () {
      modalContent[index].style.display = "none";
    });
  })(i);
}

// Hide the content using the escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    for (var i = 0; i < modalContent.length; i++) {
      if (modalContent[i].style.display === "block") {
        modalContent[i].style.display = "none";
      }
    }
  }
});

// **Email Button section**

function openMailClient() {
  window.location.href = "mailto:Sakshitiwari8707@gmail.com";
}

//  **Dark Mode**

const moonBtn = document.querySelector(".btn-theme");
const navBoth = document.querySelector(".navbar-right");
const modeToggle = document.getElementById("mode-toggle");
const body = document.body;
const navbarTop = document.getElementById("navbar-top");
const navbarRight = document.getElementById("navbar-right");
const btnMail = document.querySelector(".btn-mail");
const footerRoot = document.querySelector(".footer-root");
const footerLink = document.querySelector("a.footer-link");
const faTimesRotated = document.querySelector(".fa-times-rotated");
const Body = document.body;

const lightMode = function () {
  body.classList.toggle("theme-light");
  navbarTop.classList.toggle("theme-light");
  navbarRight.classList.toggle("theme-light");
  footerRoot.classList.toggle("theme-light");
  footerLink.classList.toggle("theme-light");
  faTimesRotated.classList.toggle("theme-light");
  btnMail.classList.toggle("theme-light");
};

const themeLight = document.querySelectorAll(".theme-light");
const portfolioElemSeparator = document.querySelectorAll(
  ".portfolio-elem-separator"
);
const secTextBefore = document.querySelector(".text.sec-text::before");
const portfolioElemOverlay = document.querySelectorAll(
  ".portfolio-elem-overlay.theme-light"
);
const navBar = document.querySelector(
  ".navbar-top.theme-light, .navbar-right.theme-light"
);
const changedBtn = document.querySelector(".fa-moon");
const closeModal = document.querySelector(".close-modal");
const caret = document.querySelector(".text");
console.log(caret);

const applyLightTheme = function () {
  document.body.style.background = "var(--color-light-bg)";
  text.style.color = "var(--color-light-font)";
  themeLight.forEach((element) => {
    element.style.color = "var(--color-light-font)";
  });
  btnMail.style.background = "var(--color-dark-transparent)";
  btnMail.style.borderColor = "var(--color-light-accent)";

  // Check if portfolioElemOverlay and portfolioElemSeparator are not empty before iterating
  if (portfolioElemOverlay.length > 0) {
    portfolioElemOverlay.forEach((element) => {
      element.style.background = "rgba(0,0,0,0.4)";
    });
  }

  if (portfolioElemSeparator.length > 0) {
    portfolioElemSeparator.forEach((element) => {
      element.style.background = "var(--color-light-font)";
    });
  }

  // Check if modalContent is not empty before iterating
  if (modalContent.length > 0) {
    modalContent.forEach((element) => {
      element.style.backgroundColor = "var(--color-dark-transparent-low)";
    });
  }

  navBar.style.background = "var(--color-light-accent)";
  navBar.style.color = "var(--color-light-accent)";
  navRight.style.background = "var(--color-light-accent)";

  changedBtn.classList.add("fa-sun");
  changedBtn.classList.remove("fa-moon");
  plusIcon.style.color = "var(--color-light-accent)";

  document.body.style.backgroundColor = "var(--color-light-bg)";
  Text.style.borderRightColor = "var(--color-light-accent)";
};

const applyDarkTheme = function () {
  document.body.style.background = "var(--color-dark-bg)";
  text.style.color = "var(--color-dark-font)";
  themeLight.forEach((element) => {
    element.style.color = "";
  });
  btnMail.style.background = "var(--color-light-transparent)";
  btnMail.style.borderColor = "var(--color-dark-accent)";
  // Check if portfolioElemSeparator is not empty before iterating
  if (portfolioElemSeparator.length > 0) {
    portfolioElemSeparator.forEach((element) => {
      element.style.background = "var(--color-dark-font)";
    });
  }

  // Check if portfolioElemOverlay is not empty before iterating
  if (portfolioElemOverlay.length > 0) {
    portfolioElemOverlay.forEach((element) => {
      element.style.background = "hsla(0,0%,100%,.4)";
    });
  }

  // Check if modalContent is not empty before iterating
  if (modalContent.length > 0) {
    modalContent.forEach((element) => {
      element.style.backgroundColor = "var(--color-light-transparent-low)";
    });
  }

  navBar.style.background = "var(--color-dark-accent)";
  navRight.style.background = "var(--color-dark-accent)";
  navBar.style.color = "var(--color-dark-accent)";

  changedBtn.classList.add("fa-moon");
  changedBtn.classList.remove("fa-sun");
  // faPlus.classList.toggle("fa-times");
  plusIcon.style.color = "var(--color-dark-accent)";

  //for typewriter border

  document.body.style.backgroundColor = "var(--color-dark-bg)";
  Text.style.borderRightColor = "var(--color-dark-accent)";
};

let isThemeActive = false;

moonBtn.addEventListener("click", function () {
  if (isThemeActive) {
    // Applying dark theme property
    applyDarkTheme();
    btnMail.classList.remove("dark-hover");
    isThemeActive = false;
  } else {
    // Applying light theme property
    applyLightTheme();
    btnMail.classList.add("dark-hover");
    isThemeActive = true;
  }
});
