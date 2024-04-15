import React from 'react'

export default function Property() {
    return (
        <div className='listing'>
            <div>
                <button className='btn btn-light' style={{ border: '1px solid grey' }}>List your property</button>
            </div>
            <hr style={{ color: 'white' }} />
            <ul className='d-flex text-white text-1xl list-unstyled text-center mt-3'>
                <li><a href='#' className='text-decoration-underline fs-6'>Mobile version</a></li>
                <li><a href='#' className='text-decoration-underline fs-6'>Your account</a></li>
                <li><a href='#' className='text-decoration-underline fs-6'>Make changes online to your booking</a></li>
                <li><a href='#' className='text-decoration-underline fs-6'>Customer Service Help</a></li>
                <li><a href='#' className='text-decoration-underline fs-6'>Become an affiliate</a></li>
                <li><a href='#' className='text-decoration-underline fs-6'>Booking.com for Booking</a></li>
            </ul>
        </div>
    )
}
