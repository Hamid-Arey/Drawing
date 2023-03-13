var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Background
ctx.fillStyle = "lightblue";
ctx.fillRect(0,0,300,300);

//text
ctx.fillStyle = "blue";
ctx.font = "30px Arial";
ctx.fillText("Winter World!", 10, 50);

//ground
ctx.fillStyle = "#FFF";
ctx.fillRect(0,260,300,40);

//bottom of tree
ctx.beginPath();
ctx.fillStyle = "brown";
ctx.fillRect(90, 229, 30, 50);

//bottomleaf
ctx.beginPath();
ctx.moveTo(100, 140);
ctx.lineTo(20, 230);
ctx.lineTo(190,230);
ctx.lineTo(100,140);
ctx.fillStyle = "#006A17";
ctx.fill();

//middleleaf
ctx.beginPath();
ctx.moveTo(100, 120);
ctx.lineTo(30, 195);
ctx.lineTo(180, 195);
ctx.lineTo(100, 120);
ctx.fillStyle = "#006A17";
ctx.fill();

//topleaf
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(50, 160);
ctx.lineTo(160, 160);
ctx.lineTo(100, 100);
ctx.fillStyle = "#006A17";
ctx.fill();

//Bottom Snowman
ctx.beginPath();
ctx.arc(250, 240, 40, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "#FFF";
ctx.fill();

//Middle Snowman
ctx.beginPath();  
ctx.arc(250, 180, 30, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "white";
ctx.fill();

//Head of the Snowman
ctx.beginPath();
ctx.arc(250, 140, 20, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "white";
ctx.fill();

//Left Eye
ctx.beginPath();
ctx.arc(245, 135, 2, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle="black";
ctx.fill();

//Right Eye
ctx.beginPath();
ctx.arc(255, 135, 2, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "black";
ctx.fill();

//top button
ctx.beginPath();
ctx.arc(250, 175, 2, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "black";
ctx.fill();

//middle button
ctx.beginPath();
ctx.arc(250, 200, 2, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "black";
ctx.fill();

//bottom button
ctx.beginPath();
ctx.arc(250, 230, 2, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "black";
ctx.fill();

//smile
ctx.beginPath();
ctx.arc(250, 145, 10, 0, 3);
ctx.stroke();
ctx.fillStyle = "black";
ctx.fill();

//nose
ctx.beginPath();
ctx.moveTo(249, 138);
ctx.lineTo(250, 142);
ctx.lineTo(270, 142);
ctx.lineTo(249, 138);
ctx.fillStyle = "orange";
ctx.fill();

//hat
ctx.beginPath();
ctx.moveTo(250, 90)
ctx.lineTo(230,130)
ctx.lineTo(270,130)
ctx.lineTo(250, 90)
ctx.stroke()
ctx.fillStyle = "red"
ctx.fill()

ctx.beginPath();
ctx.fillStyle = "white"
ctx.stroke()
ctx.fillRect(230, 120, 40, 10)

ctx.beginPath();
ctx.arc(250, 90, 3, 0, 2 * Math.PI);
ctx.stroke()
ctx.fillStyle = "white"
ctx.fill()
// red=F00 blue=00F green=0F0 yellow=FF0 
//https://www.w3schools.com/graphics/canvas_reference.asp