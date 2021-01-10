const character = document.querySelector("#character");
const smile = document.querySelector(".smile");
const block = document.querySelector("#block");

const jumpUrl =
  "https://cdn.pixabay.com/photo/2013/07/12/13/51/astonished-147446_960_720.png";
const nomalUrl =
  "https://cdn.pixabay.com/photo/2013/07/12/13/51/neutral-147442_960_720.png";

document.addEventListener("keydown", jump);

function jump(e) {
  console.log(e.keyCode);
  if (character.classList === "animate") {
    return;
  }

  //↑38に反応するように
  if (e.keyCode === 38) {
    changeSmileFace(jumpUrl);
    character.classList.add("animate");
    setTimeout(removeJump, 300);
  }
}

function removeJump() {
  character.classList.remove("animate");
  changeSmileFace(nomalUrl);
}

//jumpする間表情が変わる
function changeSmileFace(url) {
  smile.removeAttribute("src");
  smile.setAttribute("src", url);
}

function checkTouch() {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top"),
    10
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left"),
    10
  );
  //charactorと blockが重なるかを判断
  if (blockLeft < 30 && blockLeft > -30 && characterTop > 130) {
    /* eslint no-restricted-globals: ["off"] */
    let gameResult = confirm("Game Over R U again??");
    if (gameResult) {
      changeSmileFace(nomalUrl);
      block.style.animation = "block 1.5s infinite linear";
    } else if (!gameResult) {
      block.style.animation = "none";
    }
  }
}
//繰り返す
setInterval(checkTouch, 10);
