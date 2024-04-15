import React from 'react'

export default function Property() {
    return (
        <div className='listing'>
            <div className='text-center'>
                <button className='btn mt-4 mb-3 text-white' style={{ border: '1px solid grey' }}>List your property</button>
            </div>
            <hr style={{ color: 'white' }} />
            <ul className='container-fluid d-flex text-white list-unstyled text-center mt-3 mobile-links'>
                <li><a href='#' className='text-decoration-underline fs-6 fw-bold me-3'>Mobile version</a></li>
                <li><a href='#' className='text-decoration-underline fs-6 fw-bold me-3'>Your account</a></li>
                <li><a href='#' className='text-decoration-underline fs-6 fw-bold me-3'>Make changes online to your booking</a></li>
                <li><a href='#' className='text-decoration-underline fs-6 fw-bold me-3'>Customer Service Help</a></li>
                <li><a href='#' className='text-decoration-underline fs-6 fw-bold me-3'>Become an affiliate</a></li>
                <li><a href='#' className='text-decoration-underline fs-6 fw-bold'>Booking.com for Booking</a></li>
            </ul>
        </div>
    )
}
