'use strict'

var meditate = new Breath();
document.querySelector('.circle-container').addEventListener('click', function() {
    meditate.tumbler();
})