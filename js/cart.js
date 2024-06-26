const addToCartButtons = document.getElementsByClassName("games__button");
let cartMessage = 0;
const cartMessageValue = document.getElementsByClassName("shoppingCart__message")[0];
const shoppingModal = document.getElementById("js--shoppingModal");
let modalIsOpen = false;
let cartItemsValues = [0, 0, 0];

//
// PROBEREN OM COOKIES TOE TE VOEGEN VOOR DIE CART
//

for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].onclick = function () {
        switch (addToCartButtons[i].dataset.product) {
            case "barbecue":
                cartItemsValues[0] += 1;
                break;
            case "shirt":
                cartItemsValues[1] += 1;
                break;
            case "airfryer":
                cartItemsValues[2] += 1;
                break;
        }
    }
}

let cartLink = document.getElementById("cartLink");
const checkoutWindow = document.getElementById("js--checkoutWindow");
let checkoutIsOpen = false;

let cartItems = document.getElementsByClassName("checkout__listItem");
let cartItems_value = document.getElementsByClassName("checkout__amount");

cartLink.onclick = function () {
    if (checkoutIsOpen === false) {
        document.querySelector("main").style.display = "none";
        checkoutWindow.style.display = "block";
        checkoutIsOpen = true;
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItemsValues[i] < 1) {
                cartItems[i].style.display = "none";
            }
            else {
                cartItems_value[i].innerHTML = cartItemsValues[i] + "x";
                cartItems[i].style.display = "flex";
            }
        }
        return;
    }
    document.querySelector("main").style.display = "block";
    checkoutWindow.style.display = "none";
    checkoutIsOpen = false;
}