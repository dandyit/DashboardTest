import React from 'react';

const CreateTickets = ()=>{
    
    return(
        <div className='createTickets'>
            <div className='box'>

            <div className='formInput__inner--box'>
                    <form className='form'>

                        <div className=''>
                            <h3 className='heading-3 heading-3--dark-2 u-margin-bottom-small text-upper'>Create Ticket</h3>
                            
                            <h4 className='heading-4 heading-4--dark'>Name & Time</h4>
                            <div className='u-margin-bottom-small'>
                                <div className='form__box-2'>
                                    <div className='form__group'>
                                        <input className='form__input' type='text' name='text' id='text'
                                                />
                                        <label for='text' className='form__label'>Ticket Name*</label>
                                    </div>
                                    <div className='form__group'>
                                        <input className='form__input' type='text' name='ticketName' id='ticketName'
                                            placeholder='12:01'
                                        />
                                        <label for='ticketName' className='form__label'>Event start Timing</label>
                                    </div>
                                </div>
                            </div>

                            <h4 className='heading-4 heading-4--dark'>Dates</h4>
                            <div className='u-margin-bottom-small'>
                                <div className='form__box-2'>
                                    <div className='form__group'>
                                        <input className='form__input' type='date' name='ticketName' id='ticketName'
                                        />
                                        <label for='ticketName' className='form__label'>Start ticket validity*</label>
                                    </div>
                                    <div className='form__group'>
                                        <input className='form__input' type='date' name='date' id='date'
                                                />
                                        <label for='date' className='form__label'>End ticket validity*</label>
                                    </div>
                                </div>
                            </div>
                            <div className='u-margin-bottom-small'>
                                <div className='form__box-2'>
                                    <div className='form__group'>
                                        <input className='form__input' type='date' name='ticketName' id='ticketName'
                                        />
                                        <label for='ticketName' className='form__label'>Start Selling date*</label>
                                    </div>
                                    <div className='form__group'>
                                        <input className='form__input' type='date' name='date' id='date'
                                                />
                                        <label for='date' className='form__label'>End selling date*</label>
                                    </div>
                                </div>
                            </div>


                            <h4 className='heading-4 heading-4--dark'>Price Info</h4>
                            <div className='u-margin-bottom-small'>
                                <div className='form__box-2'>
                                    <select name='eventType' class="form__select form__select__size-2"
                                        >
                                        <option>Currency Type</option>
                                        <option value='eventType1'>&#36;</option>
                                        <option value='eventType2'>&euro;</option>
                                        <option value='eventType3'>&#8377;</option>
                                        <option value='eventType4'>&#1583;.&#1573;</option>
                                    </select>
                                    {/* <div className='form__group'>
                                        <input className='form__input' type='text' name='ticketPrice' id='ticketPrice'
                                        />
                                        <label for='ticketPrice' className='form__label'>Ticket Price</label>
                                    </div> */}
                                    <div className='form__group'>
                                        <input className='form__input' type='text' name='price' id='price'
                                                />
                                        <label for='price' className='form__label'>Ticket Price</label>
                                    </div>
                                </div>
                            </div>
                            <div className='u-margin-bottom-small'>
                                <div className='form__box-2'>
                                    <div className='form__group'>
                                        <input className='form__input' type='text' name='tax' id='tax'
                                        />
                                        <label for='tax' className='form__label'>Tax in %</label>
                                    </div>
                                    <div className='form__group'>
                                        <input className='form__input' type='text' name='memberPerTicket' id='memberPerTicket'
                                                />
                                        <label for='memberPerTicket' className='form__label'>No. of member allow / ticket</label>
                                    </div>
                                </div>
                            </div>

                            
                            <h4 className='heading-4 heading-4--dark'>Seats Info</h4>
                            <div className='form__group u-margin-bottom-small'>
                                <div className='form__box-2'>
                                    <select name='eventType' class="form__select form__select__size-2"
                                        >
                                        <option>Select Seats</option>
                                        <option value='eventType1'>Limited</option>
                                        <option value='eventType2'>Unlimited</option>
                                    </select>
                                    <div className='form__group'>
                                        <input className='form__input' type='text' name='seat' id='seat'
                                                />
                                        <label for='seat' className='form__label'>Available seats</label>
                                    </div>
                                </div>
                            </div>
                            <div className='form__group'>
                                <div className='form__box-2'>
                                    <select name='status' class="form__select form__select__size-2"
                                        >
                                        <option>Select Status</option>
                                        <option value='status1'>Active</option>
                                        <option value='status2'>Inactive</option>
                                    </select>
                                    {/* <div className='form__group'>
                                        <input className='form__input' type='text' name='seat' id='seat'
                                                />
                                        <label for='seat' className='form__label'>Available seats</label>
                                    </div> */}
                                </div>
                                    <p className='para para--size-11'>
                                        Do you want to live your ticket
                                    </p>
                            </div>
                        </div>
                        
                        <div className='bottom__line'></div>

                        <div className='form__group'>
						        <button className='btn btn--blue' type="submit">Add</button>
                        </div>

                    </form>
                </div>
           
            </div>
        </div>
    )
}

export default CreateTickets;