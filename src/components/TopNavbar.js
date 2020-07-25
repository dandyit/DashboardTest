import React from 'react';
import {Link} from 'react-router-dom';

const TopNavbar = ()=>{
	return(
		<div className='topNavbar'>
			<div className='topNavbar__left'>
				<div className='topNavbar--box'>
					<span>Manager Dashboard </span>
					{/* <i class="glyph-icon flaticon-vr-glass"></i>
					<span className='topNavbar__left--text-size'>Search</span> */}
				</div>
			</div>
			<div className='topNavbar__right'>
				<span className='topNavbar__right--box' >
					{/* <i className="glyph-icon flaticon-heartsease topNavbar__right--icon"></i>
					<i className="glyph-icon flaticon-vr-glass topNavbar__right--icon"></i> 
					<i className="glyph-icon flaticon-locate topNavbar__right--icon"></i>  */}
						<Link to='/SignUp' className='topNavbar__link '>
							{/* <i className="glyph-icon flaticon-man topNavbar__right--icon"></i> */}
							<span className=''> SignUp </span>
						</Link>
						<Link to='/LogIn' className='topNavbar__link '>
							{/* <i className="glyph-icon flaticon-man topNavbar__right--icon"></i> */}
							<span> LogIn </span>
						</Link>
				</span>
			</div>
		</div>
		)
}

export default TopNavbar;