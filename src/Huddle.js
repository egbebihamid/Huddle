import React from 'react'
import './Huddle.css'
import pic1 from './images/imag.jpeg'
const Huddle = () => {
    return (
        <div>
             <div className='overall'>
              <div className='hud'>
                 <img src={pic1} alt="" /> 
                 <h1>Huddle</h1>
              </div>
              <div className='try'>
                 Try it Free
              </div>
            </div>
        </div>
    )
}

export default Huddle
