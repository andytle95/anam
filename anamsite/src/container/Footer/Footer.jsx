import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    {/* <Newsletter /> */}

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
      <h1 className='app__footer-headtext'>Contact Us</h1>
      <p className='p__opensans'>929 Story Rd, #2000, San Jose, CA</p>
      <p className='p__opensans'>209-312-1192</p>
      {/* <p className='p__opensans'>888-888-8888</p> */}
      </div>
      <div className='app__footer-links_logo'>
      <img src={images.gericht} alt="footer_logo" />
      <p className='p__opensans'>Experience Fine Dining</p>
      <img src={images.spoon} alt="spoon" className='spoong__img' style={{ marginTop: 15 }} />
      {/* <div className='app__footer-links_icons'>
        <FiFacebook />
        <FiTwitter />
        <FiInstagram />
      </div> */}
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday - Friday:</p>
        <p className='p__opensans'>10am - 8pm</p>
        <p className='p__opensans'>Saturday - Sunday:</p>
        <p className='p__opensans'>10am - 9pm</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2023 Anam. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
