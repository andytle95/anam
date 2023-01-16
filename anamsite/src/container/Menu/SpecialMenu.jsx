import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title="Daily Deals" />
      <h1 className='headtext__cormorant'>Menu</h1>
    </div>
    <div className='app__specialMenu-menu'>
    <div className='app__specialMenu-menu_wine flex__center'>
      <p className='app__specialMenu-menu_heading'>Appetizers</p>
      <div className='app__specialMenu_menu_items'>
        {data.appetizers.map((wine, index) => (
          <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
        ))}
      </div>
    </div>

{/*
    <div className='app__specialMenu-menu_img'>
      <img src={images.menu} alt="menu img" />
    </div> */}

      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu-menu_heading'>Dim Sum</p>
        <div className='app__specialMenu_menu_items'>
          {data.dimsum.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>


      </div>

    <div className='app__specialMenu-menu_cocktails flex__center'>
      <p className='app__specialMenu-menu_heading'>Entrees</p>
      <div className='app__specialMenu_menu_items'>
        {data.entrees.map((cocktail, index) => (
          <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
        ))}
      </div>
    </div>



    <div className='app__specialMenu-menu_cocktails flex__center'>
      <p className='app__specialMenu-menu_heading'>Drinks</p>
      <div className='app__specialMenu_menu_items'>
        {data.drinks.map((cocktail, index) => (
          <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
        ))}
      </div>
    </div>
    {/* <div style={{marginTop: '15px'}}>
      <button type="button" className='custom__button'>View More</button>
    </div> */}

    </div>
);

export default SpecialMenu;
