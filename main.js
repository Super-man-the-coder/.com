canvas = document.getElementById("mycanvas");
color = "blue","black","red","yellow","green";
ctx= canvas.getContext("2d")
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.rect(150,143,430,200);
ctx.stroke(); 

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    
    mouse_x=e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = "+ mouse_x + " ,Y= "+ mouse_y);
    circle(mouse_x , mouse_y);

}

function circle()
{
    ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(250,210,40,0,2 * Math.PI);
ctx.strokeStyle = color;
ctx.arc(280,210,40,0,2 * Math.PI);
ctx.stroke();

}

   