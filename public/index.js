
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);

    // control icture zoom
    let elem = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elem);

    // control parallax
    let paras = document.querySelectorAll('.parallax');
    M.Parallax.init(paras);
});


