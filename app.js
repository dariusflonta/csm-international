var loader = document.getElementById("preloader");

    window.addEventListener('load', function() {
        loader.style.display = "none";
    });

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 50;

        if(revealtop < windowHeight - revealpoint) {
            reveals[i].classList.add('activeReveal');
        }
    }
}