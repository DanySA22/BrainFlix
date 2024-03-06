import axios from 'axios';
import {useState} from 'react';
import Navigation from '../../components/Navigation/Navigation';
import UploadForm from '../../components/UploadForm/UploadForm';
import { useNavigate } from 'react-router-dom';
import nameRandom from '../../utilities/NameRandom/NameRandom';
import {v4 as uuidv4} from 'uuid';

function  UploadPage() {
  const [uploadTitle, setUploadTitle] = useState('')
  const [uploadDescription, setUploadDescription] = useState('')
  const navigate = useNavigate() 

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
alert('Submission is succesful! You will be routed to the Main Page') 
navigate('/')
}
uploadVideoObject()
} catch (error) {
    console.error('Error submitting the form:', error)
}
}    
  return (
        <> 
      <Navigation/> 
      <UploadForm  uploadDescription = {uploadDescription} uploadTitle = {uploadTitle}
      inputResultTitle = {inputResultTitle} 
    submitResult = {submitResult} inputResultDescription = {inputResultDescription}/>
        
        </>
    )
}

export default UploadPage;