import React from 'react';

const FormInput = ()=>{
    return(
        <div className='formInput'>
            <div className='box'>
                <div className='formInput__inner--box'>
                    <form action='#' className='form'>
                        <div className='form__group'>
                            <input className='form__input' type='text' name='name' id='name'/>
                            <label for='name' className='form__label'>Full Name</label>
                        </div>
                        <div className='form__group'>
                            <input className='form__input' type='text' id='mobile' />
                            <label for='mobile' className='form__label'>Mobile No.</label>
                        </div>
                        <div className='form__group'>
                            <input className='form__input' type='email' id='email' />
                            <label for='email' className='form__label'>Email</label>
                        </div>
                        <div className='form__group'>
                            <textarea className='form__input' type='text' id='message' />
                            <label for='message' className='form__label'>Message</label>
                        </div>
                        <div className='form__group'>
                            <input className='form__input' type='text' name='name' id='name'/>
                            <label for='name' className='form__label'>Full Name</label>
                        </div>
                        <div className='form__group'>
                            <input className='form__input' type='text' id='mobile' />
                            <label for='mobile' className='form__label'>Mobile No.</label>
                        </div>
                        <div className='form__group'>
                            <input className='form__input' type='email' id='email' />
                            <label for='email' className='form__label'>Email</label>
                        </div>
                        <div className='form__group'>
                            <textarea className='form__input' type='text' id='message' />
                            <label for='message' className='form__label'>Message</label>
                        </div>
                        <div className='form__group'>
                            <input className='form__input' type='submit' value='Submit' />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormInput;