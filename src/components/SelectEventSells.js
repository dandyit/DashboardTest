import React from 'react';
import {Link} from 'react-router-dom';
// import popupImg from '../img/9.jpg';
// import popupImg1 from '../img/4m.jpg';
// import popupImg2 from '../img/11.jpg';
import logoBlue from '../img/logo-01.svg';

const PopUp = ()=>{
    return(
        <div className='popup' id='popup'>
            <div className='popup__content'>
                <div className='popup__left'>
                    <img src={logoBlue} className='popup__img' alt='' />
                </div>
                <div className='popup__right'>
                    <Link to='/' className='popup__close'>x</Link>
                    <h2 className='heading-2 u-margin-bottom-small'>Select Event</h2>
                    <h5 className='heading-5 text-upper u-margin-bottom-medium'> Your all event sells</h5>

                    <div className='form__group u-margin-bottom-medium'>
                                <div className='form__box'>
                                <select className="form__select form__select__size-2">
                                        <option>Event Name</option>
                                        <option>event 1 sells</option>
                                        <option>event 2 sells</option>
                                        <option>event 3 sells</option>
                                        <option>event 4 sells</option>
                                    </select>
                                </div>
                            </div>
                    <a href='/Sells' className='btn btn--blue'>Done</a>
                </div>
            </div>
        </div>
    )
}

export default PopUp;