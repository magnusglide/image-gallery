var resized_images = [];
var fullGitHubLink = "https://magnusglide.github.io/image-gallery/images/";
for (var i = 1; i <= 20; i++) {
  resized_images[i - 1] =
    "https://magnusglide.github.io/image-gallery/resized_images/" + i + ".jpg";
  // "/resized_images/" + i + ".jpg";
}

async function addImgContainer() {
  for (x in resized_images) {
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
  for (x in resized_images) {
    var img = document.createElement("img");
    img.src = resized_images[x];
    img.alt = x;
    document.getElementsByClassName("image_container")[x].appendChild(img);
  }
}

//Modal

var modal = document.getElementById("modal-id");
var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");

for (let i of document.getElementsByTagName("img")) {
  i.addEventListener("click", function () {
    showImg(i.src);
  });
}

function showImg(imgSrc) {
  modal.style.display = "block";
  var indexOfImg = imgSrc.search("resized_images");
  indexOfImg = indexOfImg + 15;
  var imgSrcSubStr = imgSrc.substring(indexOfImg);
  modalImg.src = fullGitHubLink + imgSrcSubStr;
  // modalImg.src = "/images/" + imgSrcSubStr;

  //   captionText.innerHTML = img.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

document.body.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    modal.style.display = "none";
  }
});
// modal.addEventListener("mousedown", function () {
//   modal.style.display = "none";
// });
modal.addEventListener("mousedown", function (e) {
  if (modalImg.contains(e.target)) {
    // Clicked in box
  } else {
    // Clicked outside the box
    modal.style.display = "none";
  }
});
