import React from 'react'

export default function Trending() {
    return (
        <div>
            <div className='container-fluid mt-5 mb-2'>
                <h3 className='h3 fw-bold'>Trending destinations</h3>
                <p>Most popular choices for travelers from Nigeria</p>
            </div>
            <div className='container-fluid'>
                <table className='table' style={{ width: '85%' }}>
                    <tr>
                        <td>
                            <img src={process.env.PUBLIC_URL + './images/lagos.jpg'} alt='Man with his kids' className='img-fluid ' />
                        </td>
                        <td>
                            <img src={process.env.PUBLIC_URL + './images/abuja.jpg'} alt='Man with his kids' className='img-fluid ' />
                        </td>
                    </tr>
                </table>
                <table className='table' style={{ width: '85%' }}>
                    <tr>
                        <td>
                            <img src={process.env.PUBLIC_URL + './images/ikeja.jpg'} alt='Man with his kids' className='img-fluid ' />
                        </td>
                        <td>
                            <img src={process.env.PUBLIC_URL + './images/lekki.jpg'} alt='Man with his kids' className='img-fluid ' />
                        </td>
                        <td>
                            <img src={process.env.PUBLIC_URL + './images/london.jpg'} alt='Man with his kids' className='img-fluid ' />
                        </td>
                    </tr>
                </table>
            </div>
        </div >
    )
}
