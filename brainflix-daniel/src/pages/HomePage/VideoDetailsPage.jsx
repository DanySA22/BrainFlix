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

const navigate = useNavigate()

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
    if (commentForm == '') {
    window.scrollTo(0, 0)}
    // else if (deleteComment !== nul){
    //     window.scrollTo(0, 0)}
    // }
}, [id, commentForm, deletedComment])
console.log(deletedComment)
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
  const newComment = await axios.delete(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}/comments/${commentId}`, {
  params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}})
  setDeletedComment(!deletedComment)
  console.log(deletedComment)
  
}
commentDelete()
  } catch (error) {
      console.error('Error deleting the comment:', error)
  }
}
    return (
        
        <>
        <Navigation/> 
    <VideoImage  selectedVideo = {selectedVideo}/>
    <main className='main'>
      <div className='main__subdivision' >   
      
    <MainVideo selectedVideo = {selectedVideo}  commentForm = {commentForm} inputResult = {inputResult} 
    submitResult = {submitResult} deleteComment = {deleteComment}/>
             
    </div> 
    <SideVideos list={list}  selectedVideo = {selectedVideo}/> 
    </main>
        </>
        
    )
}

export default VideoDetailsPage;