let images = {
  img1: "https://picsum.photos/id/1015/300/200",
  img2: "https://picsum.photos/id/1016/300/200",
  img3: "https://picsum.photos/id/1018/300/200"
};

let keys = Object.keys(images);
let index = 0;

let img = document.getElementById("img");

function showImage() {
  img.src = images[keys[index]];
}

function nextImage() {
  if (index < keys.length - 1) {
    index++;
  } else {
    index = 0;
  }
  showImage();
}

function prevImage() {
  if (index > 0) {
    index--;
  } else {
    index = keys.length - 1;
  }
  showImage();
}

document.getElementById("next").onclick = nextImage;
document.getElementById("prev").onclick = prevImage;

showImage(); // first image