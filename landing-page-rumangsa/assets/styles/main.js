let counter = 0;

document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar-container");
    if (window.scrollY > 50) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-list li a");
    const currentPath = window.location.pathname; // Mendapatkan path URL saat ini

    navLinks.forEach(link => {
        // Periksa apakah href tautan cocok dengan path URL
        if (link.getAttribute("href") === currentPath.split("/").pop()) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

// JavaScript untuk toggle navbar
const toggler = document.getElementById('navbar-toggler');
const menu = document.getElementById('nav-list');
const icon = document.querySelector("#navbar-toggler i")

toggler.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('active');
    const isActive = menu.classList.contains('active')

    icon.className = isActive
        ? 'fa-solid fa-x' : 'fa-solid fa-bars';
});

// --- Area Animation Menu Page --- //
let menuImg = document.querySelectorAll("#menu")

menuImg.forEach((e) => {
    counter += 0.2

    e.style.opacity = '0';
    e.style.animation = "fade-in 1s ease-in-out 1"
    e.style.animationDelay = `${counter}s`
    e.style.animationFillMode = 'forwards'
})

function choiceBtn(btnName) {
    const btnPhoto = document.getElementById('btnPhoto')
    const btnVideo = document.getElementById('btnVideo')

    const photo = document.getElementById('photo')
    const video = document.getElementById('video')

    if (btnName == "photo") {
        btnPhoto.disabled = true;
        btnVideo.disabled = true;

        video.style.animation = 'fade-out 1s ease 1'
        video.style.animationFillMode = 'forwards'
        setTimeout(() => {
            video.style.display = 'none'

            photo.style.display = 'flex'
            photo.style.animation = ''
            photo.style.animation = 'fade-in 1s ease 1'
        }, 1000)

        setTimeout(() => {
            btnVideo.disabled = false;

        }, 1500)

    }
    else if (btnName == "video") {
        btnVideo.disabled = true;
        btnPhoto.disabled = true;

        photo.style.animation = 'fade-out 1s ease 1'
        setTimeout(() => {
            photo.style.display = 'none'
        }, 1000)

        video.style.display = 'flex'
        setTimeout(() => {
            btnPhoto.disabled = false;

            video.style.animation = 'fade-in 1s ease 1'
            video.style.animationFillMode = 'forwards'
        }, 1500)
    }
    else {
        console.log("No Have Choice!!!")
    }
}