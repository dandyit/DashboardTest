import React from "react";

import {
  BrowserRouter as Router, Route, Link, useLocation 
} from "react-router-dom";
import {
  StateMachineProvider, createStore 
} from "little-state-machine";
import { DevTool } from 'little-state-machine-devtools';
import './App.scss';
import CreateEvent from './components/CreateEvent';
import NavbarLeft from './components/NavbarLeft';
import TopNavbar from './components/TopNavbar';
import ViewEvent from './components/ViewEvent';
import FormInput from './components/FormInput';
import PopUp from './components/PopUp';
import FormStepper from './components/FormStepper';
import Graphs from './components/Graphs';
import LineChart from './components/LineChart';
import CustomImgCrop from './components/CustomImgCrop';
import FetchData from './components/FetchData';


import Step1 from "./components/stepForm/Step1";
import Step2 from "./components/stepForm/Step2";
import Result from "./components/stepForm/Result";
import  "./components/stepForm/style.css";

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
      <nav className="container">
        <ul className="steps">
          <li className={location.pathname === "/step1" ? "active" : ""}>
            <Link to="/step1">Step 1</Link>
          </li>
          <li className={location.pathname === "/step2" ? "active" : ""}>
            <Link to="/step2">Step 2</Link>
          </li>
          <li className={location.pathname === "/result" ? "active" : ""}>
            <Link to="/result">Result</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/step1" component={Step1} />
      <Route path="/step2" component={Step2} />
      <Route path="/result" component={Result} />
    </>
  );
};



const FetchDataPage = ()=>{
	return(
		<FetchData />
	)
}
const CustomImgCropPage = ()=>{
	return(
		<CustomImgCrop />
	)
}
const LineChartPage = ()=>{
	return(
		<LineChart />
	)
}
const GraphsPage = ()=>{
	return(
		<Graphs />
	)
}
const FormStepperPage = ()=>{
	return(
		<FormStepper />
	)
}
const CreateEventPage = ()=>{
	return(
		<CreateEvent />
	)
}
const ViewEventPage = ()=>{
	return(
        <ViewEvent />
	);
}
const FormInputPage = ()=>{
	return(
		<FormInput />
	)
}

const PopUpPage = ()=>{
	return(
		<PopUp />
	)
}


class App extends React.Component{

  render(){
    return(
	<StateMachineProvider>
			< Router >
				<div className = 'App'>
					<div  className='container'>
						<NavbarLeft />
						<TopNavbar />
		{/* <DevTool /> */}
						
						{/* <Pages /> */}

						<Route exact path='/CreateEvent' component = {CreateEventPage} />
						<Route path='/ViewEvent' component = {ViewEventPage} />
						<Route path='/FormInput' component = {FormInputPage} />
						<Route path='/popUp' component= {PopUpPage} />
						<Route path='/FormStepper' component= {FormStepperPage} />
						<Route path='/Graphs' component= {GraphsPage} />
						<Route path='/LineChart' component= {LineChartPage} />
						<Route path='/CustomImgCropPage' component= {CustomImgCropPage} />
						<Route path='/FetchData' component= {FetchDataPage} />
					</div>
				</div>
			</ Router >
	</StateMachineProvider>
    )
  }
}

export default App;
