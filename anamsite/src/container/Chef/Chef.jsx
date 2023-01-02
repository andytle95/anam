import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>

    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>What We Believe In</h1>


    <div className='app__chef-content'>
      <div className='app__chef-content_quote'></div>
      <img src={images.quote} alt="quote" />
      <p className='p__opensans'>Lorem Ipsum</p>
    </div>
    <p className='p__opensans'>That you feel me special, stop playing with me.</p>

    <div className='app__chef-sign'>
      <p>Andy mf Le</p>
      <p className='p__opensans'>The Founder</p>
      <img src={images.sign} alt="sign" />
    </div>
    </div>
  </div>

);

export default Chef;
