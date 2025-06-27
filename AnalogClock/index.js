let hr = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".secs");


function startClock(){
    let now = new Date();
    let currHr = now.getHours();
    let currMin = now.getMinutes();
    let currSecs = now.getSeconds();

    let transformHr = (currHr/12)*360;
    let transformMin = (currMin/60)*360;
    let transformSecs = (currSecs/60)*360;
    hr.style.transform = `rotate(${transformHr+90}deg)`;
     min.style.transform = `rotate(${transformMin+90}deg)`;
      sec.style.transform = `rotate(${transformSecs+90}deg)`;
}

setInterval(startClock,1000);
