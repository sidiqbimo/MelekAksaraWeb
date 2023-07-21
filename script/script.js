document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".sliderWithJS img");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((image, i) => {
            image.classList.toggle("active", i === index);
        });
    }

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    showImage(currentIndex);
    setInterval(changeImage, 3000);
});
