import React from 'react'

export default function Search() {
    return (
        <div className='container-fluid'>
            <form>
                <div className="row">
                    <div className="col">
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="bi bi-envelope-fill"></i> {/* Example of using Bootstrap icons */}
                            </span>
                            <input type="text" className="form-control form-control-lg" placeholder="Where are you going?" name="text" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="bi bi-lock-fill"></i> {/* Example of using Bootstrap icons */}
                            </span>
                            <input type="calendar" className="form-control form-control-lg" placeholder="Check-in Date - Check-out Date" name="calendar" />
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}
