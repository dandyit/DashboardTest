import React from "react";
import { useForm } from "react-hook-form";

import { ErrorMessage } from '@hookform/error-message';

import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";

const Mailer = ()=>{
    const { state, action } = useStateMachine();
    const { handleSubmit, errors, register } = useForm({
        defaultValues: state.yourDetails
    });
    const { push } = useHistory();
    const onSubmit = data => {
        action(data);
    };
    return(
        <div className='mailer'>
            <div className='box'>

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
                <h3 className='heading-3 heading-3--dark-2'>Email Sender</h3>
                <p className='para para--size-11'>
                    1.If single person receiver then choose first option
                    2.Else choose second option Select & Upload File where receiver email address data is available
                </p>
                <div className='form__group'>
                    <input className='form__input' type='text' name='email' id='email'
                      ref={register({ required: "Please,write receiver email here..." })}
                    />
                    <label className='form__label--error'>
                      <ErrorMessage errors={errors} name="email" as="p" />
                    </label>
                    <label for='email' className='form__label'>Single Receiver Email*</label>
                </div>
                <div className='form__group'>
                    <p className='or para'>
                        <span className='or--span'>
                            or
                        </span>
                    </p>
                </div>
                <div className='form__group'>
                    <input className='form__input' type='file' name='fileEmailer' 
                        ref={register({ required: "Select & Upload File where receiver email address data is available" })}
                    id='fileEmailer'/>
                    <label className='form__label--error'>
                      <ErrorMessage errors={errors} name="fileEmailer" as="p" />
                    </label>
                    <label for='fileEmailer' className='form__label'>Upload Emails File</label>
                </div>
            </div>
            <div className='bottom__line'></div>
            <div className='form__icon'>
                <i  className='form__icon--box' data-spec="icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 3c-1.1 0-2 .9-2 2H2v16h17.8c1.1 0 2.1-.9 2.1-2V5c.1-1.1-.8-2-1.9-2zm-.2 17H3V6h15v13h1c0-.6.4-1 1-1 .5 0 .9.4 1 .9-.1.6-.6 1.1-1.2 1.1zm1.2-2.7c-.3-.2-.6-.3-1-.3s-.7.1-1 .3V5c0-.6.4-1 1-1s1 .4 1 1v12.3z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.8 12.7l.7-.7-1.1-1 1.1-1-.7-.7-1.1 1-1-1-.7.7 1 1-1 1 .7.7 1-1zM12 10h2v1h-2zM15 12h1v2h-1zM12 15h2v1h-2zM8 15h2v1H8z"></path></svg>
                </i>
                <h3 className='heading-3 heading-3--dark-2'>Write Message</h3>
                <p className='para para--size-11'>
                1.If you want to send only text message Then Choose First Option 
                2.Else you want to send email template code then copy & paste in 
                second option
                </p>
                <div className='form__group'>
                    <textarea rows='20'className='form__input' type='text' name='message' 
                      ref={register({ required: "Please write message here..." })}
                      id='message'></textarea>
                <label className='form__label--error'>
                  <ErrorMessage errors={errors} name="message" as="p" />
                </label>
                    <label for='message' className='form__label'>
                        Write Text Messages here
                    </label>
                </div>

                <div className='form__group'>
                    <p className='or para'>
                        <span className='or--span'>
                            or
                        </span>
                    </p>
                </div>
                <div className='form__group'>
                    <textarea rows='20' className='form__input' type='text' name='templateCode' 
                    ref={register({ required: "Please write or paste emailer template code" })}
                    id='templateCode'></textarea>
                <label className='form__label--error'>
                  <ErrorMessage errors={errors} name="templateCode" as="p" />
                </label>
                    <label for='templateCode' className='form__label'>Paste Template Code here</label>
                </div>
            </div>
            
            <div className='bottom__line'></div>
            <div className='form__group'>
                <input className='form__input' type='submit' value='Submit' />
            </div>

        </form>
    
            </div>
        </div>
        </div>
    )
}

export default Mailer;