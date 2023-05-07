import React from 'react';
import { images} from '../../constants';
import './Chef.css';
import SubHeading from '../../components/SubHeading/SubHeading';

const Chef = () => (
  <div className='app__chef app__wrapper section__padding flex__center  app__bg'  id='home'>


    <div className='app__wrapper_img'>
      <img src={images.chef} alt='chef img'/>
    </div>

    <div className='app__wrapper_info'>
      <SubHeading  title="Chef's word"/>
      
      <div className='app__chef-text'> 
      <h1 className='headtext__cormorant'>What we believe in</h1>
      </div>
       
      
       <div className='app__chef_content-quote'> 

       <div className='app__chef-quote'>
      <img src={images.quote} alt='quote img'/>
      <p className='p__opensans' style={{marginTop:'20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
      </div>

      <p className='p__opensans' > .auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
      </div>
    
      
    
      
      
      <div className='app__chefname'>
       <h2>Kevin Luo</h2>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt='sign img'/>
      </div> 

    </div>
  
    
  </div>
);

export default Chef;
