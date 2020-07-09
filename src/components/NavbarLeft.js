import React from 'react';
import { Link } from 'react-router-dom';
import logoBlue from '../img/logo-01.svg';
// import logoBlue2 from '../img/logo-02.svg';

const foo = ()=>{
    console.log('foo: rahul tiwari');
    return(
        <div className=''><h1>Rahul tiwari</h1></div>
    )
}

const NavbarLeft = ()=>{
    return( 
        <div className="sidebar">
            <div className='sidebar__top'>
                {/* <h3 className='heading-3'>Logo</h3> */}
				{/* <i className="glyph-icon flaticon-man"></i> */}
                <img src={logoBlue} className='sidebar__top--img' alt='Ticket Viral Logo' />
                <span className='sidebar__top--name'>Ticket Viral</span>
            </div>
            <div className='sidebar__bottom'>
                <ul className='nav'>
                    <li className='nav__item'><Link to='/Logo' className='nav__link' onClick={foo}>Home</Link></li>
                    <li className='nav__item'><Link to='/CreateEvent' className='nav__link'>Create Event</Link></li>
                    <li className='nav__item'><Link to='/ViewEvent' className='nav__link'> View Event </Link></li>
                    <li className='nav__item'><Link to='/FormInput' className='nav__link'> Form Input </Link></li>
                    <li className='nav__item'><Link to='/popUp' className='nav__link'> Pop Up </Link></li>
                    <li className='nav__item'><Link to='/FormStepper' className='nav__link'> Form Stepper </Link></li>
                    <li className='nav__item'><Link to='/Graphs' className='nav__link'> Graphs </Link></li>
                    <li className='nav__item'><Link to='/LineChart' className='nav__link'> Line Chart </Link></li>
                    <li className='nav__item'><Link to='/CustomImgCropPage' className='nav__link'>Custom Image Crop </Link></li>
                
                </ul>
            </div>
        </div>
    )
}


export default NavbarLeft;