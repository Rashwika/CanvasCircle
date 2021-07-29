canvas= document.getElementById("canvas1");
pen= canvas.getContext("2d");
color= "crimson";
width=2;
 // circle (200,200); 
function circle(x,y){
    pen.beginPath();
    pen.strokeStyle=color;
    pen.lineWidth=width;
    pen.arc(x,y,40,0,2*Math.PI);
    pen.stroke();
}
canvas.addEventListener("mousedown", down);
function down(e){
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    circle(mouse_x,mouse_y);
}
function clear_area(){
    pen.clearRect(0,0,canvas.width,canvas.height);
}