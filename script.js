AOS.init({
  duration: 1500,
});

const hamburgerIcon = document.getElementById("hamburger-icon");
const close = document.getElementById("close");
const navItemsResponsive = document.getElementById("nav-items-responsive");
const navResponsiveItem = document.querySelectorAll("#nav-responsive-item");
const footerYear = document.getElementById("footer-year");

const sectionAbout = document.getElementsByClassName("section-about");
const sectionIntroduction = document.getElementsByClassName("section-introduction");
const sectionExperience = document.getElementsByClassName("section-experience");

const sectionSkills = document.getElementsByClassName("section-skills");

const sectionProjects = document.getElementsByClassName("section-projects");

const footer = document.getElementsByClassName("footer");


hamburgerIcon.addEventListener("click", showMenu);
close.addEventListener("click", closeMenu);

function getYear() {
  let date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
  });
  footerYear.textContent = date;
}
getYear();
function showMenu() {
  if (navItemsResponsive.style.display === "none") {
    navItemsResponsive.style.display = "block";
    close.style.display = "block";

    sectionAbout[0].style.display = "none";
    sectionIntroduction[0].style.display = "none";
    sectionExperience[0].style.display = "none";
    sectionSkills[0].style.display = "none";
    sectionProjects[0].style.display = "none";
    footer[0].style.display = "none";
  } else {
    navItemsResponsive.style.display = "none";
    close.style.display = "none";
  }
}
function closeMenu() {
  if (navItemsResponsive.style.display === "block") {
    navItemsResponsive.style.display = "none";
    close.style.display = "none";

    sectionAbout[0].style.display = "block";
    sectionIntroduction[0].style.display = "block";
    sectionExperience[0].style.display = "block";
    sectionSkills[0].style.display = "block";
    sectionProjects[0].style.display = "block";
    footer[0].style.display = "block";
  }
}

for (let index = 0; index < navResponsiveItem.length; index++) {
  navResponsiveItem[index].addEventListener("click", removeNavBarByScreenSize);
}

// function to remove the responsive nav items when they are clicked on in mobile view
function removeNavBarByScreenSize() {
  if (screen.width <= 500) {
    navItemsResponsive.style.display = "none";
    close.style.display = "none";

    sectionAbout[0].style.display = "block";
    sectionIntroduction[0].style.display = "block";
    sectionExperience[0].style.display = "block";
    sectionSkills[0].style.display = "block";
    sectionProjects[0].style.display = "block";
    footer[0].style.display = "block";
  }
}
