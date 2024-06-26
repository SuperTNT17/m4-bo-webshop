let fail = document.getElementById("checkout--fail");
let popup = document.getElementById("modal");
let button = document.getElementById("checkout--betalen");
let close = document.getElementById("close");
button.onclick = function(){
    popup.style.display = "flex";
}
close.onclick = function () {
    popup.style.display = "none";
}