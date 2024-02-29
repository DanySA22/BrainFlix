import axios from 'axios';
import {useState, useEffect} from 'react'
import '../../App.scss';
import SideVideos from '../../components/SideVideos/SideVideos';
import Navigation from '../../components/Navigation/Navigation';
import MainVideo from '../../components/MainVideo/MainVideo'
import VideoImage from '../../components/VideoImage/VideoImage'
import nameRandom from '../../utilities/NameRandom/NameRandom'

function HomePage()  {

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
   
//useEffect that on mount will get the first video details' array. It will get re-render when the states
//commentForm or deletedComment change
   useEffect(() => {
       const oneVideo = async () => {
          const id = '84e96018-4022-434e-80bf-000ce4cd12b8'
          const dataDetail = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}`, {
              params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}
          });
          
          setSelectedVideo(dataDetail.data)
       };
       oneVideo()
   }, [commentForm, deletedComment])
 
//this function will be a prop callback for update setCommentForm after event handler onChange on child component  gets call
const inputResult = (event) => {
    setCommentForm(event.target.value)
    
  }
//this function will be a prop callback for POST on API after event handler onSubmit on child component gets call

const submitResult = (event) => {
  event.preventDefault()
 try {
  const commentPost = async () => {
  const id = '84e96018-4022-434e-80bf-000ce4cd12b8'
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
  const id = '84e96018-4022-434e-80bf-000ce4cd12b8'
  const newComment = await axios.delete(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}/comments/${commentId}`, {
  params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}})
  setDeletedComment(true)
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
    submitResult = {submitResult} deleteComment = {deleteComment} />
             
    </div> 
    <SideVideos list={list}  selectedVideo = {selectedVideo}/> 
    </main>
  </>
)

}

export default HomePage;