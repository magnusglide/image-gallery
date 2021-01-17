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
    img.alt = x;
    document.getElementsByClassName("image_container")[x].appendChild(img);
    img.addEventListener("click", function () {
      showImg(img);
    });
    // console.log(images[x]); //for testing
  }
}

//Modal

var modal = document.getElementById("modal-id");
var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");

for (let i of document.getElementsByTagName("img")) {
  i.addEventListener("click", function () {
    showImg(i);
  });
}

function showImg(img) {
  // console.log(img); //for testing
  modal.style.display = "block";
  modalImg.src = img.src;
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
