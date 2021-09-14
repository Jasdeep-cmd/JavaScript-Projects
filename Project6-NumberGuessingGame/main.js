let bttn=document.getElementById('btn');

let output=document.getElementById('text');

let number= [Math.floor(Math.random()*100)];

bttn.addEventListener('click',function(){
    let input=document.getElementById('userinput').value;
    if(input==number){
        output.innerHTML=`You guessed the right number, number was ${number}`;
    }
    else if(input<number){
        output.innerHTML=`You guessed too low!, number was ${number}`;
    }
    else {
        output.innerHTML=`You guessed too high!, number was ${number}`;
    }
});
