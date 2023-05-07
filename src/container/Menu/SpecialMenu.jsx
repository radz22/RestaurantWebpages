import React from 'react';

import './SpecialMenu.css';
import { SubHeading, MenuItem } from '../../components'
import { images, data} from '../../constants'



const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>

    <div className='app__specialMenu-title'> 
     <SubHeading title="Menu That Fits Your Palatte"/>
     <h1 className='headtext__cormorant'>Today's Special</h1>
   </div>

  <div className='app__specialMenu-menu'>

    <div className='app__specialMenu-menu_wines flex__center'>
      <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
      <div className='app__specialMenu_menu_items'>
        {data.wines.map((wine, index ) => (
           <MenuItem key={wine.title + index } title={wine.title}  price={wine.price} tags={wine.tags}/>
        ))}
      </div>
    </div>

    <div className='app__specialMenu_img'>
      <img src={images.menu} alt='menu img'/>
    </div>
 
    <div className='app__specialMenu-menu_cocktails flex__center'>
      <p className='app__specialMenu-menu_heading'>Cocktails</p>
      <div className='app__specialMenu_menu_items'>
        {data.cocktails.map((cocktail, index ) => (
          <MenuItem key={cocktail.title + index } price={cocktail.price} title={cocktail.title} tags={cocktail.tags}/>
        ))}
      </div>
    </div>

  </div>

  <div style={{marginTop:'15px'}}>
    <button type='button' className='custom__button'>View More</button>
  </div>
   </div>
);

export default SpecialMenu;
