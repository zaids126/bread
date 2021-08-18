import React from 'react'
import cardLeftImg from '../Images/janedoe.png'
import cardRightImg from '../Images/yogaimage.png';



const Card = () => {
    return (
      <div className='card-bg'>        
        <div className='container-sm'>
            <div className="container  container-card  d-flex justify-content-center">
                   <div className='container-fluid container-card-inside'>
                        <div className='d-flex'>
                        <div className='m-5'>
                        <img src={cardLeftImg} alt='Not available' className='p-1 image'/>
                      </div>
        
     
                               <div className="container container-box pt-5">
                            <div className="row row-container">
                         <div className="col pb-4 col-excersize "><p className='card-contents'>Yoga</p></div>
                        <div className="col"><p className='card-contents'>Wellness</p></div>
                            <div></div>
                    <div className="col col-fitness"><p className='card-contents'>Fitness</p></div>
                      </div>
                    </div>

                    
                    <div className='pt-5 button-container'>
                   <button type="button" className='btn btn-primary1 mb-4'>Book Trial</button>
                   <button type="button" className='btn btn-primary2'>Contact me</button>


                   </div>
                        
                        </div>
                        
                        <div className='text'>
                        <p className='ml-4 text-dark image-name'>Jane Doe</p>
                      </div>
                      <div className='description-container'>
                        <p className='text-dark '>Hi, I am Jane Doe, your next door fitness instructor with just one goal-Make people fit and healthy.Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
                      </div>
                      <div className='logo-container'>
                        <i className="fab fa-instagram logo"></i>
                        <i className="fab fa-facebook-f logo"></i>
                        <i className="fab fa-youtube logo"></i>
                        <i className="fab fa-twitter logo"></i>
                        <i className="fab fa-linkedin logo"></i>
                        <i className="fab fa-spotify logo"></i>
                      </div>
        <hr className='text-dark'/>
          <div className='container d-flex container-3 pt-2'>
          <i className="fas fa-map-marker-alt text-dark p-1"></i>
          <p className='pad'>Lives in</p><p className='ml-3 pad'><span className='text-dark effect border-color border-radius'> New Delhi</span></p> 
             </div>
             <div className='container d-flex pr-4 container-3'>
             <i className="fas fa-comments text-dark p-1"></i>
          <p className='pad'>Speaks</p><p className='pad'><span className='text-dark effect border-color border-radius'>English </span></p>
          <p className='mr-3 pad'><span className='text-dark effect border-color border-radius'> Hindi </span></p> 
          <p className='pad'><span className='text-dark effect border-color border-radius'> Punjabi </span></p> 
 
             </div>

             
             <div className="container container-3 youtube-container mt-5">
              <div className="row">
                <div className="col">
                  <h3 className='text-dark youtube-container-text '>Check Out My video about 30min yoga for beginners</h3>
                  <div className='mt-5 youtube-container-align'> 
                     <h5 className='youtube-container-content'>Contact me <i className="fas fa-long-arrow-alt-right youtube-container-content"></i></h5>

                  </div>

                     </div>
                <div className="col border-color yoga-image-container border-radius d-flex py-2">
                  <img src={cardRightImg} className='yoga-image' alt='Not available'/>
                  </div>
                    </div>
                      </div>
                <div className='container mt-5 container-email container-3'>
                    <p className='text m-4'>Subscribe to my profile and never miss another update from me.</p>
                
                
                <div className='container d-flex pb-4 container-placeholder'>                  
                   
                <input className="form-control border " type="email"  placeholder="Enter your email"/>
                <button type="button" className="btn btn-primary px-5 border-radius subscribe-btn">Subscribe</button>
                </div>

                    </div>


                      </div>


                   </div>
              </div>
              </div>

        
    )
}

export default Card
