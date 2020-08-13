import React from 'react';
import { Link } from 'react-router-dom';
import logoBlue from '../img/logo-01.svg';
// import logoBlue2 from '../img/logo-02.svg';

const foo = ()=>{
    console.log('foo: rahul tiwari');
    return(
        <div className='box'><h1>Rahul tiwari</h1></div>
    )
}

const NavbarLeft = ()=>{
    return( 
        <div className="sidebar">
            <div className='sidebar__top'>
                {/* <h3 className='heading-3'>Logo</h3> */}
				{/* <i className="glyph-icon flaticon-man"></i> */}
                <img src={logoBlue} className='sidebar__top--img' alt='Ticket Viral Logo' />
                <span className='sidebar__top--name'>TV</span>
            </div>
            <div className='sidebar__bottom'>
                <ul className='nav'>
                    <li className='nav__item'><Link to='/Profile' className='nav__link'>Profile</Link></li>
                    <li className='nav__item'><Link to='/Logo' className='nav__link' onClick={foo}>Home</Link></li>
                    <li className='nav__item'><Link to='/CreateEvent' className='nav__link'>Create Event</Link></li>
                    <li className='nav__item'><Link to='/ViewEvent' className='nav__link'> View Event </Link></li>
                    <li className='nav__item'><Link to='/FormInput' className='nav__link'> Form Input </Link></li>
                    <li className='nav__item'><Link to='/popUp' className='nav__link'> Pop Up </Link></li>
                    <li className='nav__item'><Link to='/CreateTickets' className='nav__link'>Create Tickets </Link></li>
                    <li className='nav__item'><Link to='/Graphs' className='nav__link'> Graphs </Link></li>
                    {/* <li className='nav__item'><Link to='/Sells' className='nav__link'> Sells </Link></li> */}
                    <li className='nav__item'><Link to='/SelectEventSells' className='nav__link'> Sells </Link></li>
                    {/* <li className='nav__item'><Link to='/Revenue' className='nav__link'> Revenues </Link></li> */}
                    <li className='nav__item'><Link to='/SelectEventRevenue' className='nav__link'> Revenues </Link></li>
                    <li className='nav__item'><Link to='/CustomImgCropPage' className='nav__link'>Custom Image Crop </Link></li>
                    <li className='nav__item'><Link to='/FetchData' className='nav__link'> Fetch API Data </Link></li>
                    {/* <li className='nav__item'><Link to='/Login' className='nav__link'> Login </Link></li> */}
                    <li className='nav__item'><Link to='/DragCropImg' className='nav__link'> DragCropImg </Link></li>
                    <li className='nav__item'><Link to='/Mailer' className='nav__link'> Mailer </Link></li>
                    <li className='nav__item'><Link to='/Tickets' className='nav__link'> Tickets </Link></li>
                
                </ul>
            </div>
        </div>
    )
}


export default NavbarLeft;