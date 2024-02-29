import axios from 'axios';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import SideVideos from '../../components/SideVideos/SideVideos';
import Navigation from '../../components/Navigation/Navigation'; 
import MainVideo from '../../components/MainVideo/MainVideo';
import VideoImage from '../../components/VideoImage/VideoImage';
import nameRandom from '../../utilities/NameRandom/NameRandom'


function VideoDetailsPage()  {
   
const [list, setList] = useState([])
const [selectedVideo, setSelectedVideo] = useState({})
const [commentForm, setCommentForm] = useState('')
const [deletedComment, setDeletedComment] = useState(false)

 //useEffect that on mount will get the videos' list
useEffect(() => {
 const videoList = async () => {
    const dataList = await axios.get('https://unit-3-project-api-0a5620414506.herokuapp.com/videos', {
        params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}
    });
    setList(dataList.data)
};
videoList()
}, [])

//useEffect that will get a video details' array based in the video id. 
//It will get re-render when the states commentForm or deletedComment change;
//also when the id change

const {id} = useParams()
useEffect(() => {
    const oneVideo = async () => {
        const dataDetail = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}`, {
           params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}
       });
       setSelectedVideo(dataDetail.data)
       
    };
    oneVideo()
}, [id, commentForm, deletedComment])

//I add almost an exact duplicate of the previous useEffect but only wiith id parameter
//in order that the window.ScrollTo(0,0) only applies when video is selected and the id changes
useEffect(() => {
    const oneVideoLocation = async () => {
        const dataDetail = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}`, {
           params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}
       });
       setSelectedVideo(dataDetail.data)
       window.scrollTo(0, 0)
    };
    oneVideoLocation()
  }, [id])

//this function will be a prop callback for update setCommentForm after event handler onChange on child component  gets call
const inputResult = (event) => {
    setCommentForm(event.target.value)
  }

  //this function will be a prop callback for POST on API after event handler onSubmit on child component gets call
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

//this function will be a prop callback for DELETE on API after event handler onClick on child component gets call

const deleteComment = (commentId) => {
  try {
  const commentDelete = async () => {
  const newComment = await axios.delete(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}/comments/${commentId}`, {
  params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}})
  setDeletedComment(!deletedComment)
  
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