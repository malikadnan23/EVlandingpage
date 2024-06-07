import React from 'react'
import './background.css'
import video1 from '../assets/car-video.mp4'
import img1 from '../assets/image1.jpg'
import img2 from '../assets/imag2.jpg'
import img3 from '../assets/image3.jpg'


const Background = ({playStatus,heroCount}) => {

    if(playStatus){
       return(
        <video className='background' muted autoPlay loop >
        <source  src={video1} type='video/mp4'/>

    </video>
       )
    }else if(heroCount===0){
return <img src={img1} className='background fade-in' alt={img1} />
    }
    else if(heroCount===1){
        return <img src={img2} className='background fade-in' alt={img1} />
            }
            else if(heroCount===2){
                return <img src={img3} className='background fade-in' alt={img1} />
                    }
}

export default Background
