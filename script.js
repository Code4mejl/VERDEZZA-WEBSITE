const carouselTrack = document.querySelector('.carousel-track');
let position = 0;
const slideWidth = 310;  // Adjust based on the image width + gap

function scrollCarousel(direction) {
    if (direction === 'next') {
        position -= slideWidth;
        if (Math.abs(position) >= carouselTrack.scrollWidth - carouselTrack.offsetWidth) {
            position = 0;  // Loop back to the start
        }
    } else {
        position += slideWidth;
        if (position > 0) {
            position = -(carouselTrack.scrollWidth - carouselTrack.offsetWidth);
        }
    }
    carouselTrack.style.transform = `translateX(${position}px)`;
}

// Add functionality for buttons if you have the
