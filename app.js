// 変数定義
let isPlaying = false
//let tapCount, time = 0
//const ADMedia  = document.getElementById('js-media').style.visibility = 'hidden'
//const SetLangM  = document.getElementById('Message');
const JABtn = document.getElementById('JABtn');
const ENBtn = document.getElementById('ENBtn');
const OptMes = document.getElementById('optin');
const OPTinBtn = document.getElementById('OPTinBtn');
/*
let time = 300
var timeText = document.getElementById('js-time');
timeText.innerHTML = (time / 10).toString();
*/
const Q = document.getElementById('questionnaire');
const V = document.getElementById("video");

const ConMes = document.getElementById('connecting');

// 日本語ボタン
JABtn.addEventListener('click', () => {
  isPlayingM = true;
  const SetLangM = document.getElementById('Message').style.display = 'none';
  JABtn.style.display = 'none';
  ENBtn.style.display = 'none';
  //timeText.innerHTML = time / 10;

  fetch('JAoptin.txt').then(function (response) {
    if (response.ok) {
      return response.text();
    }
    throw new Error('Network response was not ok.');
  }).then(function (text) {
    optin.innerHTML = text;
  }).catch(function (error) {
    console.log('There has been a problem with your fetch operation: ', error.message);
  });

  OPTinBtn.innerText = '同意してアンケートに回答';
  OPTinBtn.style.display = '';
  V.src = "./テリトリアPV.mp4";
  V.style.display = 'none';
})

// Englishボタン
ENBtn.addEventListener('click', () => {
  //  setGame()
  const SetLangM = document.getElementById('Message').style.display = 'none';
  isPlaying = true
  ENBtn.style.display = 'none'
  JABtn.style.display = 'none'
  //timeText.innerHTML = time / 10;

  fetch('ENoptin.txt').then(function (response) {
    if (response.ok) {
      return response.text();
    }
    throw new Error('Network response was not ok.');
  }).then(function (text) {
    optin.innerHTML = text;
  }).catch(function (error) {
    console.log('There has been a problem with your fetch operation: ', error.message);
  });

  OPTinBtn.innerText = 'Accept the terms and fill the form';
  OPTinBtn.style.display = '';
  V.src = "./PicoCELA PV.mp4";
  V.style.display = 'none';
})

OPTinBtn.addEventListener('click', () => {

  OptMesh.style.display = 'none';
  //const v = document.getElementById("video");
  V.style.display = '';
  V.play();
  /*
  //残り秒数を表示
  v.addEventListener("timeupdate", function () {
    timeText.innerHTML = (v.duration - v.currentTime).toFixed(1);
  }, false);
  */
  V.addEventListener("ended", function () {
    ConMes.innerHTML = 'インターネットに接続されました。<br>自動でリダイレクトされない場合、<a href='https://www.picocela.com'>ここ</a>をクリック';
    setTimeout(
    function link() {
      location.href =’https://picocela.com’;
    }, 1)
  })
})

