import React from "react";
var x=10;
function Increment()
{
    x++;
  alert(x);
}

function Decrement()
{
    x--;
    alert(x);
}

function Demo()
{
    return(
        <div >
            <button className="SButton" style={{
            padding:10,
            height:80,
            width:100,
            border:'10px solid red',
            borderRadius:10,
            justifyContent:"center"
        }} onClick={ Increment }>Increment</button><br/><br/>
            <button className="SButton" style={{
            padding:10,
            height:80,
            width:100,
            border:'10px solid blue',
            borderRadius:10,
            justifyContent:"center"
        }} onClick={Decrement}>Decrement</button>
        

        </div>

    )
}

export default Demo;