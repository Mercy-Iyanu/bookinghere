import React from 'react';
import Button from './Button';

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-white navbar-white">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><a href="/" className="bookings-logo">
                        <img
                            src="/images/booking.com.png"
                            alt="bookings-logo"
                            className="w-100 h-100"
                        />
                    </a></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">NGN</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">List your property</a>
                            </li>
                            <li class="nav-item">
                                <Button />
                            </li>
                            <li class="nav-item">
                                <button className='btn btn-primary'>Sign in</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="container-fluid">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <button className='btn'>
                                <img src={process.env.PUBLIC_URL + './images/carrental.svg'} alt='Car' className='img-fluid ' />
                                Stays
                            </button>
                        </li>
                        <li class="nav-item">
                            <button className='btn'>
                                <img
                                    src="/images/aeroplane.svg"
                                    alt="plane"
                                    className="w-100 h-100"
                                />
                                Flights
                            </button>
                        </li>
                        <li class="nav-item">
                            <button className='btn'>
                                <img
                                    src="/images/carrentals.svg"
                                    alt="car"
                                    className="w-100 h-100"
                                />
                                Car rentals
                            </button>
                        </li>
                        <li class="nav-item">
                            <button className='btn'>
                                <img
                                    src="/images/attractions.svg"
                                    alt="attractions"
                                    className="w-100 h-100"
                                />
                                Attractions
                            </button>
                        </li>
                        <li class="nav-item">
                            <button className='btn'>
                                <img
                                    src="/images/taxi.svg"
                                    alt="taxi"
                                    className="w-100 h-100"
                                />
                                Airport Taxis
                            </button>
                        </li>
                    </ul>
                </div>
            </nav >
        </div >
    )

}