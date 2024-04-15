import React from 'react'

export default function Footer() {
    return (
        <div>
            <table className='table mt-3'>
                <tr>
                    <td><a href='#' className='text-primary foot-link'>Countries</a></td>
                    <td><a href='#' className='text-primary foot-link'>Homes</a></td>
                    <td><a href='#' className='text-primary foot-link'>Unique places to stay</a></td>
                    <td><a href='#' className='text-primary foot-link'>Car rental</a></td>
                    <td><a href='#' className='text-primary foot-link'>Coronavirus (COVID-19) FAQs</a></td>
                </tr>
                <tr>
                    <td><a href='#' className='text-primary foot-link'>Regions</a></td>
                    <td><a href='#' className='text-primary foot-link'>Apartments</a></td>
                    <td><a href='#' className='text-primary foot-link'>All destinations</a></td>
                    <td><a href='#' className='text-primary foot-link'>Flight finder</a></td>
                    <td><a href='#' className='text-primary foot-link'>About Booking.com</a></td>
                </tr>
                <tr>
                    <td><a href='#' className='text-primary foot-link'>Cities</a></td>
                    <td><a href='#' className='text-primary foot-link'>Resort</a></td>
                    <td><a href='#' className='text-primary foot-link'>All flight destinations</a></td>
                    <td><a href='#' className='text-primary foot-link'>Restuarant reservations</a></td>
                    <td><a href='#' className='text-primary foot-link'>Customer service help</a></td>
                </tr>
                <tr>
                    <td><a href='#' className='text-primary foot-link'>Districts</a></td>
                    <td><a href='#' className='text-primary foot-link'>Villas</a></td>
                    <td><a href='#' className='text-primary foot-link'>All car rental locations</a></td>
                    <td><a href='#' className='text-primary foot-link'>Booking.com for Travel Agents</a></td>
                    <td><a href='#' className='text-primary foot-link'>Partner Help</a></td>
                </tr>
                <tr>
                    <td><a href='#' className='text-primary foot-link'>Airports</a></td>
                    <td><a href='#' className='text-primary foot-link'>Hostels</a></td>
                    <td><a href='#' className='text-primary foot-link'>All vacation destinations</a></td>
                    <td>-</td>
                    <td><a href='#' className='text-primary foot-link'>Careers</a></td>
                </tr>
                <tr>
                    <td><a href='#' className='text-primary foot-link'>Hotels</a></td>
                    <td><a href='#' className='text-primary foot-link'>B&Bs</a></td>
                    <td><a href='#' className='text-primary foot-link'>Reviews</a></td>
                    <td>-</td>
                    <td><a href='#' className='text-primary foot-link'>Sustainability</a></td>
                </tr>
                <tr>
                    <td><a href='#' className='text-primary foot-link'>Places of interest</a></td>
                    <td><a href='#' className='text-primary foot-link'>Guest houses</a></td>
                    <td><a href='#' className='text-primary foot-link'>Discover monthly stay</a></td>
                    <td>-</td>
                    <td><a href='#' className='text-primary foot-link'>Press Center</a></td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>-</td>
                    <td><a href='#' className='text-primary foot-link'>Unpacked: Travel articles</a></td>
                    <td>-</td>
                    <td><a href='#' className='text-primary foot-link'>Safety Resource Center</a></td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>-</td>
                    <td><a href='#' className='text-primary foot-link'>Seasonal and holiday deals</a></td>
                    <td>-</td>
                    <td><a href='#' className='text-primary foot-link'>Investor relations</a></td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>-</td>
                    <td><a href='#' className='text-primary foot-link'>Traveller Review Awards</a></td>
                    <td>-</td>
                    <td><a href='#' className='text-primary foot-link'>Terms and Conditions</a></td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td><a href='#' className='text-primary foot-link'>Partner dispute</a></td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td><a href='#' className='text-primary foot-link'>How We Work</a></td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td><a href='#' className='text-primary foot-link'>Privacy & Cookie statement</a></td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td><a href='#' className='text-primary foot-link'>MSA statement</a></td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td><a href='#' className='text-primary foot-link'>Corporate contact</a></td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td><a href='#' className='text-primary foot-link'>Content guidelines and reporting</a></td>
                </tr>
            </table>
            <div>
                <a href=''>Extranet Log-in</a>
            </div>
            <div>
                <p>Copyright © 1996–2024 Booking.com™. All rights reserved.</p>
            </div>
            <div>
                <p>Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.</p>
            </div>
            <div className='navbar navbar-expand-sm bg-light justify-content-center'>
                <img src={process.env.PUBLIC_URL + './images/booking.com.png'} alt='bookingcom' className='img-fluid' />
                <img src={process.env.PUBLIC_URL + './images/priceline.com.png'} alt='pricelinecom' className='img-fluid' />
                <img src={process.env.PUBLIC_URL + './images/kayak.png'} alt='kayak' className='img-fluid' />
                <img src={process.env.PUBLIC_URL + './images/agada.png'} alt='agada' className='img-fluid' />
                <img src={process.env.PUBLIC_URL + './images/opentable.png'} alt='opentable' className='img-fluid' />
            </div>
        </div>
    )
}
