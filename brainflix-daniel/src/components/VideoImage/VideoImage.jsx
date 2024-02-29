import './VideoImage.scss'
  
function VideoImage({selectedVideo}){
    return (
        <>
        <div className='video-container'>
        <video className='video-container__Image' controls poster= {selectedVideo.image}>
        </video>
        </div>       
        </>
        
    )
}

export default VideoImage