import React, { useEffect, useState } from 'react';

function UseEffect(props) {

    const [var_a,setvar_a] = useState(0)
    const[var_b,setvar_b] = useState(10)
    const[name,setName] = useState("tops")

    const click = () => {
        console.log("Btn called");
        setvar_a(20)
        setvar_b(30)
        setName("techonologies")
    }

    useEffect( () => {
        setTimeout(() => {
            console.log("useEffect called");
        }, 2000);
    })

    return (
       <>
    <div className="container">
        <div className="row">
            <div className="col">
                <h1>{var_a+var_b}</h1>
                <h2>{name}</h2>
                <button className='btn-lg btn-info' onClick={click}>Click Me</button>        
            </div>
        </div>
    </div>
       </>
    );
}

export default UseEffect;

//The  useState hook is a special function that takes the initial state as an argument and returns an array of two entries.  UseState encapsulate only singular value from the state, for multiple state need to have useState calls.


//useEffect is a tool that lets us interact with the outside world but not affect the rendering or performance of the component that it's in.
