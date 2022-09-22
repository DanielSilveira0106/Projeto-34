class ground {
constructor(x,y,w,h) {

var options={isStatic:true};

this.body = Bodies.rectangle(x, y, w, h, options);

this.x = x;
this.y = y;
this.h = h;
this.w = w;

World.add(world,this.body);
}
display() {

    var position = this.body.position
    fill("red")
    push()
    rectMode(CENTER)
    rect(position.x,position.y,this.w,this.h);
    
    
    pop()
    
    
    }


}