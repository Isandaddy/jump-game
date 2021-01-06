const character = document.querySelector("#character ");
const smile = document.querySelector(".smile");
const jumpUrl =
  "https://cdn.pixabay.com/photo/2013/07/12/13/51/astonished-147446_960_720.png";
const nomalUrl =
  "https://cdn.pixabay.com/photo/2013/07/12/13/51/neutral-147442_960_720.png";

character.addEventListener("click", jump);

function jump() {
  if (character.classList === "animate") {
    return;
  }
  changeSmileFace(jumpUrl);
  character.classList.add("animate");
  setTimeout(removeJump, 300);
}

function removeJump() {
  character.classList.remove("animate");
  changeSmileFace(nomalUrl);
}

function changeSmileFace(url) {
  smile.removeAttribute("src");
  smile.setAttribute("src", url);
}
