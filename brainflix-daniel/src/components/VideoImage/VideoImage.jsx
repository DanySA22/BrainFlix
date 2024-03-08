import './VideoImage.scss'
import defaultVideo from './BrainStationSampleVideo.mp4'
import {useState, useRef, useEffect} from 'react';


function VideoImage({selectedVideo}){
    
    const videoRef = useRef(null)
    const videoKey = useRef(Date.now())
    const [poster, setPoster] = useState(false)
    const [select, setSelect] = useState()

// console.log(selectedVideo.video)
// console.log(selectedVideo.image)
// useEffect(() => {
//     const reproduceVideo = async () => {
//         const videoToReproduce = await selectedVideo.video
//        setSelect(videoToReproduce)
//        console.log(videoToReproduce)
//     };
//     reproduceVideo()
// }, [])

console.log(select)

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