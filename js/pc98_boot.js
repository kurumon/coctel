var screen = document.getElementById("boot");
var ram = document.getElementById("ram");
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

function boot() {
  screen.style.visibility = "visible";

  //WIP: add the pc98 boot sound and fix the timings

  document.getElementById("memory-info").style.visibility = "visible";

  printMemory(messages);

  setTimeout(() => (document.getElementById("memory-info").style.visibility = "hidden"), 2500);
  setTimeout(() => (document.getElementById("boot-info").style.visibility = "visible"), 2500);

  setTimeout(() => (screen.style.backgroundImage = "url(../assets/images/ui/pc98_dos.png)"), 2500);

  setTimeout(() => (document.getElementById("boot-info").style.visibility = "hidden"), 4000);
  setTimeout(() => (screen.style.visibility = "hidden"), 4000);
  setTimeout(() => (screen.style.backgroundImage = "url('')"), 4000);
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
