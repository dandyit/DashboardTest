import React from 'react';
import managerPhoto from '../img/managerPhoto.jpg';
import card from '../img/card-01.jpg';
import card02 from '../img/card-02.jpg';
import card03 from '../img/card-03.jpg';
import card04 from '../img/card-04.jpg';
import card05 from '../img/card-05.jpg';


const Profile = ()=>{
    return(
        <section className='profiles'>
            <div className='profile box'>
                <div className='profile--para'>
                    <h5 className='heading-5 text-upper'>Manager</h5>
                    <h2 className='heading-2 heading-2--dark-2 text-cap'>Dr. Angela Yu</h2>
                    <h5 className='heading-5 heading-2--dark u-margin-top-sub-small text-upper'>organizer and Event Manager</h5>
                    <div className='profile--para__stats u-margin-top-medium'>
                        <div className='profile--para__stats--tv-participant'>
                            <p className='para'>Total participant</p>
                            <h3 className='heading-3 heading-3--dark-2'>1001</h3>
                        </div>
                        <div className='profile--para__stats--tv-reviews'>
                            <p className='para'>Reviews</p>
                            <h3 className='heading-3 heading-3--dark-2'>501</h3>
                        </div>
                    </div>
                    <div className='u-margin-top-medium'>
                        <h4 className='heading-4 heading-4--dark-2 text-cap'>About</h4>
                        <p className='para para--dark'>
                            I'm Angela, I'm a developer with a passion for teaching. I'm the lead instructor at the London App 
                            Brewery, London's leading Programming Bootcamp. I've helped hundreds of thousands of students learn 
                            to code and change their lives by becoming a developer. I've been invited by companies such as Twitter, 
                            Facebook and Google to teach their employees.

                            My first foray into programming was when I was just 12 years old, wanting to build my own Space Invader
                            game. Since then, I've made hundred of websites, apps and games. But most importantly, I realised that 
                            my greatest passion is teaching.

                            I spend most of my time researching how to make learning to code fun and make hard concepts easy to 
                            understand. I apply everything I discover into my bootcamp courses. In my courses, you'll find lots of 
                            geeky humour but also lots of explanations and animations to make sure everything is easy to understand.

                            I'll be there for you every step of the way.
                        </p>
                    </div>
                    <h4 className='heading-4 heading-4--dark-2 
                    u-margin-top-medium u-margin-bottom-small text-cap'>
                        My events ( 4 )
                    </h4>
                    <div className='profile--para__box'>
                        {/* Place Repeating card here... */}
                        <div className='profile--para__box--card'>
                            <img src={card02} className='profile--para__box--card-img' alt='event name' />
                            <p className='profile--para__box--card__date text-cap'>
                               Sat, 4 June 2021
                            </p>
                            <p className='profile--para__box--card__event-name text-cap'>
                                Opening Night Gala at Delhi Comedy Festival 2020
                            </p>
                            <p className='profile--para__box--card__name'>
                                Dr. Angela Yu
                            </p>
                            <p className='profile--para__box--card__rating'>
                                <span className='profile--para__box--card__rating--number'>4.5</span>
                                <span className='profile--para__box--card__rating--star'>
                                    * * * * *
                                </span>
                                <span className='profile--para__box--card__rating--person'>( 101 )</span>
                            </p>
                            <p className='profile--para__box--card__location'>
                                <i className="glyph-icon flaticon-locate"> </i>
                                San Clemente Palace Kempinski Venice
                            </p>
                            <div  className='profile--para__box--card__days__item'>
                                <span>
                                    3 days event
                                </span>
                                <span>
                                    12 stops
                                </span>
                                <span>
                                    10 person per ticket
                                </span>
                            </div>
                            <p className='profile--para__box--card__currentPrice'>
                                <span className='text-upper'>45% off</span>
                                <s className='profile--para__box--card__currentPrice__discount'>
                                    <span>20%</span>
                                </s>
                            </p>
                            {/* <p className='profile--para__box--card__currentPrice'>
                                <span>₹12000</span>
                                <s className='profile--para__box--card__currentPrice__discount'>
                                    <span>₹20000</span>
                                </s>
                            </p> */}
                            
                        </div>
                   
                        <div className='profile--para__box--card'>
                            <img src={card03} className='profile--para__box--card-img' alt='event name' />
                            <p className='profile--para__box--card__date text-cap'>
                               Sat, 4 June 2021
                            </p>
                            <p className='profile--para__box--card__event-name text-cap'>
                                Opening Night Gala at Delhi Comedy Festival 2020
                                Opening Night Gala at Delhi Comedy Festival 2020
                            </p>
                            <p className='profile--para__box--card__name'>
                                Dr. Angela Yu
                            </p>
                            <p className='profile--para__box--card__rating'>
                                <span className='profile--para__box--card__rating--number'>4.5</span>
                                <span className='profile--para__box--card__rating--star'>
                                    * * * * *
                                </span>
                                <span className='profile--para__box--card__rating--person'>( 101 )</span>
                            </p>
                            <p className='profile--para__box--card__location'>
                                <i className="glyph-icon flaticon-locate"> </i>
                                San Clemente Palace Kempinski Venice
                                San Clemente Palace Kempinski Venice
                            </p>
                            <div  className='profile--para__box--card__days__item'>
                                <span>
                                    3 days event
                                </span>
                                <span>
                                    12 stops
                                </span>
                                <span>
                                    10 person per ticket
                                    10 person per ticket
                                </span>
                            </div>
                            <p className='profile--para__box--card__currentPrice'>
                                <span className='text-upper'>45% off</span>
                                <s className='profile--para__box--card__currentPrice__discount'>
                                    <span>20%</span>
                                </s>
                            </p>
                            {/* <p className='profile--para__box--card__currentPrice'>
                                <span>₹12000</span>
                                <s className='profile--para__box--card__currentPrice__discount'>
                                    <span>₹20000</span>
                                </s>
                            </p> */}
                            
                        </div>
                   
                        <div className='profile--para__box--card'>
                            <img src={card04} className='profile--para__box--card-img' alt='event name' />
                            <p className='profile--para__box--card__date text-cap'>
                               Sat, 4 June 2021
                            </p>
                            <p className='profile--para__box--card__event-name text-cap'>
                                Opening Night Gala at Delhi Comedy Festival 2020
                            </p>
                            <p className='profile--para__box--card__name'>
                                Dr. Angela Yu
                            </p>
                            <p className='profile--para__box--card__rating'>
                                <span className='profile--para__box--card__rating--number'>4.5</span>
                                <span className='profile--para__box--card__rating--star'>
                                    * * * * *
                                </span>
                                <span className='profile--para__box--card__rating--person'>( 101 )</span>
                            </p>
                            <p className='profile--para__box--card__location'>
                                <i className="glyph-icon flaticon-locate"> </i>
                                San Clemente Palace Kempinski Venice
                            </p>
                            <div  className='profile--para__box--card__days__item'>
                                <span>
                                    3 days event
                                </span>
                                <span>
                                    12 stops
                                </span>
                                <span>
                                    10 person per ticket
                                </span>
                            </div>
                            <p className='profile--para__box--card__currentPrice'>
                                <span className='text-upper'>45% off</span>
                                <s className='profile--para__box--card__currentPrice__discount'>
                                    <span>20%</span>
                                </s>
                            </p>
                            {/* <p className='profile--para__box--card__currentPrice'>
                                <span>₹12000</span>
                                <s className='profile--para__box--card__currentPrice__discount'>
                                    <span>₹20000</span>
                                </s>
                            </p> */}
                            
                        </div>
                   
                        <div className='profile--para__box--card'>
                            <img src={card05} className='profile--para__box--card-img' alt='event name' />
                            <p className='profile--para__box--card__date text-cap'>
                               Sat, 4 June 2021
                            </p>
                            <p className='profile--para__box--card__event-name text-cap'>
                                Opening Night Gala at Delhi Comedy Festival 2020
                            </p>
                            <p className='profile--para__box--card__name'>
                                Dr. Angela Yu
                            </p>
                            <p className='profile--para__box--card__rating'>
                                <span className='profile--para__box--card__rating--number'>4.5</span>
                                <span className='profile--para__box--card__rating--star'>
                                    * * * * *
                                </span>
                                <span className='profile--para__box--card__rating--person'>( 101 )</span>
                            </p>
                            <p className='profile--para__box--card__location'>
                                <i className="glyph-icon flaticon-locate"> </i>
                                San Clemente Palace Kempinski Venice
                            </p>
                            <div  className='profile--para__box--card__days__item'>
                                <span>
                                    3 days event
                                </span>
                                <span>
                                    12 stops
                                </span>
                                <span>
                                    10 person per ticket
                                </span>
                            </div>
                            <p className='profile--para__box--card__currentPrice'>
                                <span className='text-upper'>45% off</span>
                                <s className='profile--para__box--card__currentPrice__discount'>
                                    <span>20%</span>
                                </s>
                            </p>
                            {/* <p className='profile--para__box--card__currentPrice'>
                                <span>₹12000</span>
                                <s className='profile--para__box--card__currentPrice__discount'>
                                    <span>₹20000</span>
                                </s>
                            </p> */}
                            
                        </div>
                   
                        <div className='profile--para__box--card'>
                            <img src={card} className='profile--para__box--card-img' alt='event name' />
                            <p className='profile--para__box--card__date text-cap'>
                               Sat, 4 June 2021
                            </p>
                            <p className='profile--para__box--card__event-name text-cap'>
                                Opening Night Gala at Delhi Comedy Festival 2020
                            </p>
                            <p className='profile--para__box--card__name'>
                                Dr. Angela Yu
                            </p>
                            <p className='profile--para__box--card__rating'>
                                <span className='profile--para__box--card__rating--number'>4.5</span>
                                <span className='profile--para__box--card__rating--star'>
                                    * * * * *
                                </span>
                                <span className='profile--para__box--card__rating--person'>( 101 )</span>
                            </p>
                            <p className='profile--para__box--card__location'>
                                <i className="glyph-icon flaticon-locate"> </i>
                                San Clemente Palace Kempinski Venice
                            </p>
                            <div  className='profile--para__box--card__days__item'>
                                <span>
                                    3 days event
                                </span>
                                <span>
                                    12 stops
                                </span>
                                <span>
                                    10 person per ticket
                                </span>
                            </div>
                            <p className='profile--para__box--card__currentPrice'>
                                <span className='text-upper'>45% off</span>
                                <s className='profile--para__box--card__currentPrice__discount'>
                                    <span>20%</span>
                                </s>
                            </p>
                            {/* <p className='profile--para__box--card__currentPrice'>
                                <span>₹12000</span>
                                <s className='profile--para__box--card__currentPrice__discount'>
                                    <span>₹20000</span>
                                </s>
                            </p> */}
                            
                        </div>
                   
                    </div>
                </div>
                <div className='profile--story'>
                    <div className='profile--story-box'>
                        <img className='profile--story-box__manager--img u-margin-bottom-medium' src={managerPhoto} alt='Manager images'/>
                        <a href='#!' className='btn-border u-margin-top-sub-small'>Website</a>
                        <a href='#!' className='btn-border u-margin-top-sub-small'>FaceBook</a>
                        <a href='#!' className='btn-border u-margin-top-sub-small'>Twitter</a>
                        <a href='#!' className='btn-border u-margin-top-sub-small'>LinkedIn</a>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Profile;