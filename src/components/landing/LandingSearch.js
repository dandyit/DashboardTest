import React from 'react';
import imgld from '../../img/9.jpg';

const SearchContent = ()=>{
    return(
        <div className='search__content'>
                <h1 className='heading-1 para--light-3'> Search on search engine</h1>
                <p className='para--size-20 para--light-4'>
                    ticketviral.com
                    <br/>
                    Here you can create your event with tickets.
                </p>
        </div>
    )
}
const SearchPicture = ()=>{
    return(
        <div className='search__picture'>
            <img className='turnover__picture--img' src={imgld} alt='TV demo graphics'/>
        </div>
    )
}

export {SearchContent, SearchPicture};