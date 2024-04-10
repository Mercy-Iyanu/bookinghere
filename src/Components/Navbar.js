import React from 'react';
import Button from './Button';
import '../App.css';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><a href="/" className="bookings-logo">
                        <img
                            src="/images/bookingcom 1.svg"
                            alt="bookings-logo"
                            className="w-100 h-100"
                        // style={{ width: '100', height: '80' }}
                        />
                    </a></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="collapsibleNavbar">
                        <ul className="navbar-nav booking-link">
                            <li className="nav-item">
                                <a className="nav-link text-white inactive-link" href="#">NGN</a>
                            </li>
                            <li>
                                <a className='nav-link' href='#'>
                                    <img
                                        src="/images/us-flag.svg"
                                        alt="bookings-logo"
                                        className="w-100 h-100 inactive-link"
                                    />
                                </a>
                            </li>
                            <li>
                                <a className='nav-link' href='#'>
                                    <img
                                        src="/images/help-2.svg"
                                        alt="help-icon"
                                        className="w-20 h-20 inactive-link"
                                    />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white inactive-link" href="#">List your property</a>
                            </li>
                            <li className="nav-item">
                                <Button />
                            </li>
                            <li className="nav-item">
                                <button className='btn btn-light'>Sign in</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container-fluid">
                <ul className="navbar-nav d-flex flex-row no-wrap">
                    <li className="nav-item">
                        <button className='btn d-flex align-items-center text-white active-button'>
                            <img src={process.env.PUBLIC_URL + './images/carrental.svg'} alt='Car' className='img-fluid mr-2' />
                            <span>Stays</span>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className='btn d-flex align-items-center text-white inactive-button'>
                            <img src="/images/aeroplane.svg" alt="plane" className="w-200 h-200 mr-2" />
                            <span>Flights</span>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className='btn d-flex align-items-center text-white inactive-button'>
                            <img src="/images/carrental.svg" alt="car" className="w-200 h-200 mr-2" />
                            <span>Car rentals</span>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className='btn d-flex align-items-center text-white inactive-button'>
                            <img src="/images/attractions.svg" alt="attractions" className="w-200 h-200 mr-2" />
                            <span>Attractions</span>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className='btn d-flex align-items-center text-white inactive-button'>
                            <img src="/images/taxi.svg" alt="taxi" className="w-50 h-50 mr-2" />
                            <span>Airport Taxis</span>
                        </button>
                    </li>
                </ul>
            </div>



        </div >
    )

}