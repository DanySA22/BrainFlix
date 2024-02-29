import axios from 'axios';
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from "react-router-dom"
import '../../App.scss';
import SideVideos from '../../components/SideVideos/SideVideos';
import Navigation from '../../components/Navigation/Navigation';
import MainVideo from '../../components/MainVideo/MainVideo'
import VideoImage from '../../components/VideoImage/VideoImage'
import VideoDetailsPage from './VideoDetailsPage';

function HomePage()  {

  const [list, setList] = useState([])
  const [selectedVideo, setSelectedVideo] = useState({})
  const [commentForm, setCommentForm] = useState('Add a new comment')
 
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
   
 console.log(list)
   useEffect(() => {
       const oneVideo = async () => {
          let id = '84e96018-4022-434e-80bf-000ce4cd12b8'
          const dataDetail = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}`, {
              params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}
          });
          console.log(dataDetail.data)
          setSelectedVideo(dataDetail.data)
       };
       oneVideo()
   }, [])
 
const inputResult = (event) => {
    setCommentForm(event.target.value)
    
  }
   const submitResult = (event) => {
  event.preventDefault()
  inputResult(event)
   
}



useEffect(() => {
  const commentPost = async () => {
  let id = '84e96018-4022-434e-80bf-000ce4cd12b8'
  const body = 
  {name: 'Elder Rivero',
   comment: commentForm}
  const newComment = await axios.post(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}/comments`, body, {
    params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}})
  
}
commentPost()
}, [submitResult])

return (
  // <><VideoDetailsPage/></>
       
    <> 
    <Navigation/> 
    <VideoImage  selectedVideo = {selectedVideo}/>
    <main className='main'>
      <div className='main__subdivision' >   
      
    <MainVideo selectedVideo = {selectedVideo}  commentForm = {commentForm} inputResult = {inputResult} submitResult = {submitResult}/>
             
    </div> 
    <SideVideos list={list}  selectedVideo = {selectedVideo}/> 
    </main>
  </>
)

}

export default HomePage;