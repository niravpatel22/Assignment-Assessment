import React, { useReducer } from 'react';


const initialData = { count: 0 }

const initialAge = { age: 22 }

function Reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        case 'reset':
            return { count: state.count = 0 };
        default: return state;
    }
}

function Reducer2(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { age: state.age + 1 };
        case 'Reset':
            return { age: state.age = 22 }

        default: return state;
    }
}




function UseReducer(props) {

    const [state, dispatch] = useReducer(Reducer, initialData)

    const [state2, dispatch2] = useReducer(Reducer2, initialAge)

    return (
        <>
            <div className="container">
                <div className="row  mt-5 p-3 p-md-2 ">
                    <div className="col-lg-5 col-sm-12  bg-light border border-3 border-dark p-2 me-lg-auto ">

                        <h1 className='display-3  text-center text-danger'>Count : {state.count}</h1>

                        <div className='mt-2 text-center' >
                            <button className='btn btn-info mx-4' onClick={() => dispatch({ type: 'INCREMENT' })} >Increment</button>
                            <button className='btn btn-danger mx-4' onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
                            <button className='btn btn-warning mx-4' onClick={() => dispatch({ type: 'reset' })}>Reset</button>

                        </div>
                    </div>

                    <div className="col-lg-5 col-sm-12  mt-3 mt-lg-0  bg-light border border-3 border-dark p-2 ms-lg-auto ">

                        <h1 className='display-3 text-center text-danger'>Age : {state2.age}</h1>

                        <div className='mt-2 text-center '>
                            <button className='btn btn-info mx-4' onClick={() => dispatch2({ type: 'INCREMENT' })} >Increment</button>
                            <button className='btn btn-warning mx-4' onClick={() => dispatch2({ type: 'Reset' })}>Reset</button>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
}

export default UseReducer;






