var images_array = ["image/homepage/jiouFen.jpg", "image/homepage/tangWu.jpg", "image/homepage/tangWu2.jpg"];
var changeImage_index = 0;

function changeImage() {
    var hpimg = document.getElementById("homepage_image")

    hpimg.style.opacity = 0.80;
    hpimg.style.transform = "scale(1.2)";

    setTimeout(function() {
        hpimg.src = images_array[changeImage_index];
        changeImage_index = (changeImage_index + 1) % images_array.length;
        hpimg.style.opacity = 1; 
    }, 1000);
    setTimeout(function() {
        hpimg.style.transform = "scale(1)";
    }, 1000);
}   
setInterval(changeImage, 6500); 
