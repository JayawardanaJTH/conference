import React from 'react'

const HomeHeader = () => {
    return ( 
        <>
        <div className="main-section">
        {/* <!-- topic --> */}
        <div className="header">
            <div className="row justify-content-center">
                <h1>Conference name</h1>
            </div>
            <div className="row justify-content-center">
                <h4 style={{fontFamily: 'Gill Sans Gill Sans MT Calibri Trebuchet MS sans-serif'}}>Event will
                    start in</h4>
            </div>
        </div>
        <div className="text-center countdown">
            <div className="bg-danger countdown-box" >
                <div>
                    <span id="month"></span>
                    <h5>Months</h5>
                </div>
            </div>
            <div className="bg-danger countdown-box" >
                <div >
                    <span id="day"></span>
                    <h5>Days</h5>
                </div>
            </div>
            <div className="bg-danger countdown-box" >
                <div >
                    <span id="hour"></span>
                    <h5>Hours</h5>
                </div>
            </div>
            <div className="bg-danger countdown-box" >
                <div >
                    <span id="mins"></span>
                    <h5>Minutes</h5>
                </div>
            </div>
            <div className="bg-danger countdown-box" >
                <div >
                    <span id="sec"></span>
                    <h5>Seconds</h5>
                </div>
            </div>
        </div>
        </div>
        </>
     );
}
 
export default HomeHeader;