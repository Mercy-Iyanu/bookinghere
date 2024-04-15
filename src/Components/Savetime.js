import React from 'react'

export default function Savetime() {
    return (
        <div className='save-time text-center'>
            <h4 className='h4 mb-2'>Save time, save money!</h4>
            <h6 className='h6 mb-3'>Sign up and we'll send the best deals to you</h6>
            <div className="input-group text-center">
                <input type="email" class="form-control form-control-lg" placeholder="Your email address" />
                <button className="btn btn-success" type="submit">Submit</button>
            </div>
        </div>
    )
}
