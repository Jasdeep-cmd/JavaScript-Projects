let btn=document.getElementById('bttn');

let output=document.getElementById('output');

let input=document.getElementById('input');

btn.addEventListener('click',function(){
    var paragraph=document.createElement('p');
    paragraph.classList.add('paragraph-style');
    paragraph.innerText=input.value;
    output.appendChild(paragraph);
    input.value="";

    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration="line-through";
    });

    paragraph.addEventListener('dblclick',function(){
        output.removeChild(paragraph);
    });
});


