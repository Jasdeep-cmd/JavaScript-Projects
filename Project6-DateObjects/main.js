let output=document.getElementById('output');

let date=document.getElementById('date');

let d=new Date();

// console.log(d);

let day=d.getDay();  //has value between 0-6, where 0 is sunday, 1 is monday and so on.

// console.log(day);

let ndate=d.toLocaleString();

// console.log(ndate);

switch(day){
    case 0:
        day="Sunday";
        break;
    
    case 1:
        day="Monday";
        break;

    case 2:
        day="Tuesday";
        break;

    case 3:
        day="Wednesday";
        break;

    case 4:
        day="Thrusday";
        break;

    case 5:
        day="Friday";
        break;

    case 6:
        day="Saturday";
        break;
}

output.innerHTML=day;
date.innerHTML=ndate;




