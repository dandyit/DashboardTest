import React from 'react';


const NoMatch = ()=>{
    return(
        <div className='noMatch box'>
            <div className='noMatch--box'>
                <h2 className='heading-2 heading-2--dark'>
                    Sorry! 
                </h2>
                <h2 className='heading-2'>
                    <span className=' heading-2--dark-2'>404</span> page not found.
                </h2>
            </div>
        </div>
    )
}

export default NoMatch;