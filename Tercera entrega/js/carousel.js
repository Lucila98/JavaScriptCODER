let carouseIndex = 1;
showImages(carouseIndex);

function changeImages(index) {
    showImages(carouseIndex += index);
}
function back(index) {
    showImages(carouseIndex = index);
}

function showImages(index) {
  let i;
  let carousel = document.getElementsByClassName("carousel");
  if (index > carousel.length) {carouseIndex = 1}
  if (index < 1) {carouseIndex = carousel.length}
  for (i = 0; i < carousel.length; i++) {
    carousel[i].style.display = "none";
  }
  carousel[carouseIndex-1].style.display = "block";
}