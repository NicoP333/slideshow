var slideshow = document.getElementById("slideshow");
var images = slideshow.getElementsByTagName("img");
var currentImage = 0;

function showImage() {
for (var i = 0; i < images.length; i++) {
images[i].style.display = "none";
}
images[currentImage].style.display = "block";
}

function nextImage() {
currentImage = (currentImage + 1) % images.length;
showImage();
}

// Показываем первую фотографию при загрузке страницы
showImage();

// Запускаем слайдшоу с интервалом в 2 секунды (2000 миллисекунд)
setInterval(nextImage, 2000);