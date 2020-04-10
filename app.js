// 変数定義
let isPlaying = false
//let tapCount, time = 0
//const tapBtn    = document.getElementById('js-tapBtn')
//const ADMedia  = document.getElementById('js-media').style.visibility = 'hidden'
//const ADMedia  = document.getElementById('Jvideo')
const JABtn = document.getElementById('JABtn')
const ENBtn = document.getElementById('ENBtn')
//const countText = document.getElementById('js-count')
//const timeText = document.getElementById('js-time')

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

// 日本語ボタン
JABtn.addEventListener('click', () => {
  //  setGame()
  isPlaying = true
  //  tapBtn.disabled = false
  ENBtn.style.display = 'none'

  var v = document.getElementById("Jvideo")
//  v.innerHTML = ""
  v.play()

  /*
  const timer = setInterval(() => {
    time -= 10
    timeText.innerHTML = (time / 1000).toFixed(2)

    if (time === 0) {
      clearInterval(timer)
      //      isPlaying = false
      JABtn.style.display = 'inline-block'
      //      JABtn.innerText = 'もう一回'
    }
  }, 10)
  */
})

// Englishボタン
ENBtn.addEventListener('click', () => {
  //  setGame()
  isPlaying = true
  //  tapBtn.disabled = false
  JABtn.style.display = 'none'

  var v = document.getElementById("Jvideo")
  v.play()

})