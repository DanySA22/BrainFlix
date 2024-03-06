import axios from 'axios';
import {useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import nameRandom from '../../utilities/NameRandom/NameRandom';
import {v4 as uuidv4} from 'uuid';
import './UploadForm.scss'     
import videopreview from '../../assets/images/Upload-video-preview.jpg';


function UploadForm() {
  
  const [uploadTitle, setUploadTitle] = useState('')
  const [uploadDescription, setUploadDescription] = useState('')
  const navigate = useNavigate() 
  const inputRef = useRef(null)
  const submitRef = useRef(null)

//this function will be prop callbacks for update states uploadTitle and uploadDescription after event handler onChange on child component  gets call
const inputResultTitle = (event) => {
  setUploadTitle(event.target.value)
}

const inputResultDescription = (event) => {
  setUploadDescription(event.target.value)
}

//this function will be a prop callback for POST on API after event handler onSubmit on child component gets call
const submitResult = (event) => {
event.preventDefault()
try {
const uploadVideoObject = async () => {
const body = 
{ id: uuidv4(),
 title: uploadTitle,
 channel: nameRandom(),
image: "https://unit-3-project-api-0a5620414506.herokuapp.com/images/image8.jpg",
 description: uploadDescription, 
views: "809,635",
likes: "400059",
duration: "12:26",
video: "https://unit-3-project-api-0a5620414506.herokuapp.com/stream",
timestamp: Date.now() ,
comments: []
}
const newVideoObject = await axios.post(`http://localhost:8080/videos`, body, {
params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}})
setUploadTitle('')
setUploadDescription('')
}
uploadVideoObject()
setTimeout(() => {
  alert('Submission is succesful! You will be routed to the Main Page') 
  navigate('/')
}, 1000) //I put the alert and navigate in a setTimeout to make more smooth the redirection process after user click submit button

} catch (error) {
    console.error('Error submitting the form:', error)
}
}    
  
 
function afterCancelVideo (){
      alert('Submission has been cancelled. You will be routed to the Main Page') 
      navigate('/')
      }
    return (
        <>
      <section className='upload-video'>
      <h2 className="upload-video__header"> Upload Video </h2>
      <div className="upload-video__subdivision">
          <div className="upload-video__thumbnail">
           <h6 className="upload-video__thumbnail-header"> VIDEO THUMBNAIL </h6>
           <img src={videopreview}  className="upload-video__thumbnail-image" alt="Mohan Muruge" />
           </div>
          
          <form action="" ref={submitRef} className="upload-video__form" onSubmit={event => submitResult(event)} >
              <label className="upload-video__form-Label"> TITLE YOUR VIDEO </label>
              <textarea  value={uploadTitle}  onChange={event => inputResultTitle(event)} placeholder='Add a title to your video' name="title" className="upload-video__form-Input upload-video__form-Input--height">
              </textarea>
              <label className="upload-video__form-Label"> ADD A VIDEO DESCRIPTION </label>
              <textarea  value={uploadDescription} onChange={event => inputResultDescription(event)} placeholder='Add a description to your video' name="description" className="upload-video__form-Input">
              </textarea>
          </form> 
        </div> 
        <div className='upload-video__Buttons'>
            
          <button className="upload-video__cancel-Button" onClick={afterCancelVideo}> <p className="comment__cancel-Button--text"> CANCEL </p></button>

          <button type='submit' className="upload-video__submit-Button" onClick={event => submitResult(event)}> <p className="comment__submit-Button--text"> PUBLISH </p></button>
          
        </div>
      
      </section>
        </>
    )
}
export default UploadForm;