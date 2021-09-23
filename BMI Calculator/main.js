let btn=document.getElementById('bttn');

btn.addEventListener('click',function(){
    let w=document.getElementById('w-input').value;

    let h=document.getElementById('h-input').value;

    let bmi=(w/(h*h)*10000);

    document.getElementById('bmi-output').value=bmi;

});



