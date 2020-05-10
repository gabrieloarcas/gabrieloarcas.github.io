let modal = document.getElementById("myModal");

let img = document.getElementsByClassName("myImg");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
let showModal = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", showModal);
}

let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

modalImg.onclick = function () {
  modal.style.display = "none";
};
