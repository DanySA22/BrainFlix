import './VideoImage.scss'

function VideoImage({dataDetails}){
    return (
        <>
        <div className='video-container'>
        <video className='video-container__Image' controls poster= {dataDetails.image}>
        </video>
        </div>       
        </>
        
    )
}

export default VideoImage