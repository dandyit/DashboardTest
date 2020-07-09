import React from 'react';
import {Link} from 'react-router-dom';
import popupImg from '../img/9.jpg';
import popupImg1 from '../img/4m.jpg';
import popupImg2 from '../img/11.jpg';

const PopUp = ()=>{
    return(
        <div className='popup' id='popup'>
            <div className='popup__content'>
                <div className='popup__left'>
                    <img src={popupImg1} className='popup__img' alt='' />
                    <img src={popupImg} className='popup__img' alt='' />
                    <img src={popupImg2} className='popup__img' alt='' />
                </div>
                <div className='popup__right'>
                    <Link to='/' className='popup__close'>x</Link>
                    <h2 className='heading-2 u-margin-bottom-small'>Hello Hi</h2>
                    <h3 className='heading-3 u-margin-bottom-small'>How are you ?</h3>
                    <p  className='popup__text u-margin-bottom-medium'>
                        Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been 
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                        type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged
                    </p>
                    <a href='/Graphs' className='btn btn--blue'>watch now</a>
                </div>
            </div>
        </div>
    )
}

export default PopUp;