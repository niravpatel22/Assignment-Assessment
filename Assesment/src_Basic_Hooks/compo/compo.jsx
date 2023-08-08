// Higher order Components 
// ===>Higher-order components or HOC is the advanced method of reusing the component functionality logic. It simply takes the original component and returns the enhanced component.

import React, { Component } from 'react';
import Reuse from './reusable_compo';

class compo extends Component {
    render() {
        return (
          <>
          <div className="container">
            <div className="row mt-5">
                <div className="col-3">
                    {/* <div className="card text-center">
                        <img src="images/black.jpg" alt="black T-shirt" />
                        <div className="card-body">
                            <h3>Black T-SHirt</h3>
                            <div>
                                <span>Old Price: $<del>500</del></span>
                                <br />
                                <span>New Price : 400 </span>
                            </div>
                            <button className='btn btn-info'>Buy NOw</button>
                        </div>
                    </div> */}
                 <Reuse imgSrc="images/black.jpg" title="Black T-Shirt" oldPrice="500" newPrice="400" />   
                </div>

                <div className="col-3">
                <Reuse imgSrc="images/blue.jpg" title="Blue T-Shirt" oldPrice="600" newPrice="500" /> 
                </div>

                <div className="col-3">
                <Reuse imgSrc="images/red.jpg" title="Red T-Shirt" oldPrice="500" newPrice="400" /> 
                </div>

                <div className="col-3">
                <Reuse imgSrc="images/green.jpg" title="Green T-Shirt" oldPrice="500" newPrice="400" />   
                </div>
            </div>
          </div>
          </>
        );
    }
}

export default compo;