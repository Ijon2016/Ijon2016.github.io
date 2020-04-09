// 変数定義
let isPlaying = false
//let tapCount, time = 0
//const tapBtn    = document.getElementById('js-tapBtn')
const JABtn  = document.getElementById('js-JABtn');
//const ENBtn  = document.getElementById('js-ENBtn');
//var ADMedia = document.getElementById('js-media').style.visibility = "hidden";
//const timeText  = document.getElementById('js-time')

// ゲームの初期値設定
/*
const setGame = () => {
  tapCount = 0
  time = 10000
  countText.innerText = tapCount
  timeText.innerHTML = time / 1000
}
setGame()
*/

// タップした時にカウントを増やす
/*
tapBtn.addEventListener('click', () => {
  if (!isPlaying) return false
  tapCount++
  countText.innerText = tapCount
})
*/

// ボタンで可視化
JABtn.addEventListener('click', () => {
  //setGame()
  isPlaying = true
  //tapBtn.disabled = false
  //JABtn.style.display = 'none'

  /*
  if(ADMedia.style.visibility=="visible"){
		// hiddenで非表示
		ADMedia.style.visibility ="hidden";
	}else{
		// visibleで表示
		ADMedia.style.visibility ="visible";
*/

  //  ADMedia.play();

  /*
  const timer = setInterval( () => {
    time -= 10
    timeText.innerHTML = (time / 1000).toFixed(2)

    if (time === 0) {
      clearInterval(timer)
      isPlaying = false
      startBtn.style.display = 'inline-block'
      startBtn.innerText = 'もう一回'
    }
  }, 10)
  */
})

// video 操作
video.addEventListener('loadedmetadata', function() {
  videoDuration.textContent = secondsToTimeCode(video.duration);
  videoCurrentTime.textContent = secondsToTimeCode(video.currentTime);
  videoProgressBar.style.transform = `scaleX(${video.currentTime / video.duration})`;
});

playPauseButton.addEventListener('click', function(event) {
  event.stopPropagation();
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

video.addEventListener('play', function() {
  playPauseButton.classList.add('paused');
});

video.addEventListener('pause', function() {
  playPauseButton.classList.remove('paused');
});

video.addEventListener('timeupdate', function() {
  if (videoControls.classList.contains('visible')) {
    videoCurrentTime.textContent = secondsToTimeCode(video.currentTime);
    videoProgressBar.style.transform = `scaleX(${video.currentTime / video.duration})`;
  }
}

video.addEventListener('ended', function() {
  playPauseButton.classList.remove('paused');
  video.currentTime = 0;
});


