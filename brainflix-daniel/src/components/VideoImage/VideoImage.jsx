import './VideoImage.scss'

function VideoImage({dataDetails, identification}){

    const videoMain = dataDetails.filter((dataDetail) => (dataDetail.id == identification)).map((dataDetail) => (
        <div className='video-container' key={dataDetail.id}>
        <video className='video-container__Image' controls poster= {dataDetail.image} key={dataDetail.id}>
        </video>
        </div>
      ))

    return (
        <>
        {videoMain}        
        </>
        
    )
}



export default VideoImage