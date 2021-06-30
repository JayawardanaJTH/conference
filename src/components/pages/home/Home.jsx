import React from 'react'
import './Home.css'
import NavBars from '../../common/NavBars'
import HomeAbout from './HomeAbout';
import HomeHeader from './HomeHeader';
import HomeEvents from './HomeEvents'
import HomeMenu from './HomeMenu';
import HomeSpeakers from './HomeSpeakers';

const Home = () => {
    return (  
        <div className="home-body">
            <NavBars />
            <div className="home-container-fluid">
                <HomeHeader />    
                <HomeMenu />
                <HomeAbout />
                <HomeSpeakers />
                <HomeEvents/>
            </div>
        </div>
    );
}
 
export default Home;