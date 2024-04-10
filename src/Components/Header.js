import React from 'react';
import Navbar from './Navbar';
import Search from './Search';

export default function Header() {
    return (
        <div className='header'>
            <Navbar />
            <div className="container-fluid find-stay">
                <h1 className="h1 text-3x fw-bold" style={{ fontSize: '3.5rem' }}>Find your next stay</h1>
                <h4 className="h4">Search deals on hotels, homes and much more...</h4>
            </div>
            <Search />
        </div>
    )
}
