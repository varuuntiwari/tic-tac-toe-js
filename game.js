var playerTurn = "x"

function circleCross(e) {
    // Filling the clicked box
    if(e.innerHTML === "") {
        if(playerTurn === "x") {
            e.innerHTML = "x"
            playerTurn = "o"
        } else if (playerTurn === "o") {
            e.innerHTML = "o"
            playerTurn = "x"
        }
    } else {
        alert("box already filled")
    }

    // Checking for winning conditions
    if(lineMatch("o")) {
        alert("circle wins")
    } else if(lineMatch("x")) {
        alert("cross wins")
    }
}

function lineMatch(s) {
    let boxes = document.querySelectorAll(".box")
    let pattern = []
    boxes.forEach((box) => {
        pattern.push(box.innerText)
    })
    // Horizontal match
    for(let i=0; i < 7; i+=3) {
        if(pattern[i] === s && pattern[i+1] === s && pattern[i+2] === s) {
            console.log("Horizontal match:")
            console.log(pattern)
            return true
        }
    }
    // Vertical match
    for(let i=0; i < 3; i++) {
        if(pattern[i] === s && pattern[i+3] === s && pattern[i+6] === s) {
            console.log("Vertical match:")
            console.log(pattern)
            return true
        }
    }
    // Diagonal match
    if((pattern[0] === s && pattern[4] === s && pattern[8] === s) ||
        (pattern[2] === s && pattern[4] === s && pattern[6] === s)) {
            console.log("Diagonal match:")
            console.log(pattern)
            return true
    }
    // Keeps giving true and alert statement
    /* if(boxFull()) {
        alert("all boxes full")
    } */
    return false
}

// Always returns true
function boxFull() {
    let boxes = document.querySelectorAll(".box")
    boxes.forEach((box) => {
        if(box.innerText === "") {
            return false
        }
    })
    return true
}
