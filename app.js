// 変数定義
let isPlaying = false
//let tapCount, time = 0
//const ADMedia  = document.getElementById('js-media').style.visibility = 'hidden'
//const ADMedia  = document.getElementById('Jvideo')
const JABtn = document.getElementById('JABtn');
const ENBtn = document.getElementById('ENBtn');
//const countText = document.getElementById('js-count')
let time = 300
var timeText = document.getElementById('js-time');
timeText.innerHTML = time / 10
const optin = document.getElementById('optin')
const questionell = document.getElementById('js-enq')
const v = document.getElementById("video")


/*
const timer = setInterval( () => {
  time -= 10
  timeText.innerHTML = (time / 100).toFixed(1)

  if (time === 0) {
    clearInterval(timer)
    isPlaying = false
    startBtn.style.display = 'inline-block'
    startBtn.innerText = 'もう一回'
  }
}, 10)(((
*/

// 日本語ボタン
JABtn.addEventListener('click', () => {
  isPlaying = true
  ENBtn.style.display = 'none'
  //timeText.innerHTML = time / 100;

  fetch('https://ijon2016.github.io/JAoptin.txt').then(function (response) {
    return response.text();
  }).then(function (text) {
    console.log(text)
    //optin.innerHTML = text;
  });

  v.src = "./テリトリアPV.mp4";
  v.load();
  v.play();
  //残り秒数を表示
  v.addEventListener("timeupdate", function () {
    timeText.innerHTML = (v.duration - v.currentTime).toFixed(1);
  }, false);

})

// Englishボタン
ENBtn.addEventListener('click', () => {
  //  setGame()
  isPlaying = true
  //  tapBtn.disabled = false
  JABtn.style.display = 'none'
  timeText.innerHTML = time / 100;

  const timer = setInterval(() => {
    time -= 1
    timeText.innerHTML = (time / 100).toFixed(1)

    if (time === 0) {
      clearInterval(timer)
      isPlaying = false
      //  JABtn.style.display = 'inline-block'
      //  JABtn.innerText = 'もう一回'
    }
  }, 1)

  var v = document.getElementById("video")
  v.src = "./PicoCELA PV.mp4";
  v.load();
  v.play();

})