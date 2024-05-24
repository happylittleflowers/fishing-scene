// Canvas Fishing Scene

// Setup canvas
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// Animation variables
let cloud1X = 50;
let cloud1Y = 40;
let cloud2X = 150;

let sunY = 50;

let skyR = 173;
let skyG = 216;
let skyB = 230;

let fish1X = 220;
let fish1Xspeed = 1;

// Triggers the start of the animation
requestAnimationFrame(draw);

// Put ALL drawing code in the draw function
function draw() {
  // sky
  ctx.fillStyle = `rgb(${skyR}, ${skyG}, ${skyB})`;
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // sun
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(75, sunY, 20, 0, 2 * Math.PI);
  ctx.fill();

  // clouds
  let cloud = document.getElementById("cloud");
  ctx.drawImage(cloud, cloud1X, cloud1Y, 75, 50);
  ctx.drawImage(cloud, cloud2X, 10, 75, 50);
  ctx.drawImage(cloud, 250, 50, 75, 50);

  // Water
  ctx.beginPath();
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 250, cnv.width, 250);

  // fishhead 1
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(fish1X, 300, 10, 0, 2 * Math.PI);
  ctx.fill();

  // fishhead 2
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(300, 325, 10, 0, 2 * Math.PI);
  ctx.fill();

  // fishtail 1
  ctx.beginPath();
  ctx.moveTo(220, 300);
  ctx.lineTo(240, 290);
  ctx.lineTo(240, 310);
  ctx.fill();

  // fishtail 2
  ctx.beginPath();
  ctx.moveTo(300, 325);
  ctx.lineTo(320, 315);
  ctx.lineTo(320, 335);
  ctx.fill();

  // Pier and posts
  ctx.beginPath();
  ctx.fillStyle = "brown";
  ctx.fillRect(0, 200, 250, 25);

  // loop the 4 posts
  for (let i = 5; i <= 155; i += 50) {
    ctx.fillRect(i, 150, 10, 350);
  }

  // fisherperson
  // head
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(250, 140, 15, 0, 2 * Math.PI);
  ctx.stroke();

  // torso
  ctx.beginPath();
  ctx.moveTo(248, 155);
  ctx.lineTo(243, 195);
  ctx.stroke();

  // upper leg
  ctx.beginPath();
  ctx.moveTo(243, 195);
  ctx.lineTo(265, 205);
  ctx.stroke();

  // lower leg
  ctx.beginPath();
  ctx.moveTo(265, 205);
  ctx.lineTo(270, 230);
  ctx.stroke();

  // arm
  ctx.beginPath();
  ctx.moveTo(246, 170);
  ctx.lineTo(280, 180);
  ctx.stroke();

  // fishing pole
  ctx.strokeStyle = "gray";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(275, 190);
  ctx.lineTo(350, 100);
  ctx.stroke();

  // fishing lineTo
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(350, 100);
  ctx.lineTo(350, 300);
  ctx.stroke();

  // ANIMATION
  cloud1X = cloud1X + 1;
  cloud2X += 3;

  // When cloud1 exits the RIGHT side of the canvas, move it to the LEFT side of the canvas
  if (cloud1X >= 400) {
    cloud1X = -75;

    // Reappear at a random height
    cloud1Y = Math.random() * 150;
  }

  // Sun sets and stops under the pier
  if (sunY <= 250) {
    sunY = sunY + 1; // or sunY++
  }

  // Blue Sky Color: rgb(173, 216, 230)
  // Sunset Color: rgb(255,165,0)

  if (skyR <= 255) {
    skyR++;
  }

  if (skyG >= 165) {
    skyG--;
  }

  if (skyB >= 0) {
    skyB--;
  }

  // Fishhead back and forth
  fish1X = fish1X + fish1Xspeed;

  if (fish1X >= 350) {
    fish1Xspeed = -1;
  }

  if (fish1X <= 150) {
    fish1Xspeed = 1;
  }

  requestAnimationFrame(draw);
}

// Keyboard handler
document.addEventListener("keypress", keyboardHandler);
function keyboardHandler(event) {
  if (event.code == "KeyT") {
    console.log("You pressed the T key!!");
    poleColor = "purple";
  }
}
