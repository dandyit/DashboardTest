import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import logoBlue from '../img/logo-01.svg';
import logoBlue2 from '../img/logo-02.svg';

const FormInput = ()=>{
    return(
        <div className='formInput'>
            <div className='box'>
                <div className='formInput__inner--box'>
                    <form action='#' className='form'>
                        <div className='form__icon'>
                            <i  className='form__icon--box' data-spec="icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 2v3h1V3h5v10H6v1h5v-1H9V3h5v2h1V2H2z"></path>
                                    <g fill-rule="evenodd" clip-rule="evenodd"><path d="M15 9h7v1h-7zM15 13h7v1h-7zM6 17h16v1H6zM6 21h16v1H6z">
                                    </path>
                                    </g>
                                </svg>
                            </i>
                            <h3 className='heading-3 heading-3--dark-2'>Basic Event Info</h3>
                            <p className='para para--size-11'>
                                Name your event and tell event-goers why they should come. Add details that highlight what makes it unique.
                            </p>
                            <div className='form__group'>
                                <input className='form__input' type='text' name='name' id='name'/>
                                <label for='name' className='form__label'>Event Title</label>
                            </div>
                            <div className='form__group'>
                                <div className='form__box'>
                                    <select class="form__select">
                                        <option>Type</option>
                                        <option>Apples</option>
                                        <option>Bananas</option>
                                        <option>Grapes</option>
                                        <option>Oranges</option>
                                    </select>
                                    <select class="form__select">
                                        <option>Category</option>
                                        <option>Apples</option>
                                        <option>Bananas</option>
                                        <option>Grapes</option>
                                        <option>Oranges</option>
                                    </select>
                                    <select class="form__select">
                                        <option>Sub Category</option>
                                        <option>Apples</option>
                                        <option>Bananas</option>
                                        <option>Grapes</option>
                                        <option>Oranges</option>
                                    </select>
                                </div>
                            </div>
                            <div className='form__group'>
                                <input className='form__input' type='text' name='name' id='name'/>
                                <label for='name' className='form__label'>Event Tag Line</label>
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
                                <input className='form__input' type='text' name='name' id='name'/>
                                <label for='name' className='form__label'>Event Title</label>
                            </div>
                            <div className='form__group'>
                                <div className='form__box'>
                                    <select class="form__select">
                                        <option>Type</option>
                                        <option>Apples</option>
                                        <option>Bananas</option>
                                        <option>Grapes</option>
                                        <option>Oranges</option>
                                    </select>
                                    <select class="form__select">
                                        <option>Category</option>
                                        <option>Apples</option>
                                        <option>Bananas</option>
                                        <option>Grapes</option>
                                        <option>Oranges</option>
                                    </select>
                                    <select class="form__select">
                                        <option>Sub Category</option>
                                        <option>Apples</option>
                                        <option>Bananas</option>
                                        <option>Grapes</option>
                                        <option>Oranges</option>
                                    </select>
                                </div>
                            </div>
                            <div className='form__group'>
                                <input className='form__input' type='text' name='name' id='name'/>
                                <label for='name' className='form__label'>Event Tag Line</label>
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
                                <input className='form__input' type='text' name='name' id='name'/>
                                <label for='name' className='form__label'>Event Start Date</label>
                            </div>
                            <div className='form__group'>
                                <input className='form__input' type='text' name='name' id='name'/>
                                <label for='name' className='form__label'>Event End Date</label>
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
                            
                            <h3 className='heading-3 heading-3--dark-2'>Event Details</h3>
                            <p className='para para--size-11'>
                                Add more details to your event like your schedule, sponsors, or featured guests.
                            </p>

                            <div className='form__group'>
                                <CKEditor
                                    editor={ ClassicEditor }
                                    data="
                                    <h1>
                                    Hi, Ticket Viral
                                    </h1>"
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
                            {/* <div className='form__group'>
                                <label for='file__upload' className='form__file'>
                                    <i  className='form__file--icon' data-spec="icon" aria-hidden="true">
                                        <svg viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 20h20V4H2v16zm1-1h18V5H3v14z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 7C15.1 7 14 8.1 14 9.5s1.1 2.5 2.5 2.5S19 10.9 19 9.5 17.9 7 16.5 7zm0 4c-.8 0-1.5-.7-1.5-1.5S15.7 8 16.5 8s1.5.7 1.5 1.5-.7 1.5-1.5 1.5zM15.5 13l-.7.8-3.5-3.8-6.4 7H19.1l-3.6-4zm-8.3 3l4.1-4.4 2.7 3 .7.8.7-.8 1.4 1.5H7.2z"></path></svg>
                                    </i>
                                    <p className='para form__file--text'> Click to add your main event image</p>
                                    <p className='para form__file--text--sub'> JPEG or PNG, no larger than 5MB</p>
                                    <input className='form__file--input' type='file' name='file' id='file__upload' />
                                </label>
                            </div> */}
                        </div>

                        <div className='bottom__line'></div>
                        <div className='form__group'>
                            {/* <input className='form__input' type='submit' value='Submit' /> */}
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormInput;