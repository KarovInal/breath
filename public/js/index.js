'use strict'

var meditate = new Breath();

document.querySelector('.circle-container').addEventListener('click', function() {
    meditate.tumbler();
})

document.querySelector('.setting').addEventListener('click', function(e) {
    if(e.target.value !== undefined) {
        meditate.stopBreath();
        meditate.setSetting(e.target.value)
    }
})