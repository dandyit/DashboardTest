import React from 'react';
import axios from 'axios';

export default class createEvent extends React.Component {
	state = {
		name: '',
		email: '',
		password: '',
		passwordConfirm: '',

		checkPrivacy: '',
		radioPolicy: 'yes',
		uploadFile: '',
		fruits: '',
		alphabates: '',
		numbers: '',
		message: '',
	}

	handleChange = event => {
		const value = 
		event.target.type === 'checkbox' ? event.target.checked
		: event.target.value;
		this.setState({
			...this.state,
			[event.target.name]: value
		});
		console.log(`${event.target.name } value: ${value}`);
	}
  
	handleSubmit = event => {
	  event.preventDefault();
	  const user = {
		name: this.state.name,
		email: this.state.email,
		password: this.state.password,
		passwordConfirm: this.state.passwordConfirm,

		checkPrivacy: this.state.checkPrivacy,
		radioPolicy: this.state.radioPolicy,
		uploadFile: this.state.uploadFile,
		numbers: this.state.numbers,
		fruits: this.state.fruits,
		alphabates: this.state.alphabates,
		message: this.state.message,
		
	  };

	//   const crossBrowser = `https://cors-anywhere.herokuapp.com/`;

	  const url = `http://192.168.1.22:3000/api/v1/users/login`;

	//   const url = `http://192.168.1.22:3000/api/v1/users/signup`;
	//   const url = `http://192.168.1.22:3000/api/v1/users/me`;

	  // axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
	//   axios.post(`${crossBrowser}${url}`, { user }
	  axios.post(`${url}`,user)
		.then(res => {
		  console.log(res);
		  console.log(res.data);
		  console.log(res.data.user);
		  console.log(res.user);
		})
	}
  
	render() {
	    return (
			<div className='createEvent'>
				<div className='box'>
					<form className='form' onSubmit={this.handleSubmit}>
                        <div className='form__group'>
							<input className='form__input' type="text" name="name" 
							value={this.name}
							onChange={this.handleChange} />
							<label className='form__label'>Full Name</label>
						</div>
                        <div className='form__group'>
							<input className='form__input' type="email" name="email" 
							value={this.email}
							onChange={this.handleChange} />
							<label className='form__label'>Email</label>
						</div>
                        <div className='form__group'>
							<input className='form__input' type="checkbox" name="checkPrivacy" 
							value={this.checkPrivacy}
							onChange={this.handleChange} />
							<label className='form__label'>checkPrivacy</label>
						</div>
                        <div className='form__group'>
							<input className='form__input' type="radio" 
							name="radioPolicy" 
							value='yes'
							checked = {this.radioPolicy === 'yes'}
							onChange={this.handleChange} />
							<label className='form__label'>radioPolicy</label>
						</div>
                        <div className='form__group'>
							<input className='form__input' type="file" 
							name="uploadFile" 
							value={this.uploadFile}
								onChange={this.handleChange} />
							<label className='form__label'>File Upload</label>
						</div>
						<div className='form__group'>
							<div className='form__box'>
								<select name='fruits' className="form__select form__select__size-2"
								value={this.fruits}
								onChange={this.handleChange}>
									<option>Type</option>
									<option value='apples'>Apples</option>
									<option value='bananas'>Bananas</option>
									<option value='grapes'>Grapes</option>
									<option value='oranges'>Oranges</option>
								</select>
								<select name='numbers' className="form__select form__select__size-2"
								value={this.numbers}
								onChange={this.handleChange}>
									<option>Type</option>
									<option value='1'>1</option>
									<option value='2'>2</option>
									<option value='3'>3</option>
									<option value='4'>4</option>
								</select>
								<select name='alphabates' className="form__select form__select__size-2"
								value={this.alphabates}
								onChange={this.handleChange}>
									<option>Type</option>
									<option value='a'>a</option>
									<option value='b'>b</option>
									<option value='c'>c</option>
									<option value='d'>d</option>
								</select>
							</div>
						</div>
                        <div className='form__group'>
							<textarea className='form__input' type="text" name="message"
								value={this.message}
								onChange={this.handleChange} ></textarea>
							<label className='form__label'>Message</label>
						</div>
                        <div className='form__group'>
							<input className='form__input' type="text" name="password"
								value={this.password}
								onChange={this.handleChange} />
							<label className='form__label'>Password</label>
						</div>
                        <div className='form__group'>
							<input className='form__input' type="text" name="passwordConfirm"
							value={this.passwordConfirm} 
							onChange={this.handleChange} />
							<label className='form__label'>Confirm Password</label>
						</div>
						<button className='btn' type="submit">Add</button>
					</form>
				</div>
			</div>
	    )
	}
  }