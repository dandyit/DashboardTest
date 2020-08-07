import React from 'react';
import {Link} from 'react-router-dom';
import { useForm } from "react-hook-form";

import { ErrorMessage } from '@hookform/error-message';

import { useStateMachine } from "little-state-machine";
  

const ForgotPassword = ()=>{
    const { state, action } = useStateMachine();
  const { handleSubmit, errors, register } = useForm({
    defaultValues: state.yourDetails
  });
  const onSubmit = data => {
    action(data); 
  };

    return(
        <div className='forgotPassword' id='forgotPassword'>
            <div className='forgotPassword__content'>
                <Link to='/' className='forgotPassword__close'>x</Link>
                
                <div className='forgotPassword__content--box'>
                    <i data-spec="icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.2 19.1c1-2.8 3.7-4.7 6.7-4.7s5.7 1.9 6.7 4.7c-4.1 2.5-9.3 2.5-13.4 0zm16.1-1.9c-.5.5-1.1 1-1.7 1.5a8.15 8.15 0 0 0-7.6-5.2c-3.3 0-6.3 2.1-7.6 5.1-.6-.4-1.1-.9-1.6-1.4l-.8.7C4.8 20.6 8.4 22 12 22s7.2-1.4 10-4.1l-.7-.7zM12 2C9.2 2 7 4.2 7 7s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 9c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path></svg>
                    </i>
                    <h3 className='heading-3--dark-2'>Reset Password</h3>
                    <p class='para--size-12 para--dark-2 u-margin-bottom-small'>
                        after reset please check email and verify link
                    </p>

                    <form className='form' onSubmit={handleSubmit(onSubmit)}>
                        <div className='form__group u-margin-bottom-small'>
                            <input className='form__input' type='email' name='email' 
                            ref={register({ required: "Enter your email" })}
                            id='email'/>
                    <label className='form__label--error'>
                      <ErrorMessage errors={errors} name="email" as="p" />
                    </label>
                            <label for='email' className='form__label'>Email address*</label>
                        </div>
                        <input className='form__input btn btn-blue u-margin-bottom-small u-margin-bottom-small' type='submit' value='Reset' />
                        
                        <Link to='/LogIn'>
                            Log In
                        </Link>	
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;