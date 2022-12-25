const imgs =  document.getElementById("imgs");

const img = document.querySelectorAll("#imgs img");

const LeftBtn = document.getElementById("left");

const RightBtn = document.getElementById("right");


let idx = 0;

let interval = setInterval(run,2000);

function run(){
    idx++;
    changeImage();
    
}

function changeImage(){
    if(idx > img.length -1){
        idx = 0;
     }else if(idx < 0){
        idx = img.length - 1;
     }
    imgs.style.transform = `translateX(${idx *-500}px)`;
}

LeftBtn.addEventListener('click',() =>{
    idx--;
    changeImage();
    resetInterval();
})

RightBtn.addEventListener('click',() =>{
    idx++;
    changeImage();
    resetInterval();
})

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 3000);
}