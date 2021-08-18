import React from 'react'
import carousel1left from '../Images/carousel1.png'
import carousel2middle from '../Images/carousel2.png'
import carousel3right from '../Images/carousel3.png'


const Carousel = () => {
    return (
        <div className='container-fluid carousel-bg d-flex justify-content-center'>
            <h3 className='position-absolute mt-5'>BROWSE ALL MY OFFERINGS</h3>       
             <div className='container-fluid container-carousel d-flex justify-content-between align-items-center'>
                                
           <div className='container-carousel1 border-color1 p-2 border-radius'><img src={carousel1left} alt='Not available'/></div> 
           <div className='container-carousel2 border-color1 p-2 border-radius'><img src={carousel2middle} className='carousel-image-2' alt='Not available'/>
           </div> 
           <div className='container-carousel3 border-color1 p-2 border-radius'><img src={carousel3right} alt='Not available'/></div> 
           <div className='carousel-icons position-absolute'>
                <i className="fas fa-arrow-circle-left"></i>
            <i className="fas fa-arrow-circle-right"></i>
            </div>
        </div>
       
        </div>

    )
}

export default Carousel;
