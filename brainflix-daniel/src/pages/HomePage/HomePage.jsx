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
  const [commentForm, setCommentForm] = useState('')
 const [deletedComment, setDeletedComment] = useState(false)
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
   }, [commentForm, deletedComment])
 
const inputResult = (event) => {
    setCommentForm(event.target.value)
    
  }

const nameRandom = () => {
  let random = Math.random()
  if (random < 0.2){
      return 'Sophie Brown'
  } else if (random < 0.4) {
      return 'Rajesh Gupta'
  } else if (random < 0.6) {
      return 'Elder Rivero'
  } else if (random < 0.8) {
      return 'Jon Jones'
  } else { return ' Jennifer Martin' }
}

const submitResult = (event) => {
  event.preventDefault()
 try {
  const commentPost = async () => {
  let id = '84e96018-4022-434e-80bf-000ce4cd12b8'
  const body = 
  {name: nameRandom(),
   comment: commentForm}
  const newComment = await axios.post(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}/comments`, body, {
  params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}})
  setCommentForm('')
}
commentPost()
 } catch (error) {
      console.error('Error submitting the form:', error)
 }
}    

const deleteComment = (commentId) => {
  try {
  const commentDelete = async () => {
  let id = '84e96018-4022-434e-80bf-000ce4cd12b8'
  const newComment = await axios.delete(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}/comments/${commentId}`, {
  params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}})
  setDeletedComment(true)
}
commentDelete()
  } catch (error) {
      console.error('Error deleting the comment:', error)
  }
}

//The previous function console.log me the result of the commentForm when I click submit not each change 
//on the process. This function result should be the comment value on the body and  the related useEffect 
//should only run if the submitResult is being callled  again and no on mount



return (
  // <><VideoDetailsPage/></>
       
    <> 
    <Navigation/> 
    <VideoImage  selectedVideo = {selectedVideo}/>
    <main className='main'>
      <div className='main__subdivision' >   
      
    <MainVideo selectedVideo = {selectedVideo}  commentForm = {commentForm} inputResult = {inputResult} 
    submitResult = {submitResult} deleteComment = {deleteComment} />
             
    </div> 
    <SideVideos list={list}  selectedVideo = {selectedVideo}/> 
    </main>
  </>
)

}

export default HomePage;