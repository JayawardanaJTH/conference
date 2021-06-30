import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (  
        <>
        <h2>Home</h2>
        <Link to="/signin-signup" >
        <button>Sign Up | Sign In</button>
        </Link>
        <Link to="/payment" >
        <button>Payment</button>
        </Link>
        <Link to="/documents" >
        <button>documents</button>
        </Link>
        </>
    );
}
 
export default Home;