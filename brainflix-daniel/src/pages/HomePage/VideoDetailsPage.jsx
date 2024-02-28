import axios from 'axios';
import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import SideVideos from '../../components/SideVideos/SideVideos';
import Navigation from '../../components/Navigation/Navigation';
import MainVideo from '../../components/MainVideo/MainVideo';
import VideoImage from '../../components/VideoImage/VideoImage';

//Use this page for alll the dynamic movement, including axios manipulation

function VideoDetailsPage()  {
   
const [list, setList] = useState([])
const [selectedVideo, setSelectedVideo] = useState({})
useEffect(() => {
 const videoList = async () => {
    const dataList = await axios.get('https://unit-3-project-api-0a5620414506.herokuapp.com/videos', {
        params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}
    });
    console.log(dataList.data)
    setList(dataList.data)
};
videoList()
}, [])

const {id} = useParams()
useEffect(() => {
    const oneVideo = async () => {
        const dataDetail = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}`, {
           params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}
       });
       console.log(dataDetail.data)
       setSelectedVideo(dataDetail.data)
    };
    oneVideo()
}, [id])

    return (
        
        <>
        <Navigation/> 
    <VideoImage  selectedVideo = {selectedVideo}/>
    <main className='main'>
      <div className='main__subdivision' >   
      
    <MainVideo selectedVideo = {selectedVideo}/>
             
    </div> 
    <SideVideos list={list}  selectedVideo = {selectedVideo}/> 
    </main>
        </>
        
    )
}

export default VideoDetailsPage;