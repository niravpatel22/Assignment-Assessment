import React, { useState } from 'react';
// import {useState} from 'react';


function Usestate(props) {

    const [name,setName] = useState("Tops");

    const [author,setAuthor] = useState("Chetan Bhagat")

    const btnClick = () =>{
        console.log("clicked");
        setName("react Class")
    }

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{name}</h1>
                    <button className='btn btn-info' onClick={btnClick}>Click</button>
                    <h2>{author}</h2>
                    <button className='btn btn-danger'onClick={()=>setAuthor('Chetan')}> Click</button>
                </div>
            </div>
        </div>
        
        </>
    );
}

export default Usestate;