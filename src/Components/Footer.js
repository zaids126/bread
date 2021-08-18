import React from 'react'

const Footer = () => {
    return (
        <div className='container-fluid container-footer d-flex align-items-end '>
            <div className='container  container-footer-left mb-3'>
                <p>Powered By Bread</p>
                <div>
                <i className="fab fa-instagram logo logo1"></i>
                        <i className="fab fa-facebook-f logo"></i>
                        <i className="fab fa-youtube logo"></i>
                        <i className="fab fa-twitter logo"></i>
                        <i className="fab fa-linkedin logo"></i>
                        <i className="fab fa-spotify logo"></i>
                </div>
            </div>

            <div className='container copyright-container-1  container-footer-right'>
            <p className='d-flex  justify-content-end'><i className="far fa-copyright">Bread 2021 All rights reversesd</i></p>
            <div className='d-flex copyright-container-2  justify-content-end'>
            <p className='px-3'>Terms</p>
            <p className='px-3'>Privacy</p>
            <p className='px-3'>About</p>
            </div>
            </div>
            <div>
           
         

            </div>
        </div>
    )
}

export default Footer
