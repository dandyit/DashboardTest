import React from 'react';

import {
    BrowserRouter as Router, Route, Link, useLocation 
  } from "react-router-dom";

import {
    StateMachineProvider, createStore 
  } from "little-state-machine";

import Step1 from "./stepForm/Step1";
import Step2 from "./stepForm/Step2";
import Result from "./stepForm/Result";

createStore({
  yourDetails: {
    firstName: "",
    lastName: "",
    age: "",
    yearsOfExp: ""
  }
});

const Pages = () => {
  const location = useLocation();
  return (
    <>
      <nav className="">
        <ul className="tabNav">
          <li id='tabNav__item' className={location.pathname === "/step1" ? "active" : ""}>
            <Link className='tabNav__link' className='tabNav__link' to="/step1">Step 1</Link>
          </li>
          <li id='tabNav__item' className={location.pathname === "/step2" ? "active" : ""}>
            <Link className='tabNav__link' to="/step2">Step 2</Link>
          </li>
          <li id='tabNav__item' className={location.pathname === "/result" ? "active" : ""}>
            <Link className='tabNav__link' to="/result">Result</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/step1" component={Step1} />
      <Route path="/step2" component={Step2} />
      <Route path="/result" component={Result} />
    </>
  );
};



const CustomImgCrop = ()=>{
  // const location = useLocation();

  return(

    <StateMachineProvider>
        < Router >
          <div className='customImgCrop'>
              <div className='box'>
                <Pages />
              </div>
          </div>

          </ Router >
    </StateMachineProvider>
  )
}


export default CustomImgCrop;