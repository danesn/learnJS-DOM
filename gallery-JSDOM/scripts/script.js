// Ambil foto jumbo
var jumbo = document.querySelector('.jumbo');

// Ambil foto thumb
var thumbs = document.querySelectorAll('.thumb');

thumbs.forEach(function(thumb){
    thumb.addEventListener('click', function(e) {
        jumbo.setAttribute('src', thumb.getAttribute('src'));
    })
})