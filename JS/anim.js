function fadeInWithStagger(elements) {
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
        }, index * 100); // Adjust the delay as needed
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const elementsToFadeIn = document.querySelectorAll('.welcome-text, .about-header, .about, .mtd-header');
    
    // Set initial opacity to 0
    elementsToFadeIn.forEach(element => {
        element.style.opacity = '0';
    });

    fadeInWithStagger(elementsToFadeIn);
});
