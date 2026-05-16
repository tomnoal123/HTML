const display = document.getElementById('display');
const start = document.getElementById('start');
const stoped = document.getElementById('stoped');
const reset = document.getElementById('reset');

let timer = null;
let startTime = 0;
let elsapsedTime = 0;
let isRunning = false;


start.addEventListener('click', () =>{
    if(!isRunning){
        startTime = Date.now() - elsapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
})

stoped.addEventListener('click', () =>{
    if(isRunning){
       clearInterval(timer);
       elsapsedTime = Date.now() - startTime;
       isRunning = false;
    }
    
})

reset.addEventListener('click', () =>{
        timer = null;
        startTime = 0;
        elsapsedTime = 0;
        isRunning = false;
    display.textContent = "00:00:00:00"
})


function update(){
    const currentTime = Date.now();
    elsapsedTime = currentTime - startTime;

    let hours = Math.floor(elsapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elsapsedTime / (1000 * 60)) % 60;
    let seconds = Math.floor(elsapsedTime / 1000) % 60;
    let miliseconds = Math.floor(elsapsedTime % 1000/ 10);


    hours = String(hours).padStart(2, 0);
    minutes = String(minutes).padStart(2, 0);
    seconds = String(seconds).padStart(2, 0);
    miliseconds = String(miliseconds).padStart(2, 0)
    display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}