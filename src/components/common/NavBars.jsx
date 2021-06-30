import React from 'react'
import auth from '../../services/authServices'

const NavBars = () => {

    const logout = () => {
        auth.signOut();
        window.location = "/";  
    }
    return (  
        <>
            <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="/">Conferencsey</a>
                <button className="navbar-toggler position-relative d-md-none collapsed" type="button" data-toggle="collapse"
                    data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    {auth.getCurrentUserId() && (
                <>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link" href="/workshop">Workshop presentations</a>
                    </li>
                </ul>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link" href="/research">Research Papers</a>
                    </li>
                </ul>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link" onClick={() => logout()}>Sign out</a>
                    </li>
                </ul>
            </>
                )}
            </nav>
        </>
    );
}
 
export default NavBars;