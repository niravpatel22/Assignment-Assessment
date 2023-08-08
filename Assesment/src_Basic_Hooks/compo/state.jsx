import React, { Component } from 'react';

class state extends Component {
    constructor()
    {
        super()//always have to wrtite super keyword
        this.state = {fname:"Dev",lname:"Vasita", movie : "KGF"}
        // this.state = {fname:"Dev",lname:"Vasita"} when we overwrite value of state so 
        // it will take over write value
    }

    btnClick = () =>
    {
        console.log("Btn clicked");
        this.setState({fname:"Rahul",lname:"Chawda"})
    }


    render() {
        return (
          <>
        <div className="container">
            <div className="row">
                <div className="col bg-success border border-5 border-dark text-center">
                    <h1>{this.state.fname}</h1>
                    <h1>{this.state.lname}</h1>
                    

                    <button className='btn btn-info'onClick={this.btnClick}>Click ME</button>

                    <h2>{this.state.movie}</h2>

                <button className='btn btn-danger' onClick={()=>this.setState({movie:"KGF2"})}>Change Movie</button>

                </div>
            </div>
        </div>
          </>
        );
    }
}

export default state;

//Props: Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.

// State: The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.

// Props are used to pass data from one component to another.
// The state is a local data storage that is local to the component only and cannot be passed to other components.
// The this.setState property is used to update the state values in the component.