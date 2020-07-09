import React from 'react';
import axios from 'axios';

export default class createEvent extends React.Component {
	state = {
		"name": "",
		"email": "",
		"password": "",
		"passwordConfirm": ""
	}
  
	handleChange = event => {
	  	this.setState({ 
			name: event.target.value,
			email: event.target.value,
			password: event.target.value,
			passwordConfirm: event.target.value,
		});
		
	}
  
	handleSubmit = event => {
	  event.preventDefault();
	  // const user = {
	  const Event = {
		name: this.state.name,
		email: this.state.email,
		password: this.state.password,
		passwordConfirm: this.state.passwordConfirm,
	  };
	  
	  const crossBrowser = `https://cors-anywhere.herokuapp.com/`;
	  const url = `http://192.168.1.22:3000/api/v1/users/login`;

	  // axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
	  axios.post(`${crossBrowser}${url}`, { Event },
	  {header: 'Access-Control-Allow-Origin'})
		.then(res => {
		  console.log(res);
		  console.log(res.data);
		})
	}
  
	render() {
	    return (
			<div className='createEvent'>
				<div className='box'>
					<form className='form' onSubmit={this.handleSubmit}>
                        <div className='form__group'>
                            <input className='form__input' type="text" name="name" onChange={this.handleChange} />
							<label className='form__label'>Full Name</label>
						</div>
                        <div className='form__group'>
                            <input className='form__input' type="email" name="email" onChange={this.handleChange} />
							<label className='form__label'>Email</label>
						</div>
                        <div className='form__group'>
                            <input className='form__input' type="text" name="password" onChange={this.handleChange} />
							<label className='form__label'>Password</label>
						</div>
                        <div className='form__group'>
                            <input className='form__input' type="text" name="passwordConfirm" onChange={this.handleChange} />
							<label className='form__label'>Confirm Password</label>
						</div>
						<button className='btn' type="submit">Add</button>
					</form>
				</div>
			</div>
	    )
	}
  }