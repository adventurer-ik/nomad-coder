const h1 = document.querySelector('div.t3:first-child h1');

function handleh1Click() {
    h1.style.color = 'red';
}

function handleMouseEnter() {
    h1.innerText = 'mouse is here!';
}

function handleMouseLeave() {
    h1.innerText = 'mouse is gone!';
}

/**
 * 아래 2개는 동일한 함수끼리 묶어둠.
 * 밑의 주석처리와 위의 addEventListener는 동일함.
 *
 * 니꼬는 addEventListener 방식을 추천함.
 * 더 보기 좋고, 나주엥 removeEventListener를 통해서 event listener를 제거할 수 있기 때문.
 * 또, 보기 좋게 eventListen 하는거구나~ 하고 알 수가 있기 때문
 */
h1.addEventListener('click', handleh1Click);
// h1.onclick = handleh1Click;

h1.addEventListener('mouseenter', handleMouseEnter);
// h1.onmouseenter = handleMouseEnter;

h1.addEventListener('mouseleave', handleMouseLeave);
// h1.onmouseleave = handleMouseLeave;

// 니꼬는 resize 이벤트 무지 좋아함.
// document가 JavaScript에서 기본적으로 제공 되듯이 window도 JS가 기본적으로 제공함.
// document의 body, head, title 이런 것들은 중요하기 때문에 존재하는 항목임!
// div나 나머지 element들은 querySelector나 getElementById 등으로 찾아와야 함.
function handleWindowResize() {
    document.body.style.backgroundColor = 'tomato';
}
function handleWindowCopy() {
    alert('Copier!!');
}
function handleWindowOffline() {
    alert('SOS no WIFI');
}
function handleWindowOnline() {
    alert('All Goood');
}

window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy);
window.addEventListener('offline', handleWindowOffline);
window.addEventListener('online', handleWindowOnline);

/**
 * 함수를 실행할때는 함수명()이 들어가야함.
 * 근데 내가 직접 실행하는게 아니라, Javascript 해당 함수를 찾아서
 * 실행하게 하려면
 * ()를 제외한 함수명만 넣어야 함
 * 그래야 자바스크립트가 찾아서 해당 함수를 실행할 수 있음
 * 그렇지 않다면 바로 실행되버림
 */
