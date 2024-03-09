import axios from 'axios';
import {useState, useEffect} from 'react'  
import {useParams} from 'react-router-dom' 
import '../../App.scss';
import SideVideos from '../../components/SideVideos/SideVideos';
import MainVideo from '../../components/MainVideo/MainVideo'
import VideoImage from '../../components/VideoImage/VideoImage'
import nameRandom from '../../utilities/NameRandom/NameRandom'
import {v4 as uuidv4} from 'uuid'


function HomePage()  {  

  const [list, setList] = useState([])
  const [firstId, setFirstID] = useState('')
  const [selectedVideo, setSelectedVideo] = useState({})
  const [commentForm, setCommentForm] = useState('')
 const [isDeleteComment, setIsDeleteComment] = useState(false)
 const [count, setCount] = useState(null)

 const {id} = useParams()

 //useEffect that on mount will get the videos' list and the first video details or in case that an id is provided
 //the video's details of the one with that id
useEffect(() => {
    const videoListAndFirst = async () => {
      const dataList = await axios.get('http://localhost:8080/videos', {
           params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}
       });
       
       setList(dataList.data)
       const ident = dataList.data[0].id
       setFirstID(ident)
      if (id == undefined){
       const dataDetailFirst = await axios.get(`http://localhost:8080/videos/${ident}`, {
              params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}
          });
          setSelectedVideo(dataDetailFirst.data)}

      if (id !== undefined) {
            const dataDetail = await axios.get(`http://localhost:8080/videos/${id}`, {
                 params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}
             });
             setSelectedVideo(dataDetail.data)
             
          };
   };
   videoListAndFirst()
   }, [id, commentForm, isDeleteComment, count])
   
console.log(firstId)
 
//useEffect wiith only id parameter
//in order that the window.ScrollTo(0,0) only applies when video is selected and the id changes. 
useEffect(() => {
  const oneVideoLocation = async () => {
      const dataDetail = await axios.get(`http://localhost:8080/videos/${id}`, {
         params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}
     });
     setSelectedVideo(dataDetail.data)
     window.scrollTo(0, 0)
  };
  oneVideoLocation()
}, [id])


//this function will be a prop callback for update CommentForm after event handler onChange on child component  gets call
const inputResult = (event) => {
    setCommentForm(event.target.value)
    
  }

//this function will be a prop callback for POST on API after event handler onSubmit on child component gets call

const submitResult = (event) => {
  event.preventDefault()
 try {
  
  if (id == undefined) {
    const commentPostFirst = async () => {
    const body = 
  { id: uuidv4(),
    name: nameRandom(),
    comment: commentForm, 
    likes: 0,
    timestamp: Date.now() 
   }
  const newComment = await axios.post(`http://localhost:8080/videos/${firstId}/comments`, body, {
  params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}})
  setCommentForm('')
}
commentPostFirst()
  } else {
    const commentPost = async () => {
        const body = 
        { id: uuidv4(),
         name: nameRandom(),
         comment: commentForm, 
         likes: 0,
         timestamp: Date.now() 
        }
        const newComment = await axios.post(`http://localhost:8080/videos/${id}/comments`, body, {
        params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}})
        setCommentForm('')
      }
      commentPost()
  }
   
 } catch (error) {
      console.error('Error submitting the form:', error)
 }
}    


//this function will be a prop callback for DELETE on API after event handler onClick on child component gets call

const deleteComment = (commentId) => {
  try {
  if (id == undefined) {
  console.log(firstId)
  const commentDelete = async () => {
  const newComment = await axios.delete(`http://localhost:8080/videos/${firstId}/comments/${commentId}`, {
  params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}})
  setIsDeleteComment(!isDeleteComment)
}
commentDelete()
} else {
  const commentDelete = async () => {
      const newComment = await axios.delete(`http://localhost:8080/videos/${id}/comments/${commentId}`, {
      params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}})
      setIsDeleteComment(!isDeleteComment)
    }
    commentDelete()
}
  } catch (error) {
      console.error('Error deleting the comment:', error)
  }
}


//function for increase the like count
const likeCount = (previousLikes) => {
  try {
    
    if (id == undefined) {
      const currentLikes = parseInt(previousLikes.replace(/,/g, '')) + 1
      const body = {
        likes: JSON.stringify(currentLikes)}
      const likeIncrease = async () => { 
      const newLikeAdded = await axios.put(`http://localhost:8080/videos/${firstId}/likes`, body, {
        params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}})
    
    }
     
    likeIncrease()
    setCount(previousLikes + 1)
    } else {
      const currentLikes = parseInt(previousLikes.replace(/,/g, '')) + 1
      const body = {
      likes: JSON.stringify(currentLikes)}
      const likeIncrease = async () => { 
      const newLikeAdded = await axios.put(`http://localhost:8080/videos/${id}/likes`, body, {
        params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}})
       }
     
    likeIncrease()
    setCount(previousLikes + 1)
  }}
  
  catch (error) {
    console.log('Error adding a like:', error)

  }
}



return (
       
    <> 
   
    <VideoImage  selectedVideo = {selectedVideo}/>
    <main className='main'>
      <div className='main__subdivision' >   
      
    <MainVideo selectedVideo = {selectedVideo}  commentForm = {commentForm} inputResult = {inputResult} 
    submitResult = {submitResult} deleteComment = {deleteComment} likeCount = {likeCount} />
             
    </div> 
    <SideVideos list={list}  selectedVideo = {selectedVideo}/> 
    </main>
  </>
)

}

export default HomePage;