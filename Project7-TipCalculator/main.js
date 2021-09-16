let btn=document.getElementById('bttn');

btn.addEventListener('click',function(){
    let billamount=document.getElementById('bill_amount').value;

    let tippercentage=document.getElementById('tip_percentage').value;

    let tipamount=document.getElementById('tip_amount').value=billamount/tippercentage;

    document.getElementById('total_bill').value=parseFloat(billamount)+parseFloat(tipamount);
});