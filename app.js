// 変数定義
let isPlaying = false

// select lang
const selLang = document.getElementById('selLang');
const SelLangMes = '言語を選択してください'
selLang.innerText = SelLangMes;
const JABtn = document.getElementById('JABtn');
const ENBtn = document.getElementById('ENBtn');

// set lang variables
const JAOptMes = 'JAoptin.txt';
const ENOptMes = 'ENoptin.txt';
const Optin = document.getElementById('optin');

//const OPTinBtn = document.getElementById('OPTinBtn');
/*
let time = 300
var timeText = document.getElementById('js-time');
timeText.innerHTML = (time / 10).toString();
*/
const FF = document.getElementById('fform');
const F = document.getElementById('form');

const JABv = './テリトリアPV.mp4';
const ENBv = './PicoCELA PV.mp4';
const V = document.getElementById("video");
V.poster = 'soccor_dribble_man.png'

const ConMes = document.getElementById('conMes');
const JAredir = 'https://www.yomiuri.co.jp';
const ENredir = 'https://www.asahi.com';
const QuitBtn = document.getElementById('quit');

// 日本語ボタン
JABtn.addEventListener('click', () => {
  isPlayingM = true;
  selLang.style.display = 'none';
  JABtn.style.display = 'none';
  ENBtn.style.display = 'none';
  //timeText.innerHTML = time / 10;

  fetch(JAOptMes).then(function (response) {
    if (response.ok) {
      return response.text();
    }
    throw new Error('Network response was not ok.');
  }).then(function (text) {
    Optin.innerHTML = text;
  }).catch(function (error) {
    console.log('There has been a problem with your fetch operation: ', error.message);
  });

  OPTinBtn.innerText = '同意してアンケートに回答';
  OPTinBtn.style.display = '';
  V.src = JABv;
  V.style.display = 'none';

  QuitBtn.innerText = '接続';

  ConMes.innerHTML = 'インターネットに接続されました。<br>自動でリダイレクトされない場合、<a href='+JAredir+'>ここ</a>をクリック';
  ConMes.style.display = 'none';
})

// Englishボタン
ENBtn.addEventListener('click', () => {
  //  setGame()
  isPlaying = true
  selLang.style.display = 'none';
  ENBtn.style.display = 'none'
  JABtn.style.display = 'none'
  //timeText.innerHTML = time / 10;

  fetch('ENoptin.txt').then(function (response) {
    if (response.ok) {
      return response.text();
    }
    throw new Error('Network response was not ok.');
  }).then(function (text) {
    Optin.innerHTML = text;
  }).catch(function (error) {
    console.log('There has been a problem with your fetch operation: ', error.message);
  });

  OPTinBtn.innerText = 'Accept the terms and fill the form';
  OPTinBtn.style.display = '';
  V.src = ENBv;
  V.style.display = 'none';

  ConMes.innerHTML = 'Connected to the Internet.<br>If you are not automatically redirected, click <a href='+ENredir+'>here</a>';
  ConMes.style.display = 'none';

  QuitBtn.innerText = 'connect';
})

OPTinBtn.addEventListener('click', () => {

  Optin.style.display = 'none';
  OPTinBtn.style.display = 'none'
  F.style.display = '';
  V.style.display = '';
  V.play();
  
//  F.innerText = 'アンケート';
  F.innerHTML = '<form name="form1"><select name="color1"><option value="red">赤</option><option value="yellow">黄</option><option value="blue">青</option></select></form>'

  /*
  //残り秒数を表示
  v.addEventListener("timeupdate", function () {
    timeText.innerHTML = (v.duration - v.currentTime).toFixed(1);
  }, false);
  */
  
  /*
  V.addEventListener("timeupdate", function(){
    if (5.0 < V.currentTime) {
      QuitBtn.style.display = '';
    }
  })
  */

  V.addEventListener("ended", function () {
    ConMes.style.display = '';
    setTimeout(
      function () {
        window.location.href = "https://picocela.com"
      }, 2500)
  })
})

