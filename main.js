window.addEventListener('scroll', function() {
    var scrollPos = window.scrollY;
    var imgs = document.getElementsByClassName('scrollImg');
    for(var i = 0; i < imgs.length; i++) {
        var img = imgs[i];
        img.style.width = (100 + scrollPos/10) + '%';
    }
});
