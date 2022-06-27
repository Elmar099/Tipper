let btn = document.getElementById('submit');
let tot = document.getElementById('total-1');
let tip = document.getElementById('tip-1');

btn.addEventListener('click', function(){
    let percent = parseFloat(document.getElementById('percentage').value);
    let pep = parseFloat(document.getElementById('people').value);
    let bill = parseFloat(document.getElementById('price').value)
    let tip1 = (percent / 100) * bill
    tot.innerHTML = '$' + ((bill + tip1) / pep).toFixed(2);
    tip.innerHTML = '$' + (tip1 / pep).toFixed(2);
})