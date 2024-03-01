import React from 'react'
import Button from './Button'

export default function Offer() {
    return (
        <div>
            <h3>Offers</h3>
            <p>Promotions, deals, and special offers for you</p>
            <div className='card offer-background col-md-12'>
                <h1>New year, new adventures</h1>
                <p>Save 15% or more when you book and stay before April 1, 2024</p>
                <Button />
            </div>

        </div>
    )
}
