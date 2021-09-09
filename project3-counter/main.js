let add=document.getElementById('increment');

let subtract=document.getElementById('decrement');

let output=document.getElementById('number')

let value=0;

add.addEventListener('click',function(){
    value+=1;
    output.innerHTML=value;
})

subtract.addEventListener('click',function(){
    value-=1;
    output.innerHTML=value;
})

