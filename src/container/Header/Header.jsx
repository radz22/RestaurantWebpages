import React from 'react';
import './Header.css';

import { images} from '../../constants';
import SubHeading from '../../components/SubHeading/SubHeading';

const Header = () => (
  <div className='app__header app__wrapper section__padding flex__center' id='home'>
  
    <div className='app__wrapper_info'>
      
      <SubHeading  title="Chase The New Flavour"/>
      <h1 className='app__header-h1 '>The Key To Fine Dining</h1>
      <div className='p__opensans' style={{ margin: '2rem 0'}}>Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus</div>
       <button type='button' className='custom__button' >Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img'/>
    </div>
  
    
  </div>
);

export default Header;
