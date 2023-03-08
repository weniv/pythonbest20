const $btnStart = document.querySelector('.timer-container .btn-play')
const $btnPause = document.querySelector('.timer-container .btn-pause')
const $btnReset = document.querySelector('.timer-container .btn-reset')
const $btnSubmit = document.querySelector('#btn-run')

const $hour = document.querySelector('.timer-time .hour')
const $minute = document.querySelector('.timer-time .minute')
const $second = document.querySelector('.timer-time .second')

let time = 0;
let hour = 0;
let minute = 0;
let second = 0;

// 타이머 시작 버튼
$btnStart.addEventListener('click',()=>{
  const startTimer = setInterval(timer, 1000);
;})

// 타이머 종료 버튼
$btnPause.addEventListener('click',()=>{
  alert('stop');
;})

// 채점 시 타이머 종료
$btnSubmit.addEventListener('click',()=>{
  alert('submit')
})

// 타이머 초기화 버튼
$btnReset.addEventListener('click',()=>{
  alert('reset');
;})

let timer = () => {
  time++;
  
  // 시간 계산
  hour = parseInt(time/3600);
  minute = parseInt((time%3600)/60)
  second = parseInt((time%60))
  
  $hour.textContent = (hour.toString().length==2 ? hour : '0'+hour);
  $minute.textContent = (minute.toString().length==2 ? minute : '0'+minute);
  $second.textContent = (second.toString().length==2 ? second : '0'+second);

}
