import React from 'react'

export default function Property() {
    return (
        <div className='listing'>
            <div>
                <button className='btn btn-light' style={{ border: '1px solid grey' }}>List your property</button>
            </div>
            <hr style={{ color: 'white' }} />
            <ul className='d-flex'>
                <li><a href='#'>Mobile version</a></li>
                <li><a href='#'>Your account</a></li>
                <li><a href='#'>Make changes online to your booking</a></li>
                <li><a href='#'>Customer Service Help</a></li>
                <li><a href='#'>Become an affiliate</a></li>
                <li><a href='#'>Booking.com for Booking</a></li>
            </ul>
        </div>
    )
}
