import './VideoImage.scss'
  
function VideoImage({selectedVideo}){
    return (
        <>
        <div className='video-container'>
        <video className='video-container__Image' controls poster= {selectedVideo.image}>
            <source src='../../assets/samplevideo/BrainStation Sample Video.mp4'  type='video/mp4'/> 
        </video>
        </div>       
        </>
        
    )
}

export default VideoImage