import React from "react";
import './App.scss';
import {BrowserRouter as Router, Route,} from "react-router-dom";
import {StateMachineProvider} from "little-state-machine";
// import { DevTool } from 'little-state-machine-devtools';
import Profile from  './components/Profile';
import CreateEvent from './components/CreateEvent';
import NavbarLeft from './components/NavbarLeft';
import TopNavbar from './components/TopNavbar';
import ViewEvent from './components/ViewEvent';
import FormInput from './components/FormInput';
import PopUp from './components/PopUp';
import FormStepper from './components/FormStepper';
import Graphs from './components/Graphs';
import Sells from './components/Sells';
import Revenue from './components/Revenue';
import CustomImgCrop from './components/CustomImgCrop';
import FetchData from './components/FetchData';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import DragCropImg from './components/DragCropImg';
import Mailer from './components/emailSender/Mailer';
import Tickets from './components/Tickets';


const TicketsPage = ()=>{
	return(
		<Tickets />
	)
}
const MailerPage = ()=>{
	return(
		<Mailer />
	)
}
const DragCropImgPage = ()=>{
	return(
		<DragCropImg />
	)
}
const SignUpPage = ()=>{
	return(
		<SignUp />
	)
}
const LoginPage = ()=>{
	return(
		<Login />
	)
}
const ForgotPasswordPage = ()=>{
	return(
		<ForgotPassword />
	)
}
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
const RevenuePage = ()=>{
	return(
		<Revenue />
	)
}
const SellsPage = ()=>{
	return(
		<Sells />
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
const ProfilePage = ()=>{
	return(
		<Profile />
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
						<Route exact path='/Profile' component = {ProfilePage} />
						<Route exact path='/CreateEvent' component = {CreateEventPage} />
						<Route path='/ViewEvent' component = {ViewEventPage} />
						<Route path='/FormInput' component = {FormInputPage} />
						<Route path='/popUp' component= {PopUpPage} />
						<Route path='/FormStepper' component= {FormStepperPage} />
						<Route path='/Graphs' component= {GraphsPage} />
						<Route path='/Sells' component= {SellsPage} />
						<Route path='/Revenue' component= {RevenuePage} />
						<Route path='/CustomImgCropPage' component= {CustomImgCropPage} />
						<Route path='/FetchData' component= {FetchDataPage} />
						<Route path='/Login' component= {LoginPage} />
						<Route path='/SignUp' component= {SignUpPage} />
						<Route path='/ForgotPassword' component= {ForgotPasswordPage} />
						<Route path='/DragCropImg' component= {DragCropImgPage} />
						<Route path='/Mailer' component= {MailerPage} />
						<Route path='/Tickets' component= {TicketsPage} />
					</div>
				</div>
			</ Router >
		</StateMachineProvider>
    )
  }
}

export default App;
