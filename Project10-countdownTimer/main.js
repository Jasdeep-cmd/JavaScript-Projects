var start=document.getElementById('start');

var retest=document.getElementById('retest');

var h=document.getElementById('hour');
var m=document.getElementById('minute');
var s=document.getElementById('seconds');

var startTime=null;

function timer(){
    if(h.value ==0 && m.value==0 && s.value==0){
        h.value=0;
        m.value=0;
        s.value=0;
    }
    else if (s.value!=0){
        s.value--;
    }
    else if(m.value!=0 && s.value==0){
        s.value=59;
        m.value--;
    }
    else if(h.value!=0 && m.value==0){
        m.value=60;
        h.value--;
    }
    return;
}

function stopTimer(){
    clearInterval(startTime);
}

start.addEventListener('click',function(){
    function startInterval(){
        startTime=setInterval(function(){
            timer();
        },1000);
    }
    startInterval();
});


retest.addEventListener('click',function(){
    h.value=0;
    m.value=0;
    s.value=0;
    stopTimer();
});