var resized_images = [];
var fullGitHubLink = "https://magnusglide.github.io/image-gallery/images/";

//the max number of variable i is 20 = the amount of images in the images folder
//all the images in the folders have their names from 1 to max number (20)
for (var i = 1; i <= 20; i++) {
  resized_images[i - 1] =
    "https://magnusglide.github.io/image-gallery/resized_images/" + i + ".jpg";
  // "/resized_images/" + i + ".jpg";   //uncomment this if using localhost
}

async function addImgContainer() {
  for (x in resized_images) {
    var div = document.createElement("div");
    document.getElementsByClassName("main")[0].appendChild(div);
    div.className = "image_container";
  }
}
addImgContainer().then(addImg());

function addImg() {
  for (x in resized_images) {
    var img = document.createElement("img");
    img.src = resized_images[x];
    img.alt = x;
    document.getElementsByClassName("image_container")[x].appendChild(img);
  }
}

//Modal (when you click on an image)

var modal = document.getElementById("modal-id");
var modalImg = document.getElementById("img01");

for (let i of document.getElementsByTagName("img")) {
  if (i.id != "img01") {
    i.addEventListener("click", function () {
      showImg(i.src);
    });
  }
}

function showImg(imgSrc) {
  modal.style.display = "block";
  var indexOfImg = imgSrc.search("resized_images");
  indexOfImg = indexOfImg + 15;
  var imgSrcSubStr = imgSrc.substring(indexOfImg);
  modalImg.src = fullGitHubLink + imgSrcSubStr;
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

modal.addEventListener("mousedown", function (e) {
  if (modalImg.contains(e.target)) {
    // Clicked in box
  } else {
    // Clicked outside the box
    modal.style.display = "none";
  }
});
