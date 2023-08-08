import React, { Component } from 'react';
import PropTypes from 'prop-types';

class lifecycle extends Component {
    constructor(props) {
        super(props);
        // console.log("constructor Called");
        this.state = { counter: 0 }

    }

    // componentWillMount() {
    //     console.log("componentWillMount");
    // }

    componentDidMount() {

        // setTimeout(() => {
        //     console.log("componentDidMount called");
        // }, 3000);
        console.log("componentDidMount called");
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log("componentWillReceiveProps");
    // }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log("shouldComponentUpdate");
        // console.log("nextstate", nextState);
        return true;
    }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log("componentWillUpdate");
    // }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        console.log("prevstate", prevState);
        // console.log("prevProps", prevProps);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    btnClick = () => {
        // console.log("button called");
        this.setState({ counter: this.state.counter + 1 })
    }

    render() {
        console.log("Render ");

        return (
            <>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <button className='btn btn-danger' onClick={() => this.setState({ counter: this.state.counter - 1 })}> Decrement</button>

                            <h1>{this.state.counter}</h1>

                            <button className='btn btn-success' onClick={this.btnClick}>Increment</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}



export default lifecycle;