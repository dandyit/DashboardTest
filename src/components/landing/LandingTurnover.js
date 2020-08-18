import React from 'react';
import demoVideo from '../../img/viedo.m4v';

const TurnoverContent = ()=>{
    return(
        <div className='turnover__content'>
                <h1 className='heading-1 para--light-3 text-cap'> Manage your own events</h1>
                <p className='para--size-20 para--light-4'>
                    How you can increase your earning and sells worldwide.
                    How you can increase your earning and sells worldwide.
                    Ticket Viral is the easiest way to sell tickets and manage registration for 
                    any kind of event, and it's totally free for free events.
                </p>
        </div>
    )
}
const TurnoverPicture = ()=>{
    return(
        <div className='turnover__picture'>
                {/* <img className='turnover__picture--img' src={imgld} /> */}
                <video class="our-story-card-video" autoplay="" playsinline="" muted="" loop="5">
                    <source src={demoVideo} type="video/mp4"></source>
                </video>
        </div>
    )
}

export {TurnoverContent,TurnoverPicture};