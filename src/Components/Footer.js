import React from 'react'

export default function Footer() {
    return (
        <div>
            <table className='table'>
                <tr>
                    <td><a href=''>Countries</a></td>
                    <td><a href=''>Homes</a></td>
                    <td><a href=''>Unique places to stay</a></td>
                    <td><a href=''>Car rental</a></td>
                    <td><a href=''>Coronavirus (COVID-19) FAQs</a></td>
                </tr>
                <tr>
                    <td><a href=''>Regions</a></td>
                    <td><a href=''>Apartments</a></td>
                    <td><a href=''>All destinations</a></td>
                    <td><a href=''>Flight finder</a></td>
                    <td><a href=''>About Booking.com</a></td>
                </tr>
                <tr>
                    <td><a href=''>Cities</a></td>
                    <td><a href=''>Resort</a></td>
                    <td><a href=''>All flight destinations</a></td>
                    <td><a href=''>Restuarant reservations</a></td>
                    <td><a href=''>Customer service help</a></td>
                </tr>
                <tr>
                    <td><a href=''>Districts</a></td>
                    <td><a href=''>Villas</a></td>
                    <td><a href=''>All car rental locations</a></td>
                    <td><a href=''>Booking.com for Travel Agents</a></td>
                    <td><a href=''>Partner Help</a></td>
                </tr>
                <tr>
                    <td><a href=''>Airports</a></td>
                    <td><a href=''>Hostels</a></td>
                    <td><a href=''>All vacation destinations</a></td>
                    <td>-</td>
                    <td><a href=''>Careers</a></td>
                </tr>
                <tr>
                    <td><a href=''>Hotels</a></td>
                    <td><a href=''>B&Bs</a></td>
                    <td><a href=''>Reviews</a></td>
                    <td>-</td>
                    <td><a href=''>Sustainability</a></td>
                </tr>
                <tr>
                    <td><a href=''>Places of interest</a></td>
                    <td><a href=''>Guest houses</a></td>
                    <td><a href=''>Discover monthly stay</a></td>
                    <td>-</td>
                    <td><a href=''>Press Center</a></td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>-</td>
                    <td><a href=''>Unpacked: Travel articles</a></td>
                    <td>-</td>
                    <td><a href=''>Safety Resource Center</a></td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>-</td>
                    <td><a href=''>Seasonal and holiday deals</a></td>
                    <td>-</td>
                    <td><a href=''>Investor relations</a></td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>-</td>
                    <td><a href=''>Traveller Review Awards</a></td>
                    <td>-</td>
                    <td><a href=''>Terms and Conditions</a></td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td><a href=''>Partner dispute</a></td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td><a href=''>How We Work</a></td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td><a href=''>Privacy & Cookie statement</a></td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td><a href=''>MSA statement</a></td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td><a href=''>Corporate contact</a></td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td><a href=''>Content guidelines and reporting</a></td>
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
