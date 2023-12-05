/*Paragrafus kiírók*/
function gomb1() {
    document.getElementById("aerial").style.maxHeight = document.getElementById("aerial").scrollHeight + "px"
}

function gomb2() {
    document.getElementById("darilbalde").style.maxHeight = document.getElementById("darilbalde").scrollHeight + "px"
}

function gomb3() {
    document.getElementById("pharact").style.maxHeight = document.getElementById("pharact").scrollHeight + "px"
}

/*Bolt összesítő */
function calc() {
    let a = document.getElementById("aerialshop").value * 25;
    let b = document.getElementById("darilbaldeshop").value * 30;
    let c = document.getElementById("pharactshop").value * 35;
    let price = (a + b + c) * 1.3;
    document.getElementById("result").value = price

}


/*Érzékelők*/
if (document.title == "Shop") {
    document.getElementById("calculate").addEventListener("click", calc);
}
else {

    document.getElementById("aerielgomb").addEventListener("click", gomb1);
    document.getElementById("darilbaldegomb").addEventListener("click", gomb2);
    document.getElementById("pharactgomb").addEventListener("click", gomb3);
}