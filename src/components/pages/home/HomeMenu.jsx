import React from 'react'

const HomeMenu = () => {
    return ( 
        <>
            <div className="menu text-white center">
        <div className="center-menu"></div>
        {/*  */}
        <div className="menu-item menu1">
            <a href="/signin-signup" className="text-decoration-none text-white">
                <div className="row">
                    <div className="col">
                        <i className="fa fa-user fa-2x"></i>
                    </div>
                    <div className="col">
                        <h5>Login/Register</h5>
                    </div>
                </div>
            </a>
        </div>
        {/*  */}
        <div className="menu-item menu2">
            <a href="#events" className="text-decoration-none text-white">
                <div className="row">
                    <div className="col">
                        <i className="fa fa-user-alt fa-2x"></i>
                    </div>
                    <div className="col">
                        <h5>Events </h5>
                    </div>
                </div>
            </a>
        </div>
        <div className="menu-item menu3">
            <a href="#about" className="text-decoration-none text-white">
                <div className="row">
                    <div className="col">
                        <i className="far fa-question-circle fa-2x"></i>
                    </div>
                    <div className="col">
                        <h5>About </h5>
                    </div>
                </div>
            </a>
        </div>
        <div className="menu-item menu4">
            <a href="#speakers" className="text-decoration-none text-white">
                <div className="row">
                    <div className="col">
                        <i className="fa fa-users fa-2x"></i>
                    </div>
                    <div className="col">
                        <h5>Speakers </h5>

                    </div>
                </div>
            </a>
        </div>
    </div>
        </>
     );
}
 
export default HomeMenu;