import React from 'react';
import { useForm } from 'react-hook-form';

const FormStepper = ()=>{
    
    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const onSubmit = (data) => {
        console.log(data);
    };
    return(
        <div className='formStepper'> 
            <div className='box'>
                <form className='form' onSubmit={handleSubmit(onSubmit)} >
                    <h1>Form Stepper</h1>
                        <div className='form__group'>
                            <input className='form__input'
                                type='text' name='fullName' ref={register({
                                    required: true,
                                    maxLength: 30,
                                    minLength: 2})} /> {/* register an input */}
                            <label className='form__label'>First Name</label>
                            <label className='form__label--error'>
                                { errors.fullName && 'Please enter your full name.'}
                            </label>
                        </div>
                
                        <div className='form__group'>
                            <input className='form__input' name="nick" ref={register({ required: true })} />
                            <label className='form__label'>Nick Name</label>
                            <label className='form__label--error'>
                                {errors.nick && 'Please enter your nick name is required.'}
                            </label>
                        </div>
                
                        <div className='form__group'>
                            <input className='form__input' name="age" ref={register({ pattern: /\d+/ })} />
                            <label className='form__label'>Age</label>
                            <label className='form__label--error'>
                            {errors.age && 'Please enter number for age.'}
                            </label>
                        </div>
                        <div className='form__group'>
                            <input className='form__input' name="message" ref={register} />
                            <label className='form__label'>Message</label>
                        </div>
                        <div className='form__group'>
                            <input className='form__input' type="submit" />
                        </div>
                </form>
            </div>
        </div>
    )
}

export default FormStepper;