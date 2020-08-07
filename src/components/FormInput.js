import React, {useState} from 'react';
import axios from 'axios';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import logoBlue from '../img/logo-01.svg';
// import logoBlue2 from '../img/logo-02.svg';
// import { render } from 'node-sass';
// import usePasswordToggle from '../hook/usePasswordToggle';

const apiUrl = 'https://ticketviral.com';

axios.interceptors.request.use(
    config => {
      const { origin } = new URL(config.url);
      const allowedOrigins = [apiUrl];
      const token = localStorage.getItem('token');
      if (allowedOrigins.includes(origin)) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  

 const FormInput = ()=>{

  const storedJwt = localStorage.getItem('token');
  const [jwt, setJwt] = useState(storedJwt || null);
  console.log(jwt);


  const [ stateToggle, setToggle ] = useState(false);

  function toggle(){
      setToggle(!stateToggle);
  }

  
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

const [form, setState] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const printValues = e => {
    e.preventDefault();
    console.log(
        form.name,
        form.email,
        form.password,
        form.passwordConfirm,);
    
  };

  const updateField = e => {
    setState({
      ...form,
      [e.target.name]: e.target.value
    });
  };

// const handleSubmit = (evt) => {
//     evt.preventDefault();
//     // alert(`Submitting Name ${name}`);
//     // alert(`Submitting Name ${email}`);
//     // alert(`Submitting Name ${password}`);
//     const user = {

//       email: setEmail.email,
//       password: setPassword.password,
//     }
// }


  const signup = async () => { 
//   const signup = async (name,email,password,passwordConfirm) => { 
//   const signup = async () => { 
    //   const username = name;
    //   const useremail = email;
    //   const userpassword = password;
    //   const userpasswordConfirm = passwordConfirm;

    //   let apiData = {name: username,email: useremail, password: userpassword,passwordConfirm: userpasswordConfirm};
    //   let apiData = {name: "Rahul tiwari",email: "rahultiwari01071996rt@gmail.com", password: "pass1234",passwordConfirm: "pass1234"};
    // let apiData = {name: "Omveer J",email: "kirankawarnaruka@gmail.com", password: "pass1234",passwordConfirm: "pass1234"};
    // let apiData = {name: "Arnab",email: "arnab.banerjee@mapsor.com", password: "pass1234",passwordConfirm: "pass1234"};

    let apiData = { name: form.name, email: form.email, password: form.password, passwordConfirm: form.passwordConfirm};

    const { data } = await axios.post(`${apiUrl}/api/v1/users/signup`, apiData);
    console.log(data);

    // localStorage.setItem('token', data.token);
    // setJwt(data.token);

    // if(data.status ===200 && data.status ===201){
    //     console.log(`status Data : ${data}`);
        // window.location.reload();
    //     return data;
    // }else{
    //     console.log(`Error Somthing happend worng!`);
    // }

  };
  const login = async () => { 

    let apiData = {email: form.email, password: form.password};


    // let apiData = {email: "rahultiwari01071996rt@gmail.com", password: "pass1234"};

    // let apiData = {email: "arnab.banerjee@mapsor.com", password: "pass1234"};
    // let apiData = {email: "rahul.tiwari@mapsor.com", password: "pass1234"};
    // let apiData = {email: user.email, password: user.password};

    const { data } = await axios.post(`${apiUrl}/api/v1/users/login`, apiData);
    console.log(data);
    localStorage.setItem('token', data.token);
    setJwt(data.token);
  };

const me = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/api/v1/users/me`);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };


    
    return(
        <div className='formInput'>
            <div className='box'>




     <form className='form' onSubmit={printValues}>

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
                            <h3 className='heading-3 heading-3--dark-2'> Sign Up</h3>
                            {/* <p className='para para--size-11'>
                                Name your event and tell event-goers why they should come. Add details that highlight what makes it unique.
                            </p> */}
                            <div className='form__group'>
                                <input className='form__input' type='text' id='fullname'
                                    value={form.name}
                                    name="name"
                                    onChange={updateField}
                                />
                                <label for='fullname' className='form__label'>Full Name</label>
                            </div>
                            <div className='form__group'>
                                <input className='form__input' type='text' id='email'
                                
                                        value={form.email}
                                        name="email"
                                        onChange={updateField}
                                />
                                <label for='email' className='form__label'>Email</label>
                            </div>
                            <div className='form__group'>
                                <input className='form__input' id='password'
                                    type={stateToggle ? 'text': 'password'}
                                    value={form.password}
                                    name="password"
                                    onChange={updateField}
                                />
                                <label for='password' className='form__label'>Password</label>
                                <span className='form__toggle para--size-11 text-upper para--dark-2' onClick={toggle}>
                                    {stateToggle ? 'Hide' : 'Show'}
                                </span>
                            </div>
                            <div className='form__group'>
                                <input className='form__input' id='passwordConfirm'
                                    type={stateToggle ? 'text': 'password'}
                                    value={form.passwordConfirm}
                                    name="passwordConfirm"
                                    onChange={updateField}
                                />
                                <label for='passwordConfirm' className='form__label'>Password Confirm</label>
                                <span className='form__toggle para--size-11 text-upper para--dark-2' onClick={toggle}>
                                    {stateToggle ? 'Hide' : 'Show'}
                                </span>
                            </div>
                    </div>

                <div className='form__grooup u-margin-bottom-small'>
                    
                    <button className='btn btn--blue' onClick={ ()=>signup() }>Sign Up</button>
                </div> 

    </form>




     <form className='form u-margin-top-medium' onSubmit={printValues}>

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
                            <h3 className='heading-3 heading-3--dark-2'> Log In</h3>
                            {/* <p className='para para--size-11'>
                                Login
                            </p> */}
                            <div className='form__group'>
                                <input className='form__input' type='text' id='email'
                                
                                        value={form.email}
                                        name="email"
                                        onChange={updateField}
                                />
                                <label for='email' className='form__label'>Email</label>
                            </div>
                            <div className='form__group'>
                                <input className='form__input' id='password'
                                    type={stateToggle ? 'text': 'password'}
                                    value={form.password}
                                    name="password"
                                    onChange={updateField}
                                />
                                <label for='password' className='form__label'>Password</label>

                                <span className='form__toggle para--size-11 text-upper para--dark-2' onClick={toggle}>
                                    {stateToggle ? 'Hide' : 'Show'}
                                </span>
                            </div>

                            <div className='form__group u-margin-bottom-small'>
                            
                                <button className='btn btn--blue' onClick={ ()=>login() }>Log In</button>
                            </div>

                    </div>
    </form>



                <div className='u-margin-top-medium u-margin-bottom-medium'>

                    <button className='btn btn--blue' onClick={ ()=>me() }>Data Me</button><br></br><br></br>
                </div>

                <div className='formInput__inner--box'>
                    <form className='form'>

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
                                <input className='form__input' type='text' name='eventName' id='eventName'
                                    // value={this.eventName}
                                    // onChange={this.handleChange}
                                />
                                <label for='eventName' className='form__label'>Event Name*</label>
                            </div>
                            <div className='form__group'>
                                <div className='form__box-2'>
                                    <select name='eventType' class="form__select form__select__size-2"
                                        // value={this.eventType}
                                        // onChange={this.handleChange}
                                        >
                                        <option>Event Type</option>
                                        <option value='eventType1'>eventType 1</option>
                                        <option value='eventType2'>eventType 2</option>
                                        <option value='eventType3'>eventType 3</option>
                                        <option value='eventType4'>eventType 4</option>
                                    </select>
                                    <select name='eventCategory' class="form__select form__select__size-2"
                                        // value={this.eventCategory}
                                        // onChange={this.handleChange}
                                        >
                                        <option>Category</option>
                                        {/* <option value='eventCategory1'>eventCategory 1</option> */}
                                        {/* <option value='eventCategory2'>eventCategory 2</option> */}
                                        {/* <option value='eventCategory3'>eventCategory 3</option> */}
                                        {/* <option value='eventCategory4'>eventCategory4</option> */}
                                    </select>
                                </div>
                            </div>
                            <div className='form__group'>
                                <input className='form__input' type='text' name='tags' id='tags'
                                    // value={this.tags}
                                    // onChange={this.handleChange}
                                        />
                                <label for='tags' className='form__label'>Tags</label>
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
                            <div className='form__group'>
                                <input className='form__input' type='text' name='country' id='country'
                                    // value={this.country}
                                    // onChange={this.handleChange}
                                
                                />
                                <label for='country' className='form__label'>Country</label>
                            </div>
                            <div className='form__group'>
                                <input className='form__input' type='text' name='states' id='states'
                                    // value={this.states}
                                    // onChange={this.handleChange}
                                />
                                <label for='states' className='form__label'>State</label>
                            </div>
                            <div className='form__group'>
                                <div className='form__box-2'>
                                <select class="form__select form__select__size-2">
                                        <option>City</option>
                                        <option>U.P</option>
                                        <option>M.P</option>
                                        <option>Uk</option>
                                        <option>Rajasthan</option>
                                    </select>
                                    <select class="form__select form__select__size-2">
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
                                <input className='form__input' type='text' name='eventStartDate' id='eventStartDate'
                                    // value={this.eventStartDate}
                                    // onChange={this.handleChange}
                                />
                                <label for='eventStartDate' className='form__label'>Event Start Date</label>
                            </div>
                            <div className='form__group'>
                                <input className='form__input' type='text' name='eventEndDate' id='eventEndDate'
                                    // value={this.eventEndDate}
                                    // onChange={this.handleChange}
                                />
                                <label for='eventEndDate' className='form__label'>Event End Date</label>
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
                                <input className='form__input' type='text' name='bookingStartDate' id='bookingStartDate'
                                    // value={this.bookingStartDate}
                                    // onChange={this.handleChange}
                                />
                                <label for='bookingStartDate' className='form__label'>Booking Start Date</label>
                            </div>
                            <div className='form__group'>
                                <input className='form__input' type='text' name='bookingEndDate' id='bookingEndDate'
                                    // value={this.bookingEndDate}
                                    // onChange={this.handleChange}
                                />
                                <label for='bookingEndDate' className='form__label'>Booking End Date</label>
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
                                <label for='file__upload' className='form__file'>
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
                                // value= {this.description}
                                // onChange= {this.handleChange}
                            ></textarea>
                            <label for='description' className='form__label'>Write description here</label>
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
                                // value= {this.attraction}
                                // onChange= {this.handleChange}
                            ></textarea>
                            <label for='attraction' className='form__label'>Write attraction here</label>
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
                                // value= {this.summary}
                                // onChange= {this.handleChange}
                            ></textarea>
                            <label for='summary' className='form__label'>Write summary here</label>
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
                            <div className='form__group'>
                                {/* <CKEditor name='editor'
                                    // value={this.editor}
                                    // onChange={this.handleSubmit}
                                    editor={ ClassicEditor }
                                    data="
                                    <p>
                                    Hi,
                                    </p>
                                    <p>
                                    I'm Ticket Viral.
                                    </p>
                                    <h3>
                                    What is your Event Terms and Conditions. Write here...
                                    </h3>
                                    "
                                    onInit={ editor => {
                                        console.log( 'Editor is ready to use!', editor );
                                    } }
                                    onChange={ ( event, editor ) => {
                                        const data = editor.getData();
                                        console.log( { event, editor, data } );
                                    } }
                                    onBlur={ ( event, editor ) => {
                                        console.log( 'Blur.', editor );
                                    } }
                                    onFocus={ ( event, editor ) => {
                                        console.log( 'Focus.', editor );
                                    } }
                                /> */}
                            </div>
                        </div>

                        <div className='bottom__line'></div>

                        <div className='form__group'>
                            <input className='form__input' type='submit' value='Submit' />

						<button className='btn btn--blue' type="submit">Add</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
// }
}

export default FormInput;