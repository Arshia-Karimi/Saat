const selectMenu = document.querySelectorAll('select');
const timeBox = document.querySelector('.time')
const setAlarmBtn = document.querySelector('button');
const contentw = document.querySelector('.content');
let alarmTime , alarmStete = 'noset';
const ringtone = new Audio('ringtone.mp3');

for(let i = 23 ; i >= 0 ; i--){
    i = i < 10 ? '0' + i : i;
    let option  = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML('afterend' , option);
}

for(let i = 59 ; i >= 0 ; i--){
    i = i < 10 ? '0' + i : i;
    let option  = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML('afterend' , option);
}

setInterval(()=>{
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    if(alarmTime == `${h}:${m}`){
        ringtone.play();
        ringtone.loop = true;
    }

    timeBox.innerHTML = `${h}:${m}:${s}`;
}, 1000);

setAlarmBtn.addEventListener('click' , ()=>{
    alarmTime = `${selectMenu[0].value}:${selectMenu[1].value}`
    if(alarmTime.includes('Hour') || alarmTime.includes('Minute')){
        return alert('زمان هشدار را به درستی مشخص کنید.')
    }
    checkState(alarmStete)
})

function checkState(state){
    console.log(alarmStete)
    if(state == 'noset'){
    contentw.classList.add('disable')
    setAlarmBtn.innerText = 'clear Alarm'
    alarmStete = 'set'
    }
    else{
        contentw.classList.remove('disable')
        alarmTime = '';
        ringtone.pause()
        alarmStete = 'noset'
        setAlarmBtn.innerText = 'clear Alarm'
    }
}