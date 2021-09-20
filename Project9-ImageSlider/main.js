let pre=document.getElementById('previous');

let next=document.getElementById('next');

let arr=["images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg","images/download (3).jpeg","images/download (4).jpeg","images/download (5).jpeg","images/download (6).jpeg","images/download.jpeg"];

let i=0;

next.addEventListener('click',function(){
    i++;
    if(i>arr.length-1)
        i=0;
    document.getElementById('image').src=arr[i];
});
pre.addEventListener('click',function(){
    i--;
    if(i<0)
        i=arr.length-1;
    document.getElementById('image').src=arr[i];
})
