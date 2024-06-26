let sort = document.getElementById("sort");
let allItems = document.getElementsByClassName("color");

sort.oninput = function () {
    for (let i = 0; i < allItems.length; i++) {
        allItems[i].style.display = "none";
    }
    if (sort.value === "a-z") {
        let toSort = [];
        for (let i = 0; i < allItems.length; i++) {
            toSort[i] = allItems[i].dataset.name;
        }

        let sorted = toSort.sort();

        for (let i = 0; i < allItems.length; i++) {
            console.log(sorted[i]);
            for (let j = 0; j < allItems.length; j++) {
                if(allItems[j].dataset.name == sorted[i]){
                    allItems[j].style.display = "inline";
                }
            }
        }
    }
    else{
        let toSort = [];
        for (let i = 0; i < allItems.length; i++) {
            toSort[i] = allItems[i].dataset.name;
        }

        let sorted = toSort.sort();
        let reversed = sorted.reverse();

        for (let i = 0; i < allItems.length; i++) {
            console.log(reversed[i]);
            for (let j = 0; j < allItems.length; j++) {
                if(allItems[j].dataset.name == reversed[i]){
                    allItems[j].style.display = "inline";
                }
            }
        }
    }
}