let myDate = new Date();


document.addEventListener('DOMContentLoaded', function() {

    // control icture zoom
    let elem = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elem);

    // control parallax
    let paras = document.querySelectorAll('.parallax');
    M.Parallax.init(paras);
});


;

document.getElementById("myDate").innerHTML = myDate.getFullYear();


