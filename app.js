const express = require('express');

const app = express();


function circle(radius)
{   
    this.radius = radius;
    const area =  Math.PI * this.radius * this.radius;
    return area;
}
const a =  circle(3);
console.log(`Area : ${a.toFixed(2)}`);



app.listen(3000,()=>{
    console.log(`App startes on port 3000`)
})