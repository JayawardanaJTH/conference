import React from 'react'

const Footers = () => {
    return ( 
        <>
            <footer className="bg-dark text-white-50">
                <div className="row no-gutters pt-5 pl-5 pr-5 mt-4 justify-content-center">
                    <div className="col-12 col-md-6">
                        <h5> <i className="fas fa-phone-square-alt"></i>&nbsp; Contact : 0791234567</h5>
                    </div>
                    <div className="col-12 col-md-6">
                        <h5> <i className="fas fa-envelope"></i>&nbsp; Email : abhiru@gmail.com</h5>
                    </div>
                    <p className="mt-3">Developed by &copy; Team Abhiru</p>
                </div>
            </footer>
        </>
     );
}
 
export default Footers;