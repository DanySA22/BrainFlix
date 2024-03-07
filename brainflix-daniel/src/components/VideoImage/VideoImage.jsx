import './VideoImage.scss'
import defaultVideo from './BrainStationSampleVideo.mp4'
import {useState, useRef} from 'react';


function VideoImage({selectedVideo}){
    console.log(selectedVideo.video)
    const videoRef = useRef(null)
    const videoKey = useRef(Date.now())
    const [poster, setPoster] = useState(false)
     
   
   
    return (
        <>
        <div className='video-container'>
        <video className='video-container__Video' controls poster= {selectedVideo.image}>
        <source  src={defaultVideo} type='video/mp4'/>
        </video>
        </div>       
        </>
        
    )
}

export default VideoImage