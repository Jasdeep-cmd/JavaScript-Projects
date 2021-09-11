let bttn=document.getElementById('button');

let output=document.getElementById('output');

bttn.addEventListener('click',function(){
    let str=document.getElementById('word').value;
    output.innerHTML=str.length;
})