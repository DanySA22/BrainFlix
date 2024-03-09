import './VideoImage.scss'
import defaultVideo from './BrainStationSampleVideo.mp4'
import {useState, useRef, useEffect} from 'react';


function VideoImage({selectedVideo}){
    
    const videoRef = useRef(null)
    const videoKey = useRef(Date.now())
    const [poster, setPoster] = useState(false)
    const [select, setSelect] = useState()

    return (
        <>
        <div className='video-container'>
        <video className='video-container__Video' controls poster= {selectedVideo.image}>
        <source  src={defaultVideo} type='video/mp4'/> 
        <source  src= {selectedVideo.video} type='video/mp4'/>  
        </video>
        </div>       
        </>
        
    )
}

export default VideoImage