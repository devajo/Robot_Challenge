import myRobot from './Robot.mjs'
import fs from 'fs'
import os from 'os'
import { clearScreenDown } from 'readline'

fs.readFile('input.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  //ARRAY TO STORE ELEMENT OF THE INPUT FILE BASED ON CARRIAGE RETURN
  let temp=data.split(os.EOL)
  // ARRAY TO STORE FILTER COMMANDS WHICH ARE VALID
  let arr=[]
  // regex to check the pattern for place command
  let re=/PLACE\s[0-5],[0-5],NORTH|SOUTH|WEST|EAST/
  for(let i=0;i<temp.length;i++)
{
    if(re.test(temp[i])===true)
    {
      arr.push(temp[i])
    }
    if((temp[i]==="MOVE")||(temp[i]==="LEFT")||(temp[i]==="RIGHT")||(temp[i]==="REPORT"))
        {
            arr.push(temp[i])
        }
  
}


for(let j=0;j<arr.length;j++)
{
  //regex TO TEST THE COMMAND- PLACE 0,0,NORTH
  let regex=/PLACE\s[0-5],[0-5],NORTH|SOUTH|WEST|EAST/
  
  if(regex.test(arr[j])===true)
  {
    var abc=new myRobot(parseInt(arr[j].slice(6,7)),parseInt(arr[j].slice(8,9)),arr[j].slice(10))
    
  }
  if(arr[j]==="MOVE")
  {
    
    abc.move()  
    
   
  }

  if(arr[j]==="LEFT"){
    abc.left()
  }

  if(arr[j]==="RIGHT"){
    abc.right()
  }

  if(arr[j]==="REPORT"){
    abc.report()
  }    
 
  
}
})