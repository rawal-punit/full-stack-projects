let images = [
    "image1.png",
    "image2.png",
    "image3.png",
]

let index = 0;
let img = document.getElementById("img");
function showImage() {
    img.src = images[index];
}
showImage()
setInterval(() => {
    index = (index + 1) % images.length
    showImage()
}, 1000
)

