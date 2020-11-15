
document.addEventListener('DOMContentLoaded', function() {

    // control icture zoom
    let elem = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elem);

    // control parallax
    let paras = document.querySelectorAll('.parallax');
    M.Parallax.init(paras);
});


