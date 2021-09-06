let colors=['yellow','orange','red','blue','green','puple','black','brown'];

let buttons=document.getElementById("button");

buttons.addEventListener('click',function(){
    var colorRandom=colors[Math.floor(Math.random()*colors.length)];

    let container=document.getElementById('container');

    container.style.background=colorRandom;
})
