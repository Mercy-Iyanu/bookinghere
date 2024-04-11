import React from 'react'
import Button from './Button'

export default function Offer() {
    return (
        <div>
            <div className='container-fluid mt-5'>
                <h3 className='h3 fw-bold'>Offers</h3>
                <p>Promotions, deals, and special offers for you</p>
            </div>
            <div className='card offer-background col-md-12'>
                <h4 className='h4 fw-bold mb-3'>New year, new adventures</h4>
                <p className='mb-3'>Save 15% or more when you book and stay before April 1, 2024</p>
                <button className='btn btn-primary'>Find Early 2024 Deals</button>
            </div>

        </div>
    )
}
