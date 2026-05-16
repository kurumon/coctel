const ram = document.getElementById("ram");
const messages = [
  "256",
  "384",
  "512",
  "640KB + 128",
  "640KB + 256",
  "640KB + 384",
  "640KB + 512",
  "640KB + 640",
  "640KB + 768",
  "640KB + 896",
  "640KB + 1024",
];
const images = ["../assets/images/ui/pc98_dos.png", "\'\'"];

function boot() {
  setTimeout(function () {
    playBootSound();
    changeVisibility("boot", "visible");
    changeVisibility("memory-info", "hidden");

    setTimeout(function () {
      changeVisibility("memory-info", "visible");
      printMemory(messages);

      setTimeout(function () {
        changeVisibility("memory-info", "hidden");
        changeVisibility("boot-info", "visible");
        changeBackgroundImage("boot", images[0]);

        setTimeout(function () {
          changeVisibility("boot-info", "hidden");
          changeVisibility("boot", "hidden");
          changeBackgroundImage("boot", images[1]);
        }, 3000);
      }, 2500);
    }, 550);
  }, 500);
}

function printMemory(messages) {
  for (var i = 0; i < messages.length; i++) {
    (function (i) {
      setTimeout(function () {
        changeText(messages[i]);
      }, 100 * i);
    })(i);
  }
}

function changeText(str) {
  ram.innerHTML = str;
}

function changeVisibility(element, visibility) {
  document.getElementById(element).style.visibility = visibility;
}

function changeBackgroundImage(element, location) {
  document.getElementById(element).style.backgroundImage = "url(" + location + ")";
}

function playBootSound() {
  new Audio("https://files.catbox.moe/1fg1vh.mp3").play();
}
