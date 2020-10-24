class dustbin
{
    constructor(x,y,w,h)
    {
        var bin_options =
        {
            isStatic:true
        }
    
        this.bin = Bodies.rectangle(x,y,w,h, bin_options);
        this.w = w;
        this.h = h;
        this.image = loadImage("Images/dustbingreen.png")
        World.add(world,this.bin);
    }
    display()
    {
        push();
      
        stroke ("white")
        strokeWeight(5)
        fill(255);
        rect(this.bin.position.x, this.bin.position.y, this.w, this.h);
        image(this.image,this.bin.position.x,this.bin.position.y,this.w,this.h)
        pop();
    }
}