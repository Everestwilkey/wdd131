import { services, filterServices } from './services.js';

document.addEventListener('DOMContentLoaded', () => {
    displayServices(services);

    const filterInput = document.getElementById('filter-input');
    filterInput.addEventListener('input', handleFilterServices);

    setupSlideshow();
});

function displayServices(services) {
    const serviceList = document.querySelector('.service-list');
    serviceList.innerHTML = '';

    services.forEach(service => {
        const serviceItem = document.createElement('div');
        serviceItem.classList.add('service-item');
        serviceItem.innerHTML = `
            <img src="${service.imgSrc}" alt="${service.title}" width="300" height="150">
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        serviceList.appendChild(serviceItem);
    });
}

function handleFilterServices(event) {
    const keyword = event.target.value;
    const filteredServices = filterServices(keyword);
    displayServices(filteredServices);
}

// Slideshow functionality
function setupSlideshow() {
    let slideIndex = 1;
    showSlides(slideIndex);

    document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
    document.querySelector('.next').addEventListener('click', () => plusSlides(1));
    Array.from(document.getElementsByClassName('dot')).forEach((dot, index) => {
        dot.addEventListener('click', () => currentSlide(index + 1));
    });

    // Automatic slideshow
    let autoSlideIndex = 0;
    showSlidesAuto();

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }

    function showSlidesAuto() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        autoSlideIndex++;
        if (autoSlideIndex > slides.length) {autoSlideIndex = 1}
        slides[autoSlideIndex-1].style.display = "block";
        setTimeout(showSlidesAuto, 5000); // Change image every 5 seconds
    }
}
