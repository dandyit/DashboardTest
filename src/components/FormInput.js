import React from 'react';
import Axios from 'axios';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import logoBlue from '../img/logo-01.svg';
// import logoBlue2 from '../img/logo-02.svg';
// import { render } from 'node-sass';

// const FormInput = ()=>{
    export default class FormInput extends React.Component {
        state = {
            eventName: '',
            eventType:'',
            eventCategory: '',
            country: '',
            states: '',
            eventStartDate: '',
            eventEndDate: '',

            bookingStartDate: '',
            bookingEndDate: '',

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
            eventName: this.state.eventName,
            eventType: this.state.eventType,
            eventCategory: this.state.eventCategory,
            country: this.state.country,
            states: this.state.states,

            eventStartDate: this.state.eventStartDate,
            eventEndDate: this.state.eventEndDate,
            bookingStartDate: this.state.bookingStartDate,
            bookingEndDate: this.state.bookingEndDate,
            description: this.state.description,
            attraction: this.state.attraction,
            summary: this.state.summary,
            editor: this.state.editor,
            
          };
    
        //   const crossBrowser = `https://cors-anywhere.herokuapp.com/`;
    
        //   const url = `http://192.168.1.22:3000/api/v1/users/login`;
    
        //   const url = `http://192.168.1.22:3000/api/v1/users/signup`;
          const url = `http://192.168.1.22:3000/api/v1/events`;
    
          // axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
        //   axios.post(`${crossBrowser}${url}`, { user }
          Axios.post(`${url}`,user)
            .then(res => {
              console.log(res);
              console.log(res.data);
              console.log(res.data.user);
              console.log(res.user);
            })
        }
    render(){
    return(
        <div className='formInput'>
            <div className='box'>
                <div className='formInput__inner--box'>
                    <form className='form' onSubmit={this.handleSubmit}>
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
                                    value={this.eventName}
                                    onChange={this.handleChange}
                                />
                                <label for='eventName' className='form__label'>Event Name*</label>
                            </div>
                            <div className='form__group'>
                                <div className='form__box-2'>
                                    <select name='eventType' class="form__select form__select__size-2"
                                        value={this.eventType}
                                        onChange={this.handleChange}>
                                        <option>Event Type</option>
                                        <option value='eventType1'>eventType 1</option>
                                        <option value='eventType2'>eventType 2</option>
                                        <option value='eventType3'>eventType 3</option>
                                        <option value='eventType4'>eventType 4</option>
                                    </select>
                                    <select name='eventCategory' class="form__select form__select__size-2"
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
                                    value={this.country}
                                    onChange={this.handleChange}
                                
                                />
                                <label for='country' className='form__label'>Country</label>
                            </div>
                            <div className='form__group'>
                                <input className='form__input' type='text' name='states' id='states'
                                    value={this.states}
                                    onChange={this.handleChange}
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
                                    value={this.eventStartDate}
                                    onChange={this.handleChange}
                                />
                                <label for='eventStartDate' className='form__label'>Event Start Date</label>
                            </div>
                            <div className='form__group'>
                                <input className='form__input' type='text' name='eventEndDate' id='eventEndDate'
                                    value={this.eventEndDate}
                                    onChange={this.handleChange}
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
                                    value={this.bookingStartDate}
                                    onChange={this.handleChange}
                                />
                                <label for='bookingStartDate' className='form__label'>Booking Start Date</label>
                            </div>
                            <div className='form__group'>
                                <input className='form__input' type='text' name='bookingEndDate' id='bookingEndDate'
                                    value={this.bookingEndDate}
                                    onChange={this.handleChange}
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
                                value= {this.description}
                                onChange= {this.handleChange}
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
                                value= {this.attraction}
                                onChange= {this.handleChange}
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
                                value= {this.summary}
                                onChange= {this.handleChange}
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
                                <CKEditor name='editor'
                                    value={this.editor}
                                    onChange={this.handleSubmit}
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
                                        // You can store the "editor" and use when it is needed.
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
                                />
                            </div>
                        </div>

                        <div className='bottom__line'></div>

                        <div className='form__group'>
                            {/* <input className='form__input' type='submit' value='Submit' /> */}

						<button className='btn btn--blue' type="submit">Add</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}}

// export default FormInput;