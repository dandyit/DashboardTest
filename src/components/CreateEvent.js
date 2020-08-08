import React from 'react';
import axios from 'axios';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
	title: Yup.string()
		.required('Title is required'),
	firstName: Yup.string()
		.required('First Name is required'),
	lastName: Yup.string()
		.required('Last Name is required'),
	email: Yup.string()
		.email('Email is invalid')
		.required('Email is required'),
	password: Yup.string()
		.min(6, 'Password must be at least 6 characters')
		.required('Password is required'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Passwords must match')
		.required('Confirm Password is required'),
	acceptTerms: Yup.bool()
		.oneOf([true], 'Accept Terms & Conditions is required')
});

export default class createEvent extends React.Component {
	state = {
		name: '',
		email: '',
		password: '',
		passwordConfirm: '',

	// 	checkPrivacy: '',
	// 	radioPolicy: 'yes',
	// 	uploadFile: '',
	// 	fruits: '',
	// 	alphabates: '',
	// 	numbers: '',
	// 	message: '',
	// }
	// name: '',
	eventType:'',
	eventCategory: '',
	tags:[],
	city: '',
	// country: '',
	states: '',
	startDate: '',
	endDate: '',

	bookingStarts: '',
	bookingEnds: '',

	description: '',
	attraction: '',
	summary: '',
	editor: '',
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

		// name: this.state.name,
		// email: this.state.email,
		// password: this.state.password,
		// passwordConfirm: this.state.passwordConfirm,

	// 	checkPrivacy: this.state.checkPrivacy,
	// 	radioPolicy: this.state.radioPolicy,
	// 	uploadFile: this.state.uploadFile,
	// 	numbers: this.state.numbers,
	// 	fruits: this.state.fruits,
	// 	alphabates: this.state.alphabates,
	// 	message: this.state.message,
		
	
		name: this.state.name,
		eventType: this.state.eventType,
		eventCategory: this.state.eventCategory,
		city: this.state.city,
		country: this.state.country,
		states: this.state.states,

		startDate: this.state.startDate,
		endDate: this.state.endDate,
		bookingStarts: this.state.bookingStarts,
		bookingEnds: this.state.bookingEnds,
		description: this.state.description,
		attraction: this.state.attraction,
		summary: this.state.summary,
		editor: this.state.editor,
		
	  };

	//   const crossBrowser = `https://cors-anywhere.herokuapp.com/`;

	//   const urlAddEvents = `https://ticketviral.com/api/v1/events`;
	  const urlAddEvents = `http://192.168.1.22:3000/api/v1/events`;
	//   const urlLogin = `http://192.168.1.22:3000/api/v1/users/login`;
	  const urlLogin = `https://ticketviral.com/api/v1/users/login`;
	  const urlSignup = `https://ticketviral.com/api/v1/users/signup`;

	//   const url = `http://192.168.1.22:3000/api/v1/users/signup`;
	  const urlMe = `http://192.168.1.22:3000/api/v1/users/me`;

	//   axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
	//   axios.post(`${crossBrowser}${url}`, { user }

	//   axios.post(`${url}`,user)
		// .then(res => {
		//   console.log(res);
		//   console.log(res.data);
		//   console.log(res.data.user);
		//   console.log(res.user);
		// })

		
	// }


////////////////////////////////////////////

// const urlLogin = `http://localhost:3000/api/v1/users/login`;
// const urlMe = `http://localhost:3000/api/v1/users/me`;

function testAPI(){
    let session = JSON.parse(sessionStorage.getItem('myData'));
    console.log(session);
    fetch(`${urlMe}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    }).then((res)=>{
      return res.json();
    }).then((data)=>{
      console.log(data);
    });
  }

  function login(){
    // let data = {email: 'arnab@gmail.com', password: 'arnab@1234'};
    
    fetch(`${urlLogin}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
	  body: `email=${user.email}&password=${user.password}`
	//   body: `name=${user.name}&email=${user.email}&password=${user.password}&passwordConfirm=${user.passwordConfirm}`
    }).then((res)=>{
      return res.json();
    }).then((data)=>{
      console.log(data);
      sessionStorage.setItem('myData', JSON.stringify(data.token));
    }).catch((err)=>{
      console.log(err);
    })

  }

//   function PostEventData(){
    // let data = {email: 'arnab@gmail.com', password: 'arnab@1234'};
    
    fetch(`${urlAddEvents}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
	//   body: `email=${user.email}&password=${user.password}`
	body: new URLSearchParams(user)
    }).then((res)=>{
      return res.json();
    }).then((data)=>{
      console.log(data);
      sessionStorage.setItem('myData', JSON.stringify(data.token));
    }).catch((err)=>{
      console.log(err);
    })

//   }


	}

// //////////////////////////////////////////

  
	render() {
	    return (
			<div className='createEvent'>
				<div className='box'>
					<form className='form' onSubmit={this.handleSubmit} validationschema={validationSchema}>
                        {/* <div className='form__group u-margin-bottom-small'>
							<input className='form__input' type="text" name="name" 
							value={this.name}
							onChange={this.handleChange} />
							<label className='form__label'>Full Name</label>
						</div>
                        <div className='form__group u-margin-bottom-small'>
							<input className='form__input' type="email" name="email" 
							value={this.email}
							onChange={this.handleChange} />
							<label className='form__label'>Email</label>
						</div>
                        <div className='form__group u-margin-bottom-small'>
							<input className='form__input' type="checkbox" name="checkPrivacy" 
							value={this.checkPrivacy}
							onChange={this.handleChange} />
							<label className='form__label'>checkPrivacy</label>
						</div>
                        <div className='form__group u-margin-bottom-small'>
							<input className='form__input' type="radio" 
							name="radioPolicy" 
							value='yes'
							checked = {this.radioPolicy === 'yes'}
							onChange={this.handleChange} />
							<label className='form__label'>radioPolicy</label>
						</div>
                        <div className='form__group u-margin-bottom-small'>
							<input className='form__input' type="file" 
							name="uploadFile" 
							value={this.uploadFile}
								onChange={this.handleChange} />
							<label className='form__label'>File Upload</label>
						</div>
						<div className='form__group u-margin-bottom-small'>
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
                        <div className='form__group u-margin-bottom-small'>
							<textarea className='form__input' type="text" name="message"
								value={this.message}
								onChange={this.handleChange} ></textarea>
							<label className='form__label'>Message</label>
						</div>
                        <div className='form__group u-margin-bottom-small'>
							<input className='form__input' type="text" name="password"
								value={this.password}
								onChange={this.handleChange} />
							<label className='form__label'>Password</label>
						</div>
                        <div className='form__group u-margin-bottom-small'>
							<input className='form__input' type="text" name="passwordConfirm"
							value={this.passwordConfirm} 
							onChange={this.handleChange} />
							<label className='form__label'>Confirm Password</label>
						</div>
                        <div className='form__group u-margin-bottom-small'>
						<button className='btn btn--blue form__input' type="submit">Login</button>
						</div> */}
                        {/* <div className='form__group u-margin-bottom-small'>
						<button className='btn btn--blue form__input' type="submit">Get Data</button>
						</div>
                        <div className='form__group u-margin-bottom-small'>
						<button className='btn btn--blue form__input' type="submit">Me</button>
						</div> */}

                        <div className='form__icon'>
                            <i  className='form__icon--box' data-spec="icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 2v3h1V3h5v10H6v1h5v-1H9V3h5v2h1V2H2z"></path>
                                    <g fill-rule="evenodd" clip-rule="evenodd"><path d="M15 9h7v1h-7zM15 13h7v1h-7zM6 17h16v1H6zM6 21h16v1H6z">
                                    </path>
                                    </g>
                                </svg>
                                {/* Person Icon */}
                                {/* <svg viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.2 19.1c1-2.8 3.7-4.7 6.7-4.7s5.7 1.9 6.7 4.7c-4.1 2.5-9.3 2.5-13.4 0zm16.1-1.9c-.5.5-1.1 1-1.7 1.5a8.15 8.15 0 0 0-7.6-5.2c-3.3 0-6.3 2.1-7.6 5.1-.6-.4-1.1-.9-1.6-1.4l-.8.7C4.8 20.6 8.4 22 12 22s7.2-1.4 10-4.1l-.7-.7zM12 2C9.2 2 7 4.2 7 7s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 9c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path></svg> */}
                            </i>
                            <h3 className='heading-3 heading-3--dark-2'>Basic Event Info</h3>
                            <p className='para para--size-11'>
                                Name your event and tell event-goers why they should come. Add details that highlight what makes it unique.
                            </p>
                            <div className='form__group'>
                                <input className='form__input' type='text' name='name' id='name'
                                    value={this.name}
                                    onChange={this.handleChange}
                                />
                                <label htmlFor='name' className='form__label'>Event Name*</label>
                            </div>
                            <div className='form__group'>
                                <div className='form__box-2'>
                                    <select name='eventType' className="form__select form__select__size-2"
                                        value={this.eventType}
                                        onChange={this.handleChange}>
                                        <option>Event Type</option>
                                        <option value='eventType1'>eventType 1</option>
                                        <option value='eventType2'>eventType 2</option>
                                        <option value='eventType3'>eventType 3</option>
                                        <option value='eventType4'>eventType 4</option>
                                    </select>
                                    <select name='eventCategory' className="form__select form__select__size-2"
                                        value={this.eventCategory}
                                        onChange={this.handleChange}>
                                        <option>Category</option>
                                        <option value='eventCategory1'>eventCategory 1</option>
                                        <option value='eventCategory2'>eventCategory 2</option>
                                        <option value='eventCategory3'>eventCategory 3</option>
                                        <option value='eventCategory4'>eventCategory4</option>
                                    </select>
                                </div>
                            </div>
                            <div className='form__group'>
                                <input className='form__input' type='text' name='tags' id='tags'
                                    value={this.tags}
                                    onChange={this.handleChange}
                                        />
                                <label htmlFor='tags' className='form__label'>Tags</label>
                            </div>
                        </div>
                        <div className='bottom__line'></div>
                        <div className='form__icon'>
                            <i  className='form__icon--box' data-spec="icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 3c-1.1 0-2 .9-2 2H2v16h17.8c1.1 0 2.1-.9 2.1-2V5c.1-1.1-.8-2-1.9-2zm-.2 17H3V6h15v13h1c0-.6.4-1 1-1 .5 0 .9.4 1 .9-.1.6-.6 1.1-1.2 1.1zm1.2-2.7c-.3-.2-.6-.3-1-.3s-.7.1-1 .3V5c0-.6.4-1 1-1s1 .4 1 1v12.3z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.8 12.7l.7-.7-1.1-1 1.1-1-.7-.7-1.1 1-1-1-.7.7 1 1-1 1 .7.7 1-1zM12 10h2v1h-2zM15 12h1v2h-1zM12 15h2v1h-2zM8 15h2v1H8z"></path></svg>
                            </i>
                            <h3 className='heading-3 heading-3--dark-2'>Event Location</h3>
                            <p className='para para--size-11'>
                                Help people in the area discover your event and let attendees know where to show up.
                            </p>
                            {/* <div className='form__group'>
                                <input className='form__input' type='text' name='country' id='country'
                                    value={this.country}
                                    onChange={this.handleChange}
                                
                                />
                                <label htmlFor='country' className='form__label'>Country</label>
                            </div> */}
                            <div className='form__group'>
                                <input className='form__input' type='text' name='states' id='states'
                                    value={this.states}
                                    onChange={this.handleChange}
                                />
                                <label htmlFor='states' className='form__label'>State</label>
                            </div>
                            <div className='form__group'>
                                <input className='form__input' type='text' name='city' id='city'
                                    value={this.city}
                                    onChange={this.handleChange}
                                />
                                <label htmlFor='city' className='form__label'>City</label>
                            </div>
                            <div className='form__group'>
                                <div className='form__box-2'>
                                <select className="form__select form__select__size-2">
                                        <option>City</option>
                                        <option>U.P</option>
                                        <option>M.P</option>
                                        <option>Uk</option>
                                        <option>Rajasthan</option>
                                    </select>
                                    <select className="form__select form__select__size-2">
                                        <option>Zip</option>
                                        <option>110020</option>
                                        <option>110025</option>
                                        <option>110054</option>
                                        <option>110022</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                        <div className='bottom__line'></div>

                        <div className='form__icon'>
                            <i  className='form__icon--box' data-spec="icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 4V2h-1v2H8V2H7v2H2v18h20V4h-5zm4 17H3V9h18v12zM3 8V5h4v1h1V5h8v1h1V5h4v3H3z"></path><g fill-rule="evenodd" clip-rule="evenodd"><path d="M15 16h2v2h-2zM11 16h2v2h-2zM7 16h2v2H7zM15 12h2v2h-2zM11 12h2v2h-2zM7 12h2v2H7z"></path></g></svg>
                            </i>
                            <h3 className='heading-3 heading-3--dark-2'>Event Date and time</h3>
                            <p className='para para--size-11'>
                                Tell event-goers when your event starts and ends so they can make plans to attend.
                            </p>
                            <div className='form__group'>
                                <input className='form__input' type='text' name='startDate' id='startDate'
                                    value={this.startDate}
                                    onChange={this.handleChange}
                                />
                                <label htmlFor='startDate' className='form__label'>Event Start Date</label>
                            </div>
                            <div className='form__group'>
                                <input className='form__input' type='text' name='endDate' id='endDate'
                                    value={this.endDate}
                                    onChange={this.handleChange}
                                />
                                <label htmlFor='endDate' className='form__label'>Event End Date</label>
                            </div>
                        </div>
                        
                        <div className='bottom__line'></div>

                        <div className='form__icon'>
                            <i  className='form__icon--box' data-spec="icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 4V2h-1v2H8V2H7v2H2v18h20V4h-5zm4 17H3V9h18v12zM3 8V5h4v1h1V5h8v1h1V5h4v3H3z"></path><g fill-rule="evenodd" clip-rule="evenodd"><path d="M15 16h2v2h-2zM11 16h2v2h-2zM7 16h2v2H7zM15 12h2v2h-2zM11 12h2v2h-2zM7 12h2v2H7z"></path></g></svg>
                            </i>
                            <h3 className='heading-3 heading-3--dark-2'>Booking Date and time</h3>
                            <p className='para para--size-11'>
                                Tell event-goers when your booking starts and ends so they can make plans to attend.
                            </p>
                            <div className='form__group'>
                                <input className='form__input' type='text' name='bookingStarts' id='bookingStarts'
                                    value={this.bookingStarts}
                                    onChange={this.handleChange}
                                />
                                <label htmlFor='bookingStarts' className='form__label'>Booking Start Date</label>
                            </div>
                            <div className='form__group'>
                                <input className='form__input' type='text' name='bookingEnds' id='bookingEnds'
                                    value={this.bookingEnds}
                                    onChange={this.handleChange}
                                />
                                <label htmlFor='bookingEnds' className='form__label'>Booking End Date</label>
                            </div>
                        </div>

                        <div className='bottom__line'></div>

                        <div className='form__icon'>
                            <i  className='form__icon--box' data-spec="icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 20h20V4H2v16zm1-1h18V5H3v14z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 7C15.1 7 14 8.1 14 9.5s1.1 2.5 2.5 2.5S19 10.9 19 9.5 17.9 7 16.5 7zm0 4c-.8 0-1.5-.7-1.5-1.5S15.7 8 16.5 8s1.5.7 1.5 1.5-.7 1.5-1.5 1.5zM15.5 13l-.7.8-3.5-3.8-6.4 7H19.1l-3.6-4zm-8.3 3l4.1-4.4 2.7 3 .7.8.7-.8 1.4 1.5H7.2z"></path></svg>
                            </i>
                            
                            <h3 className='heading-3 heading-3--dark-2'>Main Event Image</h3>
                            <p className='para para--size-11'>
                                This is the first image attendees will see at the top of your listing. Use a high quality image: 2160x1080px (2:1 ratio).
                            </p>
                            <div className='form__group'>
                                <label htmlFor='file__upload' className='form__file'>
                                    <i  className='form__file--icon' data-spec="icon" aria-hidden="true">
                                        <svg viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 20h20V4H2v16zm1-1h18V5H3v14z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 7C15.1 7 14 8.1 14 9.5s1.1 2.5 2.5 2.5S19 10.9 19 9.5 17.9 7 16.5 7zm0 4c-.8 0-1.5-.7-1.5-1.5S15.7 8 16.5 8s1.5.7 1.5 1.5-.7 1.5-1.5 1.5zM15.5 13l-.7.8-3.5-3.8-6.4 7H19.1l-3.6-4zm-8.3 3l4.1-4.4 2.7 3 .7.8.7-.8 1.4 1.5H7.2z"></path></svg>
                                    </i>
                                    <p className='para form__file--text'> Click to add your main event image</p>
                                    <p className='para form__file--text--sub'> JPEG or PNG, no larger than 5MB</p>
                                    <input className='form__file--input' type='file' name='file' id='file__upload' />
                                </label>
                            </div>
                        </div>

                        <div className='bottom__line'></div>

                        <div className='form__icon'>
                        <i  className='form__icon--box' data-spec="icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 2v3h1V3h5v10H6v1h5v-1H9V3h5v2h1V2H2z"></path>
                                    <g fill-rule="evenodd" clip-rule="evenodd"><path d="M15 9h7v1h-7zM15 13h7v1h-7zM6 17h16v1H6zM6 21h16v1H6z">
                                    </path>
                                    </g>
                                </svg>
                            </i>
                            
                            <h3 className='heading-3 heading-3--dark-2'>Event Description</h3>
                            <p className='para para--size-11'>
                                Describe Your Event in Simple words so that Customers could understand what your Event is All About. Write N/A if You wish to update this later
                            </p>
                            <div className='form__group'>
                            <textarea rows='3' className='form__input' type='text' name='description' id='description'
                                value= {this.description}
                                onChange= {this.handleChange}
                            ></textarea>
                            <label htmlFor='description' className='form__label'>Write description here</label>
                            </div>
                        </div>

                        <div className='bottom__line'></div>

                        <div className='form__icon'>
                        <i  className='form__icon--box' data-spec="icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 2v3h1V3h5v10H6v1h5v-1H9V3h5v2h1V2H2z"></path>
                                    <g fill-rule="evenodd" clip-rule="evenodd"><path d="M15 9h7v1h-7zM15 13h7v1h-7zM6 17h16v1H6zM6 21h16v1H6z">
                                    </path>
                                    </g>
                                </svg>
                            </i>
                            
                            <h3 className='heading-3 heading-3--dark-2'>Event Attractions</h3>
                            <p className='para para--size-11'>
                                Enter Artist Name, Band Name, Host Name, Included Food & Beverages, Activities & Other Details which could Attract more Customers. Write N/A if You wish to update this later
                             </p>
                            <div className='form__group'>
                            <textarea rows='3' className='form__input' type='text' name='attraction' id='attraction'
                                value= {this.attraction}
                                onChange= {this.handleChange}
                            ></textarea>
                            <label htmlFor='attraction' className='form__label'>Write attraction here</label>
                            </div>
                        </div>

                        <div className='bottom__line'></div>

                        <div className='form__icon'>
                        <i  className='form__icon--box' data-spec="icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 2v3h1V3h5v10H6v1h5v-1H9V3h5v2h1V2H2z"></path>
                                    <g fill-rule="evenodd" clip-rule="evenodd"><path d="M15 9h7v1h-7zM15 13h7v1h-7zM6 17h16v1H6zM6 21h16v1H6z">
                                    </path>
                                    </g>
                                </svg>
                            </i>
                            
                            <h3 className='heading-3 heading-3--dark-2'>Event Blog</h3>
                            <p className='para para--size-11'>
                                Write a Short 100 Words Blog to Build your Event's Presence on Search Engine. Write N/A if You wish to update this later
                            </p>
                            <div className='form__group'>
                            <textarea rows='3' className='form__input' type='text' name='summary' id='summary'
                                value= {this.summary}
                                onChange= {this.handleChange}
                            ></textarea>
                            <label htmlFor='summary' className='form__label'>Write summary here</label>
                            </div>
                        </div>

                        <div className='bottom__line'></div>
                        

                        <div className='form__icon'>
                        <i  className='form__icon--box' data-spec="icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 2v3h1V3h5v10H6v1h5v-1H9V3h5v2h1V2H2z"></path>
                                    <g fill-rule="evenodd" clip-rule="evenodd"><path d="M15 9h7v1h-7zM15 13h7v1h-7zM6 17h16v1H6zM6 21h16v1H6z">
                                    </path>
                                    </g>
                                </svg>
                            </i>
                            
                            <h3 className='heading-3 heading-3--dark-2'>Event Terms and Conditions</h3>
                            <p className='para para--size-11'>
                                Enter All the Terms & Conditions related to your Event. These Terms & Conditions are visible to Customers on Your Event Page. Write N/A if You wish to update this later
                            </p>
                        </div>

                        <div className='bottom__line'></div>

                        <div className='form__group'>
                            {/* <input className='form__input' type='submit' value='Submit' /> */}

						<button className='btn btn--blue' type="submit">Add</button>
                        </div>
               
					</form>
				</div>
			</div>
	    )
	}
  }