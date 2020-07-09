import React from 'react';
// import {Link} from 'react-router-dom';

const TopNavbar = ()=>{
	return(
		<div className='topNavbar'>
			<div className='topNavbar__left'>
				<div className='topNavbar--box'>
					<span>Dashboard </span>
					{/* <i class="glyph-icon flaticon-vr-glass"></i>
					<span className='topNavbar__left--text-size'>Search</span> */}
				</div>
			</div>
			<div className='topNavbar__right'>
				<span className='topNavbar__right--box' >
					<i class="glyph-icon flaticon-heartsease topNavbar__right--icon"></i>
					<i class="glyph-icon flaticon-man topNavbar__right--icon"></i>
					<i class="glyph-icon flaticon-vr-glass topNavbar__right--icon"></i> 
					<i class="glyph-icon flaticon-locate topNavbar__right--icon"></i> 
				</span>
			</div>
		</div>
		)
}

export default TopNavbar;