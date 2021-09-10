let bttn=document.getElementById('button')

let out=document.getElementById('output')

let quote=[
    "You are the shuckiest shuck faced shuck in the world!― James Dashner, The Maze Runner",



    '“That proves you are unusual," returned the Scarecrow; "and I am convinced that the only people worthy of consideration in this world are the unusual ones. For the common folks are like the leaves of a tree, and live and die unnoticed.”',


    '“Her name badge read: Hello! My name is DIE, DEMIGOD SCUM!”',


    '“Insane means fewer cameras!”',
];

bttn.addEventListener('click',function(){
    var randomQuote=quote[Math.floor(Math.random()*quote.length)];

    out.innerHTML=randomQuote;
});

