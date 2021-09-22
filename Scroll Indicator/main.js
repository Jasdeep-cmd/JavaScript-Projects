window.onscroll=function(){scrollfunction()};

function scrollfunction(){
    var winscroll=document.body.scrollTop || document.documentElement.scrollTop;

    var height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

    var scrolled=(winscroll/height)*100;

    document.getElementById('progress-bar').style.width=scrolled+ "%";
}