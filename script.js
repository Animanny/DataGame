var alCount = 0;
var arCount = 0;
var blCount = 0;
var brCount = 0;
var clCount = 0;
var crCount = 0;
var dlCount = 0;
var drCount = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}



document.getElementById("Al").onclick = function fun() {
    if (alCount == 0) {
        alCount = alCount + 1;
        var roll = getRandomInt(6);
        var text = "";
        if (roll < 2) {
            text = "2";
        } else {
            text = "7";
        }
        console.log(text);
        document.getElementById("outcome").innerHTML = text;
        //validation code to see State field is mandatory.
        return false;
    } else {
        return false;
    }

}

document.getElementById("Ar").onclick = function fun() {
    if (arCount == 0) {
        arCount = arCount + 1;
        var roll = getRandomInt(6);
        var text = "";
        if (roll < 2) {
            text = "2";
        } else {
            text = "7";
        }
        console.log(text);
        document.getElementById("outcome").innerHTML = text;
        //validation code to see State field is mandatory.  
        return false;
    } else {
        return false;
    }
}

document.getElementById("Bl").onclick = function fun() {
    if (blCount == 0) {
        blCount = blCount + 1;
        var roll = getRandomInt(6);
        var text = "";
        if (roll < 2) {
            text = "5";
        } else {
            text = "5";
        }
        console.log(text);
        document.getElementById("outcome").innerHTML = text;
        //validation code to see State field is mandatory.  
        return false;
    } else {
        return false;
    }
}

document.getElementById("Br").onclick = function fun() {
    if (brCount == 0) {
        brCount = brCount + 1;
        var roll = getRandomInt(6);
        var text = "";
        if (roll < 2) {
            text = "5";
        } else {
            text = "5";
        }
        console.log(text);
        document.getElementById("outcome").innerHTML = text;
        //validation code to see State field is mandatory.  
        return false;
    } else {
        return false;
    }
}

document.getElementById("Cl").onclick = function fun() {
    if (clCount == 0) {
        clCount = clCount + 1;
        var roll = getRandomInt(6);
        var text = "";
        if (roll < 2) {
            text = "9";
        } else {
            text = "3";
        }
        console.log(text);
        document.getElementById("outcome").innerHTML = text;
        //validation code to see State field is mandatory.  
        return false;
    } else {
        return false;
    }
}

document.getElementById("Cr").onclick = function fun() {
    if (crCount == 0) {
        crCount = crCount + 1;
        var roll = getRandomInt(6);
        var text = "";
        if (roll < 2) {
            text = "9";
        } else {
            text = "3";
        }
        console.log(text);
        document.getElementById("outcome").innerHTML = text;
        //validation code to see State field is mandatory.  
        return false;
    } else {
        return false;
    }
}

document.getElementById("Dl").onclick = function fun() {
    if (dlCount == 0) {
        dlCount = dlCount + 1;
        var roll = getRandomInt(6);
        var text = "";
        if (roll < 3) {
            text = "8";
        } else {
            text = "2";
        }
        console.log(text);
        document.getElementById("outcome").innerHTML = text;
        //validation code to see State field is mandatory.  
        return false;
    } else {
        return false;
    }
}

document.getElementById("Dr").onclick = function fun() {
    if (drCount == 0) {
        drCount = drCount + 1;
        var roll = getRandomInt(6);
        var text = "";
        if (roll < 3) {
            text = "8";
        } else {
            text = "2";
        }
        console.log(text);
        document.getElementById("outcome").innerHTML = text;
        //validation code to see State field is mandatory.  
        return false;
    } else {
        return false;
    }
}
