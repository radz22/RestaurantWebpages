import React from 'react';
import { BsFillPlayFill, BsPauseFill} from 'react-icons/bs';
import './Intro.css';
import { meal } from '../../constants';
import { useState, useRef } from 'react';

const Intro = () => {
const vidRef = useRef();
const [playVideo, setPlayVideo] = useState(false);



const handleVideo = () =>{
  
  setPlayVideo((prevPlayVideo) => !prevPlayVideo)

  if(playVideo){
    vidRef.current.pause();
  }else{
    vidRef.current.play();
  }
}


  return ( 

  <div className='app__video'>
    <video src={meal}
    ref={vidRef}
    typeof='video/mp4'
    loop
    controls={false}
    muted
    />

    <div className='app__video-overlay flex__center'>


      <div className='app__video-overlay_cirle flex__center' 
      onClick={handleVideo} >

        {playVideo ? 
          < BsPauseFill color='#fff' fontSize={30}/> : < BsFillPlayFill color='#fff' fontSize={30}/>}

      
    </div>
    </div>
  </div>



  );
}

export default Intro;
