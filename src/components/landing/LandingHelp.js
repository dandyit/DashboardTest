import React from 'react';
import helpLogo from '../../img/logo.png'

const LandingHelp = ()=>{
    return(
        <div className='help'>
                <form className='form'>
                    <p className=' para--size-18 para--light-4 u-margin-bottom-small' >
                        Ready to start? Enter your email to create events & do live here
                    </p>
                    <div className='form__group help__input--box'>
                        <input className='help__input' type='text' name='name' id='name' placeholder='Email address'/>
                        <button className='btn btn--blue help__btn'> get started  </button>
                    </div>
                </form>
        </div>
    )
}

export default LandingHelp;