// 変数定義
let isPlaying = false
//let tapCount, time = 0
//const ADMedia  = document.getElementById('js-media').style.visibility = 'hidden'
const SelLang  = document.getElementById('message')
const JABtn = document.getElementById('JABtn');
const ENBtn = document.getElementById('ENBtn');
const optin = document.getElementById('optin')
const OPTinBtn = document.getElementById('OPTinBtn');
/*
let time = 300
var timeText = document.getElementById('js-time');
timeText.innerHTML = (time / 10).toString();
*/
const Q = document.getElementById('questionnaire');
const v = document.getElementById("video").style.visibility = 'hidden';


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
  SelLang.style.display = 'none'
  JABtn.style.display = 'none'
  ENBtn.style.display = 'none'
  //timeText.innerHTML = time / 10;

  fetch('JAoptin.txt').then(function (response) {
    if(response.ok) {
      return response.text();
    }
    throw new Error('Network response was not ok.');
  }).then(function(text) { 
    optin.innerHTML = text;
  }).catch(function(error) {
    console.log('There has been a problem with your fetch operation: ', error.message);
  });

  OPTinBtn.innerText = '同意してアンケートに回答';
  OPTinBtn.style.display = '';
  v.src = "./テリトリアPV.mp4";

})

// Englishボタン
ENBtn.addEventListener('click', () => {
  //  setGame()
  isPlaying = true
  ENBtn.style.display = 'none'
  JABtn.style.display = 'none'
  //timeText.innerHTML = time / 10;

  fetch('ENoptin.txt').then(function (response) {
    if(response.ok) {
      return response.text();
    }
    throw new Error('Network response was not ok.');
  }).then(function(text) { 
    optin.innerHTML = text;
  }).catch(function(error) {
    console.log('There has been a problem with your fetch operation: ', error.message);
  });
  
 OPTinBtn.innerText = 'Accept and anser the questionnarie<';
 OPTinBtn.style.display = '';
 v.src = "./PicoCELA PV.mp4";

})

OPTinBtn.addEventListener('click', () => {

  optin.style.display = 'none';
  v.style.visibility = 'visible';
  v.load();
  v.play();
  /*
  //残り秒数を表示
  v.addEventListener("timeupdate", function () {
    timeText.innerHTML = (v.duration - v.currentTime).toFixed(1);
  }, false);
  */

})

