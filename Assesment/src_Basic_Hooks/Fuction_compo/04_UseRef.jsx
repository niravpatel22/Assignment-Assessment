import React, { useRef } from 'react';


//if want to get any particular data


function UseRef(props) {

    const ref = useRef(0)
    const inputRef = useRef();
    

    const btnClick = () =>{
        console.log(ref.current);
        ref.current = ref.current + 1
        // alert ("You Have Clicked " + ref.current + " Times")
        console.log(inputRef.current.value);
        if(inputRef.current.value == "")
        {
            inputRef.current.focus();
            alert("please Enter Data");
        }

        
    }

    return (
       <>
       <div className="container">
        <div className="row">
            <div className="col">
                <input type="text" ref={inputRef}/>
                <button className='btn-lg btn-info mt-5' onClick={btnClick}>Click Me</button>
            </div>
        </div>
       </div>
       </>
    );
}

export default UseRef;