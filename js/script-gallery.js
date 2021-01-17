var images = [];
for (var i = 1; i <= 20; i++) {
  images[i - 1] = "https://magnusglide.github.io/image-gallery/images/" + i + ".jpg";
}

async function addImgContainer() {
  for (x in images) {
    var div = document.createElement("div");
    document.getElementsByClassName("main")[0].appendChild(div);
    div.className = "image_container";
  }
}
addImgContainer().then(addImg());

// addImgContainer().then((z) => {
//   addImg();
// });

function addImg() {
  for (x in images) {
    var img = document.createElement("img");
    img.src = images[x];
    document.getElementsByClassName("image_container")[x].appendChild(img);
    console.log(images[x]);
  }
}
