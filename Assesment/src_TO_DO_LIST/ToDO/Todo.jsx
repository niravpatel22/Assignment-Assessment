import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddToDo, DeleteToDo } from '../Actions/index';




function Todo() {

    const [inputvalue, setInputvalue] = useState('')

    const dispatch = useDispatch();

    const resultdata = useSelector((state) => state.listdata.list);
    console.log(resultdata);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <input type="text" className='form-control w-75' value={inputvalue} onChange={(e) => setInputvalue(e.target.value)} />

                        <button className='btn btn-primary' onClick={() => dispatch(AddToDo(inputvalue), setInputvalue(''))}>Add ToDo</button>



                        {resultdata.map((res) => {
                            console.log(res.data);
                            return (
                                <>
                                    <div className="d-flex mt-3 justify-content-between">
                                        <h3>{res.data}</h3>
                                        <button className="btn btn-danger" onClick={() => dispatch(DeleteToDo(res.id))}>Delete</button>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Todo