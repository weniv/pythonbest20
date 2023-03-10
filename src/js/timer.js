const $btnStart = document.querySelector('.timer-container .btn-play')
const $btnPause = document.querySelector('.timer-container .btn-pause')
const $btnReset = document.querySelector('.timer-container .btn-reset')
const $btnSubmit = document.querySelector('#btn-run')
const $queLinks = document.querySelectorAll('.contents nav ol li')
const $hour = document.querySelector('.timer-time .hour')
const $minute = document.querySelector('.timer-time .minute')
const $second = document.querySelector('.timer-time .second')
let startTimer;

let time = 0;
let hour = 0;
let minute = 0;
let second = 0;

// 시작 버튼
$btnStart.addEventListener('click',()=>{
  startTimer = setInterval(timer, 1000);
  $btnStart.style.visibility = 'hidden';
  $btnPause.style.visibility = 'visible';
;})

// 일시정지 버튼 
$btnPause.addEventListener('click',()=>{
  $btnStart.style.visibility = 'visible';
  $btnPause.style.visibility = 'hidden';
  clearInterval(startTimer);
;})

// 채점 시 타이머 종료
$btnSubmit.addEventListener('click',()=>{
  $btnStart.style.visibility = 'visible';
  $btnPause.style.visibility = 'hidden';
  clearInterval(startTimer);
})

// 타이머 초기화 버튼
$btnReset.addEventListener('click',()=>{
  clearInterval(startTimer);
  initTime();
})

// 타이머 시간 출력 함수
let timer = () => {
  time++;
  
  hour = parseInt(time/3600);
  minute = parseInt((time%3600)/60)
  second = parseInt((time%60))
  
  $hour.textContent = (hour.toString().length==2 ? hour : '0'+hour);
  $minute.textContent = (minute.toString().length==2 ? minute : '0'+minute);
  $second.textContent = (second.toString().length==2 ? second : '0'+second);

}

const initTime = ()=> {
  time=0;

  $btnStart.style.visibility = 'visible';
  $btnPause.style.visibility = 'hidden';
  $hour.textContent = '00';
  $minute.textContent = '00';
  $second.textContent =  '00';
}

// 타이머 초기화
// 페이지 이동시
// window.addEventListener('DOMContentLoaded',()=>{
//   clearInterval(startTimer);
//   initTime();
// })

// 문제 이동시
// $queLinks.forEach(el=>{
//   el.addEventListener('click',()=>{
//     clearInterval(startTimer);
//     initTime();
//   })
// })