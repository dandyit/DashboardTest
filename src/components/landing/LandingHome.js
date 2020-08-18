import React from 'react';
import homeLogo from '../../img/logo.png'

const LandingHome = ()=>{
    return(
        <div className='home'>
            <div className='home__nav'>
                {/* <img src={homeLogo} alt="Nexter logo" class="home__logo" /> */}
                <h3 className='home__heading heading-3 text-upper'>Ticket Viral</h3>
                <a href='#!' className='home__signIn'>Sign In</a>
            </div>

                <h3 className='heading-3-sub para--light'>Create your own event & tickets</h3>
                <h2 className='heading-2 para--light-4 text-cap'>
                    To sell unlimited tickets and
                </h2>
                <h2 className='heading-2 para--light-4 text-cap'>
                    genrate revenues anywhere anytime
                </h2>
                <form className='form'>
                    <span className='para--size-18'>
                        Ready to start? Enter your email to create events & do live here
                    </span>
                    <div className='form__group home__input--box'>
                        <input className='home__input' type='text' name='name' id='name' placeholder='Email address'/>
                        <button className='btn btn--blue home__btn'> get started  </button>
                    </div>
                </form>
        </div>
    )
}

export default LandingHome;