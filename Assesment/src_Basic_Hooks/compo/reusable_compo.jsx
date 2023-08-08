import React, { Component } from 'react';

class reusable_compo extends Component {
    render() {
        return (
           <>
           <div className="card text-center">
                        <img src={this.props.imgSrc} alt="black T-shirt" />
                        <div className="card-body">
                            <h3>{this.props.title}</h3>
                            <div>
                                <span>Old Price: $<del>{this.props.oldPrice}</del></span>
                                <br />
                                <span>New Price :${this.props.newPrice} </span>
                            </div>
                            <button className='btn btn-info mt-2'>Buy Now</button>
                        </div>
                    </div>
           </>
        );
    }
}

export default reusable_compo;