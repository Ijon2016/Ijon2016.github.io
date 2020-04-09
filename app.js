// 変数定義
let isPlaying = false
//let tapCount, time = 0
//const tapBtn    = document.getElementById('js-tapBtn')
const JABtn  = document.getElementById('js-JABtn');
const ENBtn  = document.getElementById('js-ENBtn');
var ADMedia = document.getElementById('js-media').style.visibility = "hidden";
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

function dispVideo(){
 
	var f = document.fm;
 
	for(var i = 0 ; i < f.elements.length ; i++){
		if(f.elements[i].type=='button'){
			alert(i + '番目のボタン名は' 
				+ f.elements[i].value + 'です' );
		}
	}	
}

// ボタンで可視化
JABtn.addEventListener('click', () => {
  //setGame()
  isPlaying = true
  //tapBtn.disabled = false
  //JABtn.style.display = 'none'

  if(ADMedia.style.visibility=="visible"){
		// hiddenで非表示
		ADMedia.style.visibility ="hidden";
	}else{
		// visibleで表示
		ADMedia.style.visibility ="visible";

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
