import React from 'react'
import './Footer.css'

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

import Wave from '../../img/wave.png'; // Adjust the path as needed


export const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="Wave" style={{ width: '100%' }} />
      <div className="f-content">
        <span style={{color:' #DDF8FE'}}>thumbnailcreators@gmail.com</span>
        <div className="f-icons">
          <Insta color='white' size='3rem' />
          <Facebook color='white' size='3rem' />
          
        </div>
      </div>
    </div>
  );
};

  
