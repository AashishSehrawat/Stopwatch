const clock = document.querySelector(".clock");

let second = 0 , minute = 0 , hour = 0;
let intervalId;


const startStopwatch = () =>{
    intervalId = setInterval(()=>{
        if(second < 59) {
            second++;
        }
        else if(minute >=59){
            hour++;
            minute = 0; 
        }
        else{
            second = 0;
            minute++;
        }

        const sec = String(second).padStart(2 , "0");
        const min = String(minute).padStart(2 , "0")
        const hr = String(hour).padStart(2 , "0")

        clock.innerText = `${hr}:${min}:${sec}`
    },1000)
};

const stopStopwatch = () =>{
    clearInterval(intervalId);
};

