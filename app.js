// 変数定義
let isPlaying = false

// select lang
const selLang = document.getElementById('selLang');
//const SelLangMes = '言語を選択してください';
//selLang.innerText = SelLangMes;
selLang.innerText = '言語を選択してください';
const JABtn = document.getElementById('JABtn');
const ENBtn = document.getElementById('ENBtn');

// set lang variables
// var OptMes = 'ENoptin.txt';
const Optin = document.getElementById('optin');
const OPTinBtn = document.getElementById('OPTinBtn');

/*
let time = 300
var timeText = document.getElementById('js-time');
timeText.innerHTML = (time / 10).toString();
*/
//const FF = document.getElementById('form');

const F = document.getElementById('form');
const V = document.getElementById("video");
V.poster = 'soccor_dribble_man.png'

const ConMes = document.getElementById('conMes');
const JAredir = 'https://www.yomiuri.co.jp';
const ENredir = 'https://www.asahi.com';
const QuitBtn = document.getElementById('quit');

// 日本語ボタン
JABtn.addEventListener('click', () => {
  isPlaying = true;
  selLang.style.display = 'none';
  JABtn.style.display = 'none';
  ENBtn.style.display = 'none';
  //lang parameters
  const OptMes = 'JAoptin.txt';
  CM = './テリトリアPV.mp4';
  OPTinBtn.innerText = '同意してアンケートに回答';

  //timeText.innerHTML = time / 10;

  fetch(OptMes).then(function (response) {
    if (response.ok) {
      return response.text();
    }
    throw new Error('Network response was not ok.');
  }).then(function (text) {
    Optin.innerHTML = text;
  }).catch(function (error) {
    console.log('There has been a problem with your fetch operation: ', error.message);
  });

  OPTinBtn.style.display = '';
  V.src = CM;
  V.style.display = 'none';

  QuitBtn.innerText = '接続';

  ConMes.innerHTML = 'インターネットに接続されました。<br>自動でリダイレクトされない場合、<a href=' + JAredir + '>ここ</a>をクリック';
  ConMes.style.display = 'none';
})

// Englishボタン
ENBtn.addEventListener('click', () => {
  //  setGame()
  isPlaying = true
  selLang.style.display = 'none';
  ENBtn.style.display = 'none'
  JABtn.style.display = 'none'
  //local lang param
  const OptMes = 'ENoptin.txt'
  const CM = './PicoCELA PV.mp4';
  //timeText.innerHTML = time / 10;

  fetch(OptMes).then(function (response) {
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
  V.src = CM;
  V.style.display = 'none';

  ConMes.innerHTML = 'Connected to the Internet.<br>If you are not automatically redirected, click <a href=' + ENredir + '>here</a>';
  ConMes.style.display = 'none';

  QuitBtn.innerText = 'connect';
})

OPTinBtn.addEventListener('click', () => {

  Optin.style.display = 'none';
  OPTinBtn.style.display = 'none'
  F.style.display = '';
  V.style.display = '';
  V.play();

  F.innerHTML = 'アンケート';

  /*
    F.innerHTML = '<form name="form1"><select name="color1"><option value="red">赤</option><option value="yellow">黄</option><option value="blue">青</option></select></form>
    <select name="residence">
                  <option value='0'></option>
                  <option value='id'>インドネシア</option>
                  <option value='sg'>シンガポール</option>
                  <option value='th'>タイ</option>
                  <option value='ph'>フィリピン</option>
                  <option value='my'>マレーシア</option>
                  <option value='vn'>ベトナム</option>
                  <option value='mm'>ミャンマー</option>
                  <option value='kh'>カンボジア</option>
                  <option value='et1'>その他東南アジア</option>
                  <option value='jp'>日本</option>
                  <option value='cn'>中華人民共和国</option>
                  <option value='tw'>台湾</option>
                  <option value='hk'>香港</option>
                  <option value='mo'>マカオ</option>
                  <option value='kr'>大韓民国</option>
                  <option value='kp'>朝鮮民主主義人民共和国</option>
                  <option value='et2'>その他東アジア</option>
                  <option value='in'>インド</option>
                  <option value='np'>ネパール</option>
                  <option value='et3'>その他南アジア</option>
                  <option value='et4'>その他アジア</option>
                  <option value='us'>アメリカ</option>
                  <option value='ca'>カナダ</option>
                  <option value='et5'>その他北・中央・南アメリカ</option>
                  <option value='au'>オーストラリア</option>
                  <option value='nz'>ニュージーランド</option>
                  <option value='et6'>その他オセアニア</option>
                  <option value='gb'>イギリス</option>
                  <option value='fr'>フランス</option>
                  <option value='de'>ドイツ</option>
                  <option value='ch'>スイス</option>
                  <option value='es'>スペイン</option>
                  <option value='ru'>ロシア</option>
                  <option value='et7'>その他ヨーロッパ</option>
                  <option value='af'>アフリカ諸国</option>
                  <option value='et'>その他各国</option>
              </select>'
  */

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