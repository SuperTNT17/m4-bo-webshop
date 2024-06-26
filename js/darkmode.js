let toggleButton = document.getElementById('dark-mode-toggle');
let dark = false;
toggleButton.addEventListener('click', () => {
    if (!dark) {
        toggleButton.children[0].style.animationName = "fadeout";
        toggleButton.children[1].style.animationName = "fadein-sun";
        dark = true;
    }
    else{
        toggleButton.children[0].style.animationName = "fadein";
        toggleButton.children[1].style.animationName = "fadeout-sun";
        dark = false;
    }
    document.body.classList.toggle('dark-mode');
    document.querySelector('nav').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelector('#eyecatcher--content--text').classList.toggle('dark-mode');
});