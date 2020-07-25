import React from "react";
import { useForm } from "react-hook-form";

import { ErrorMessage } from '@hookform/error-message';

import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";


const Step1 = props => {
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, errors, register } = useForm({
    defaultValues: state.yourDetails
  });
  const { push } = useHistory();
  const onSubmit = data => {
    action(data); 
    push("/step2");
  };

  return (
    // <form onSubmit={handleSubmit(onSubmit)}> 
    //   <h2>Step 1</h2>
    //   <label>
    //     First Name:
    //     <input
    //       name="firstName"
    //       ref={register({ required: "This is required." })}
    //     />
    //     <ErrorMessage errors={errors} name="firstName" as="p" />
    //   </label>
    //   <label>
    //     Last Name:
    //     <input
    //       name="lastName"
    //       ref={register({ required: "This is required." })}
    //     />
    //     <ErrorMessage errors={errors} name="lastName" as="p" />
    //   </label>
    //   <input type="submit" />
    // </form>
        <div className='formInput__inner--box'>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
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
                    <input className='form__input' type='text' name='eventName' id='name'
                      ref={register({ required: "Required Event Name." })}
                    />
                    <label className='form__label--error'>
                      <ErrorMessage errors={errors} name="eventName" as="p" />
                    </label>
                    <label for='name' className='form__label'>Event Name*</label>
                </div>
                <div className='form__group'>
                    <div className='form__box'>
                        <select class="form__select form__select__size-2">
                            <option>Type</option>
                            <option>Apples</option>
                            <option>Bananas</option>
                            <option>Grapes</option>
                            <option>Oranges</option>
                        </select>
                        <select class="form__select form__select__size-2">
                            <option>Category</option>
                            <option>Apples</option>
                            <option>Bananas</option>
                            <option>Grapes</option>
                            <option>Oranges</option>
                        </select>
                        <select class="form__select form__select__size-2">
                            <option>Sub Category</option>
                            <option>Apples</option>
                            <option>Bananas</option>
                            <option>Grapes</option>
                            <option>Oranges</option>
                        </select>
                    </div>
                </div>
                <div className='form__group'>
                    <input className='form__input' type='text' name='eventVanue' 
                        ref={register({ required: "Required Event Vanue." })}
                    id='name'/>
                    <label className='form__label--error'>
                      <ErrorMessage errors={errors} name="eventVanue" as="p" />
                    </label>
                    <label for='name' className='form__label'>Event Vanue*</label>
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
                    <input className='form__input' type='text' name='country' 
                      ref={register({ required: "Required Country." })}
                      id='country'/>
                <label className='form__label--error'>
                  <ErrorMessage errors={errors} name="country" as="p" />
                </label>
                    <label for='country' className='form__label'>Country*</label>
                </div>
                <div className='form__group'>
                    <input className='form__input' type='text' name='state' 
                    ref={register({ required: "Required State." })}
                    id='state'/>
                <label className='form__label--error'>
                  <ErrorMessage errors={errors} name="state" as="p" />
                </label>
                    <label for='state' className='form__label'>State*</label>
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
                    <input className='form__input' type='text' name='eventStartDate' 
                    ref={register({ required: "Required Event start date." })}
                    id='eventStartDate'/>
                <label className='form__label--error'>
                  <ErrorMessage errors={errors} name="eventStartDate" as="p" />
                </label>
                    <label for='eventStartDate' className='form__label'>Event Start Date*</label>
                </div>
                <div className='form__group'>
                    <input className='form__input' type='text' name='eventEndDate' 
                    ref={register({ required: "Required Event end date" })}
                    id='eventEndDate'/>
                <label className='form__label--error'>
                  <ErrorMessage errors={errors} name="eventEndDate" as="p" />
                </label>
                    <label for='eventEndDate' className='form__label'>Event End Date*</label>
                </div>
            </div>

            <div className='bottom__line'></div>
            <div className='form__icon'>
                <i  className='form__icon--box' data-spec="icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 3c-1.1 0-2 .9-2 2H2v16h17.8c1.1 0 2.1-.9 2.1-2V5c.1-1.1-.8-2-1.9-2zm-.2 17H3V6h15v13h1c0-.6.4-1 1-1 .5 0 .9.4 1 .9-.1.6-.6 1.1-1.2 1.1zm1.2-2.7c-.3-.2-.6-.3-1-.3s-.7.1-1 .3V5c0-.6.4-1 1-1s1 .4 1 1v12.3z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.8 12.7l.7-.7-1.1-1 1.1-1-.7-.7-1.1 1-1-1-.7.7 1 1-1 1 .7.7 1-1zM12 10h2v1h-2zM15 12h1v2h-1zM12 15h2v1h-2zM8 15h2v1H8z"></path></svg>
                </i>
                <h3 className='heading-3 heading-3--dark-2'>Event Manager Info</h3>
                <p className='para para--size-11'>
                    Help people to discover your contact information and let attendees know where to show up.
                </p>
                <div className='form__group'>
                    <input className='form__input' type='text' name='phone' 
                    ref={register({ required: "Required Phone No." })}
                    id='phone'/>
                <label className='form__label--error'>
                  <ErrorMessage errors={errors} name="phone" as="p" />
                </label>
                    <label for='phone' className='form__label'>Phone No*</label>
                </div>
                <div className='form__group'>
                    <input className='form__input' type='text' name='email' 
                    ref={register({ required: "Required Email" })}
                    id='email'/>
                <label className='form__label--error'>
                  <ErrorMessage errors={errors} name="email" as="p" />
                </label>
                    <label for='name' className='form__label'>Email address*</label>
                </div>
                <div className='form__group'>
                    <input className='form__input' type='text' name='website' 
                    id='website'/>
                    <label for='website' className='form__label'>Your website</label>
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

export default Step1; 
