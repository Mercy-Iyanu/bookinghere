import React from 'react'

export default function Offer() {
    return (
        <div>
            <h3>Offers</h3>
            <p>Promotions, deals, and special offers for you</p>
            <div>
                <img src={process.env.PUBLIC_URL + './images/offers.jpeg'} alt='Man with his kids' className='img-fluid' />
            </div>
        </div>
    )
}
