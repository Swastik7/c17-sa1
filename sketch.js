var B;



function setup() 
{
createCanvas(400, 400);

B=new Box(100,100,20,10,2,1);

}

function draw() 
{
background(220);
B.move();
B.show();
}

