import React, { Component, useEffect, useState } from 'react';

// first Import this file from react-router-dom (official website)
import {
  BrowserRouter as Router, //remove Create
  Routes, //remove Provider
  Route,
  Link,
} from "react-router-dom";
import Home from './Home';
import About from './About';
import State from './state';
import Lifecycle from './lifecycle';
import Compo from './compo';
import Api from './api.jsx';
import Usestate from '../Fuction_compo/01usestate';
import UseEffect from '../Fuction_compo/02UseEffect';
import FuncApi from '../Fuction_compo/03_API';
import UseRef from '../Fuction_compo/04_UseRef';
import StyledCompo from '../Fuction_compo/05StyledCompo';
import Reducer from '../Fuction_compo/06_Reducer';
import CreatContext from '../Fuction_compo/07_CreatContext'
import MyFormik from '../Fuction_compo/Formik';


function Navbar(props) {

  const returnData = { '/home': 'Home', '/about': 'About', '/state': 'State', '/lifecycle': 'Lifecycle', '/compo': 'Compo', '/api': 'API', '/usestate': 'Usestate', '/useeffect': 'UseEffect', '/funcApi': 'FuncAPI', '/useref': 'UseRef', '/styledCompo': 'StyledCompo', '/reducer': 'Reducer', '/creatcontext': 'CreatContext', '/myFormik': 'MyFormik' }

  const Mydata = Object.entries(returnData).map((res, i) => {
    console.log(res, i);
    return <li className="nav-item" key={i}>
      <Link className="nav-link " aria-current="page" to={res[0]}>{res[1]}</Link>
    </li>
  })

  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2000);
  })




  return (
    <>
      {loader ?
        <>
          <div class="position-absolute top-50 start-50 translate-middle">
            <div className="d-flex justify-content-center  align-items-center " >
              <div className="spinner-border text-info" role="status" style={{ height: "5rem", width: "5rem" }}>
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </>

        :


        <>
          <Router>
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">

                    {Mydata}
                  </ul>
                </div>
              </div>
            </nav>
            <Routes>
              <Route path='/home' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/state' element={<State />}></Route>
              <Route path='/lifecycle' element={<Lifecycle />}></Route>
              <Route path='/compo' element={<Compo />}></Route>
              <Route path='/api' element={<Api />}></Route>
              <Route path='/usestate' element={<Usestate />}></Route>
              <Route path='/useeffect' element={<UseEffect />}></Route>
              <Route path='/funcAPI' element={<FuncApi />}></Route>
              <Route path='/useref' element={<UseRef />}></Route>
              <Route path='/styledCompo' element={<StyledCompo />}></Route>
              <Route path='/reducer' element={<Reducer />}></Route>
              <Route path='/creatContext' element={<CreatContext />}></Route>
              <Route path='/myFormik' element={<MyFormik />}></Route>



            </Routes>
          </Router>

        </>



      }

    </>
  );
}

export default Navbar;