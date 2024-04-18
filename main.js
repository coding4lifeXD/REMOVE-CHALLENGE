// MODIFIED ARRAY VISUALIZER

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let myArray =  [400, 200, 200, 400, 200, 200, 200, 400, 200, 200, 200, 200, 400];
let adjustedArray = [400, 200, 200, 400, 200, 200, 200, 400, 200, 200, 200, 200, 400]
let amountElToAdd = 100
for (let i = 0; i < amountElToAdd; i++) {
    if (i % 2 === 0) {
        myArray.push(200)
    }
    else {
        myArray.push(400)
    }
}
console.log(myArray)


// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic
    let barWidth = cnv.width / adjustedArray.length;

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Bar Graph
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "grey";
    for (let i = 0; i < adjustedArray.length; i++) {
        ctx.fillRect(i * barWidth, cnv.height - adjustedArray[i], barWidth, adjustedArray[i]);
        ctx.strokeRect(i * barWidth, cnv.height - adjustedArray[i], barWidth, adjustedArray[i]);        
    }
    

    // Request another Animation Frame
    requestAnimationFrame(draw);
}


document.addEventListener("keydown", keydownHandler)

function keydownHandler(e) {
    if (e.code == "Digit1") {
       adjustedArray = myArray.filter(item => item === 400)
    }
    else if (e.code == "Digit2") {
        adjustedArray = myArray.filter(item => item === 200)

    }
}