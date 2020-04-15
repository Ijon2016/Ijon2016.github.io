// 変数定義
let isPlaying = false
//let tapCount, time = 0
//const tapBtn    = document.getElementById('js-tapBtn')
//const ADMedia  = document.getElementById('js-media').style.visibility = 'hidden'
//const ADMedia  = document.getElementById('Jvideo')
const JABtn = document.getElementById('JABtn');
const ENBtn = document.getElementById('ENBtn');
//const countText = document.getElementById('js-count')
var time = 300
var timeText = document.getElementById('js-time');
timeText.innerHTML = time / 10

// 再生時間の初期値設定
/*
const setGame = () => {
  tapCount = 0
  time = 10000
  countText.innerText = tapCount
  timeText.innerHTML = time / 1000
}
setGame()
*/

/*
// タップした時にカウントを増やす
tapBtn.addEventListener('click', () => {
  if (!isPlaying) return false
  tapCount++
  countText.innerText = tapCount
})
*/

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

/*
function countdown(){
  time -= 1
  timeText.innerHTML = (time / 10).toFixed(1)

  if (time === 0) {
    clearInterval(timer)
    isPlaying = false
  //  JABtn.style.display = 'inline-block'
  //  JABtn.innerText = 'もう一回'
  }
}
*/

// 日本語ボタン
JABtn.addEventListener('click', () => {
  //  setGame()
  isPlaying = true
  ENBtn.style.display = 'none'
  //timeText.innerHTML = time / 100;

  var v = document.getElementById("video")
  v.src = "./テリトリアPV.mp4";
  v.load();
  v.play();
  //現在の再生位置（秒）を表示
	v.addEventListener("timeupdate", function(){
		timeText.innerHTML = v.duration - v.currentTime;
	}, false);
  //timer = setInterval(countdown(), 100);
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