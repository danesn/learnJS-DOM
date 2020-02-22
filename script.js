// take the tag button into variabel
var button = document.querySelector('.button');
// add event
button.addEventListener('click', function() {
    var angkaAcakSesuai = false
    while (angkaAcakSesuai == false) {
        var angkaAcakSatu = Math.random()*255;
        var angkaAcakDua = Math.random()*255;
        var angkaAcakTiga = Math.random()*255;
        
        if (angkaAcakSatu >= 0 && angkaAcakSatu <= 255 && angkaAcakDua >= 0 && angkaAcakDua <= 255 && angkaAcakTiga >= 0 && angkaAcakTiga <= 255) {
            angkaAcakSesuai = true;
        }
    }
    document.body.style.backgroundColor = 'rgb('+angkaAcakSatu+','+angkaAcakDua+','+angkaAcakTiga+')';
})

// take the tag range input into variabel
var rangeInputR = document.querySelector('#r');
var rangeInputG = document.querySelector('#g');
var rangeInputB = document.querySelector('#b');
var rangeInputA = document.querySelector('#a');
// add event
rangeInputR.addEventListener('input', function() {
    document.body.style.backgroundColor = 'rgb('+rangeInputR.value+','+rangeInputG.value+','+rangeInputB.value+','+rangeInputA.value+'%)';
})
rangeInputG.addEventListener('input', function() {
    document.body.style.backgroundColor = 'rgb('+rangeInputR.value+','+rangeInputG.value+','+rangeInputB.value+','+rangeInputA.value+'%)';
})
rangeInputB.addEventListener('input', function() {
    document.body.style.backgroundColor = 'rgb('+rangeInputR.value+','+rangeInputG.value+','+rangeInputB.value+','+rangeInputA.value+'%)';
})
rangeInputA.addEventListener('input', function() {
    document.body.style.backgroundColor = 'rgb('+rangeInputR.value+','+rangeInputG.value+','+rangeInputB.value+','+rangeInputA.value+'%)';
})