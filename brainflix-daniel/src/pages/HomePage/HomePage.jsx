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
  const [firstObject, setFirstObject] = useState('')
  const [selectedVideo, setSelectedVideo] = useState({})
  const [commentForm, setCommentForm] = useState('')
 const [isDeleteComment, setIsDeleteComment] = useState(false)
 const [count, setCount] = useState(null)
 //useEffect that on mount will get the videos' list
 const {id} = useParams()

 useEffect(() => {
    const videoListAndFirst = async () => {
      const dataList = await axios.get('http://localhost:8080/videos', {
           params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}
       });
       
       setList(dataList.data)
       console.log(dataList.data)  //Here I had all the data actually if I set from here
       //I don't need to call the ids and then I could have my default page. That is why the side videos always displayed
       const ident = dataList.data[0].id
       //From dataList.data I can extract all type of data using states here and from there I can add those states wherever I need it
       //for setting the default
       setFirstID(ident)
       setFirstObject(dataList.data[0])
      //  const dataDetailFirst = await axios.get(`http://localhost:8080/videos/${ident}`, {
      //         params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}
      //     });
          
      //     setSelectedVideo(dataDetailFirst.data)
   };
   videoListAndFirst()
   }, [id, commentForm, isDeleteComment, count])

// const dataAsObject = Array.from(list)
// console.log(dataAsObject[0].id)  
//useEffect that on mount will get the first video details' array. It will get re-render when the states
//commentForm or isDeleteComment change
   useEffect(() => {
       const oneVideo = async () => {
        const firstidentification = firstId
          // const id = dataAsObject[0].id
          // console.log(id)
          const dataDetail = await axios.get(`http://localhost:8080/videos/${firstidentification}`, {
              params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}
          });
          
          setSelectedVideo(dataDetail.data)
       };
       oneVideo()
   }, [commentForm, isDeleteComment, count])



useEffect(() => {
    const oneVideo = async () => {
        const dataDetail = await axios.get(`http://localhost:8080/videos/${id}`, {
           params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}
       });
       setSelectedVideo(dataDetail.data)
       
    };
    oneVideo()
}, [id, commentForm, isDeleteComment])

 
//I add almost an exact duplicate of the previous useEffect but only wiith id parameter
//in order that the window.ScrollTo(0,0) only applies when video is selected and the id changes. I also add count 
//because it is relevant to re-render the one video displayed when the count changes
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


//this function will be a prop callback for update setCommentForm after event handler onChange on child component  gets call
const inputResult = (event) => {
    setCommentForm(event.target.value)
    
  }

//this function will be a prop callback for POST on API after event handler onSubmit on child component gets call

const submitResult = (event) => {
  event.preventDefault()
 try {
  const firstidentification = firstId
  if (firstidentification !== id) {
    const commentPostFirst = async () => {
    const body = 
  { id: uuidv4(),
    name: nameRandom(),
    comment: commentForm, 
    likes: 0,
    timestamp: Date.now() 
   }
  const newComment = await axios.post(`http://localhost:8080/videos/${firstidentification}/comments`, body, {
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


// const submitResult = (event) => {
//   event.preventDefault()
//  try {
//   const commentPost = async () => {
//   const body = 
//   { id: uuidv4(),
//    name: nameRandom(),
//    comment: commentForm, 
//    likes: 0,
//    timestamp: Date.now() 
//   }
//   const newComment = await axios.post(`http://localhost:8080/videos/${id}/comments`, body, {
//   params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}})
//   setCommentForm('')
// }
// commentPost()
//  } catch (error) {
//       console.error('Error submitting the form:', error)
//  }  
// }    




//this function will be a prop callback for DELETE on API after event handler onClick on child component gets call

const deleteComment = (commentId) => {
  try {
  const commentDelete = async () => {
  const firstidentification = firstId
  const newComment = await axios.delete(`http://localhost:8080/videos/${firstidentification}/comments/${commentId}`, {
  params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}})
  setIsDeleteComment(!isDeleteComment)
}
commentDelete()
  } catch (error) {
      console.error('Error deleting the comment:', error)
  }
}


// const deleteComment = (commentId) => {
//   try {
//   const commentDelete = async () => {
//   const newComment = await axios.delete(`http://localhost:8080/videos/${id}/comments/${commentId}`, {
//   params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}})
//   setIsDeleteComment(!isDeleteComment)
// }
// commentDelete()
//   } catch (error) {
//       console.error('Error deleting the comment:', error)
//   }
// }


console.log(firstId)
console.log(id)
//function for increase the like count
const likeCount = (previousLikes) => {
  try {
    // const firstidentification = firstId
    // if (firstidentification !== id) {
    //   const currentLikes = parseInt(previousLikes.replace(/,/g, '')) + 1
    //   const body = {
    //     likes: JSON.stringify(currentLikes)}
    //   const likeIncrease = async () => { 
    //   const newLikeAdded = await axios.put(`http://localhost:8080/videos/${firstidentification}/likes`, body, {
    //     params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}})
    
    // }
     
    // likeIncrease()
    // setCount(previousLikes + 1)
    // } else {
      const currentLikes = parseInt(previousLikes.replace(/,/g, '')) + 1
      const body = {
      likes: JSON.stringify(currentLikes)}
      const likeIncrease = async () => { 
      const newLikeAdded = await axios.put(`http://localhost:8080/videos/${id}/likes`, body, {
        params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}})
      
      }
     
    likeIncrease()
    setCount(previousLikes + 1)
    }
   
  
  catch (error) {
    console.log('Error adding a like:', error)

  }
}

// const likeCount = (previousLikes) => {
//   try {
//     const currentLikes = parseInt(previousLikes.replace(/,/g, '')) + 1
//     const body = {
//       likes: JSON.stringify(currentLikes)}
//     const likeIncrease = async () => { 
//     const newLikeAdded = await axios.put(`http://localhost:8080/videos/${id}/likes`, body, {
//       params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}})
    
//     }
    
//   likeIncrease()
//   setCount(previousLikes + 1)
  
//   } catch (error) {
//     console.log('Error adding a like:', error)

//   }
  
// }


return (

       
    <> 
   
    <VideoImage  selectedVideo = {selectedVideo}/>
    <main className='main'>
      <div className='main__subdivision' >   
      
    <MainVideo selectedVideo = {selectedVideo}  commentForm = {commentForm} inputResult = {inputResult} 
    submitResult = {submitResult} deleteComment = {deleteComment} likeCount = {likeCount} firstObject = {firstObject}/>
             
    </div> 
    <SideVideos list={list}  selectedVideo = {selectedVideo}/> 
    </main>
  </>
)

}

export default HomePage;