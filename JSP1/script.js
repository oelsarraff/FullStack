let init = true;
let vCount = 0;
// let fullName = "";

function dspName() {
    let name = document.getElementById("firstName").innerHTML + " " + document.getElementById("lastName").innerHTML;
    document.getElementById("fullName").innerHTML = "Salams " + name + "! Thank you for joining us.";
    document.getElementById("vQuestion").style.display = "flex";
    document.getElementById("add").style.display = "flex";
    document.getElementById("del").style.display = "flex";
}

function addV() {
    if (init) {
        init = false;
        let vCount = 0;
    } else {
        vCount++;
    }
    document.createElement('div').className('vehicle');
    document.getElementsByClassName('vehicle')[vCount].style.display = 'flex';
    document.appendChild(document("vehicles"))[vCount];
}

function delV() {
    if (init || vCount === 0) {
        let vCount = 0;
        document.getElementsByClassName("vehicle").style.display = "none";
    } else {
        vCount--;
        document.removeChild(document("vehicle"))[vCount];
    }
}

function clrGreen(vehicle) {
    document.getElementsByClassName("vehicleSize")[vehicle].style.backgroundColor = "green";
}

function clrGrey(vehicle) {
    document.getElementsByClassName("vehicleSize")[vehicle].style.backgroundColor = "grey";
}

function clrYellow(vehicle) {
    document.getElementsByClassName("vehicleSize")[vehicle].style.backgroundColor = "yellow";
}

function clrBrown(vehicle) {
    document.getElementsByClassName("vehicleSize")[vehicle].style.backgroundColor = "brown";
}
