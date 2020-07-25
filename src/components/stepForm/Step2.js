import React from "react";
import { useForm } from "react-hook-form";

import { ErrorMessage } from '@hookform/error-message';

import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";


import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Step2 = props => {
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, errors, register } = useForm({
    defaultValues: state.yourDetails
  });
  const { push } = useHistory();
  const onSubmit = data => {
    action(data);
    push("/result");
  };

  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <h2>Step 2</h2>
    //   <label>
    //     Age:
    //     <input name="age" type="number" ref={register({
    //     required: "This is required",
    //     min: {
    //       value: 18,
    //       message: "Minimum age is 18"
    //     },
    //   })} />
    //     <ErrorMessage errors={errors} name="age" as="p" />

    //   </label>
    //   <label>
    //     Years of experience:
    //     <input name="yearsOfExp" type="number" ref={register({
    //     required: "This is required",
    //     min: {
    //       value: 1,
    //       message: "At least 1 year of experience is required"
    //     },
    //   })} />
    //     <ErrorMessage errors={errors} name="yearsOfExp" as="p" />
    //   </label>
    //   <input type="submit" />
    // </form>

    <div className='formInput__inner--box'>
    <form className='form' onSubmit={handleSubmit(onSubmit)}>

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
                    <input className='form__file--input' type='file' name='file' 
                    ref={register({ required: "Click here & Select Image" })}
                    id='file__upload' />
                    <label className='form__label--error'>
                      <ErrorMessage errors={errors} name="file" as="p" />
                    </label>

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
                <CKEditor
                    editor={ ClassicEditor }
                    data="
                    <p>
                    Hi,
                    </p>
                    <p>
                    I'm Ticket Viral.
                    </p>
                    <h3>
                    What is your Event Description. Write here...
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
                <CKEditor
                    editor={ ClassicEditor }
                    data="
                    <p>
                    Hi,
                    </p>
                    <p>
                    I'm Ticket Viral.
                    </p>
                    <h3>
                    What is your Event Attractions. Write here...
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
                <CKEditor
                    editor={ ClassicEditor }
                    data="
                    <p>
                    Hi,
                    </p>
                    <p>
                    I'm Ticket Viral.
                    </p>
                    <h3>
                    What is your Event Blog. Write here...
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
                <CKEditor
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
            <input className='form__input' type='submit' value='Submit' />
        </div>

    </form>
</div>

  );
};

export default Step2;
