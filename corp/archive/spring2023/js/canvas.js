var canvas=document.querySelector("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var COL_SELECT=["#E85E4A","#FFF9DA","#79C2AA","#608096"];
var maxRadius=40;

var c=canvas.getContext("2d");

var mouse = {x: undefined, y: undefined}

window.addEventListener("resize", function(event) {
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
});
window.addEventListener("mousemove", function(event) {
    mouse.x=event.x;
    mouse.y=event.y;
});

function Circle(x, y, dx, dy, radius, index) {
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    this.minRadius=radius;
    this.index=index;
    this.draw=function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        //c.strokeStyle=COL_SELECT[index];
        c.fillStyle=COL_SELECT[index];
        //c.stroke();
        c.fill();
    }
    this.update=function() {
        if(Math.abs(this.x-mouse.x)<50 && Math.abs(this.y-mouse.y)<50) {
            if(this.radius<maxRadius){this.radius+=1;}
        }
        else if(this.radius>this.minRadius) {
            this.radius-=1;
        }
        if(this.x+this.radius>window.innerWidth || this.x-this.radius<0) {
            this.dx=-this.dx;
        }
        if(this.y+this.radius>window.innerHeight || this.y-this.radius<0) {
            this.dy=-this.dy;
        }
        this.x+=this.dx;
        this.y+=this.dy;
        this.draw();
    }
}

var circleArray=[];
for(var i=0; i<500; i++) {
    
    var randRadius=Math.random()*3+2;
    var randX=Math.random()*(window.innerWidth-2*randRadius)+randRadius;
    var randY=Math.random()*(window.innerHeight-2*randRadius)+randRadius;
    var randDX=(Math.random()-0.5)*4;
    var randDY=(Math.random()-0.5)*4;
    var randCol=Math.floor(Math.random()*COL_SELECT.length);
    
    circleArray.push(new Circle(randX, randY, randDX, randDY, randRadius, randCol));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,window.innerWidth, window.innerHeight);
    //c.fillStyle="#363636";
    //c.fillRect(0,0,window.innerWidth,window.innerHeight);
    for(var i=0; i<circleArray.length; i++) {
        circleArray[i].update();
    }
    
}

animate();