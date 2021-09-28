//Robot class contructor
// x is  x cordinate 
// y is  y cordinate 
//facing is robot facing direction
class Robot{
    constructor(x,y,facing){
    
    this.x=x
    this.y=y
    this.facing=facing
    }
    //When left command is given to the robot its changes the facing direction by 90 degree on left hand side.
    left(){
        if(this.facing==="NORTH"){
            this.facing="WEST"
        }
        else if (this.facing==="SOUTH"){
            this.facing="EAST"
        
        }
        else if (this.facing==="EAST"){
            this.facing="NORTH"
        
        }
        else if (this.facing==="WEST"){
            this.facing="SOUTH"
        
        }
    }

    //When right command is given to the robot its changes the facing direction by 90 degree on right hand side.
    right()
    {
        if(this.facing==="NORTH"){
            this.facing="EAST"
        }
        else if (this.facing==="SOUTH"){
            this.facing="WEST"
        
        }
        else if (this.facing==="EAST"){
            this.facing="SOUTH"
        
        }
        else if (this.facing==="WEST"){
            this.facing="NORTH"
        
        }
    }

    
    //When report command is given to the robot it print the output to the console with its current postion and facing direction
    report(){
        console.log(`${this.x},${this.y},${this.facing}`)
    }
    //The move command move robot by one cordinate in the facing direction.It makes sure that the robot does not fall of the table.
    move()
    {
        if((this.facing==="NORTH")&&(this.y!==5)){
            this.y+=1
        }
        else if((this.facing==="SOUTH")&&(this.y!==0)){
            this.y-=1
        
        }
        else if((this.facing==="EAST")&&(this.x!==5)){
            this.x+=1
        
        }
        else if((this.facing==="WEST")&&(this.x!==0)){
            this.x-=1
        
        }
    }
    
}


export default Robot




