/*
 * toggleMusic():
 * Toggle music playback, and call updateMusicInfo().
 */
var audio = document.getElementById("audio");

function toggleMusic() {
  if (audio.paused) {
    audio.play();
    updateMusicInfo();
  } else {
    audio.pause();
    updateMusicInfo();
  }
}

/*
 * updateMusicInfo():
 * If music is playing update marquee to show the song's name,
 * and change the music icon on the navigation panel to the stop music icon.
 * If it's paused revert back to the default text and music icon.
 */
var icon = document.getElementById("nav-item-music");
var marqueeText = document.getElementById("marquee-text");

function updateMusicInfo() {
  if (audio.paused) {
    icon.style.background = "url('../assets/images/ui/music.png') no-repeat center center";
    marqueeText.innerHTML = "ψ(｀∇´)ψ DEATH TO LINKEDIN ＼(｀0´)／";
  } else {
    icon.style.background = "url('../assets/images/ui/music-stop.png') no-repeat center center";
    marqueeText.innerHTML = "♪ Now playing: Ryu Umemoto - Remains ♪";
  }
}

/*
 * When the mouse is over the navigation panel's items,
 * make marquee-nav-info visible and show the item's description.
 */
const elements = document.getElementsByClassName("nav-item");
var marqueeNavInfo = document.getElementById("marquee-nav-info");

Array.from(elements).forEach((element) => {
  element.addEventListener("mouseover", () => {
    switch (element.id) {
      case "nav-item-home":
        marqueeNavInfo.innerHTML = "Return home";
        break;
      case "nav-item-about":
        marqueeNavInfo.innerHTML = "More about me";
        break;
      case "nav-item-links":
        marqueeNavInfo.innerHTML = "Other places you can find me";
        break;
      case "nav-item-music":
        marqueeNavInfo.innerHTML = "Play some music";
        break;
    }
    marqueeNavInfo.style.visibility = "visible";
  });
});

/*
 * When the mouse leaves the navigation panel's items,
 * hide marquee-nav-info.
 */
Array.from(elements).forEach((element) => {
  element.addEventListener("mouseout", () => {
    marqueeNavInfo.style.visibility = "hidden";
  });
});
