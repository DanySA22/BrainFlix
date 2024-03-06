import './UploadForm.scss'     
import videopreview from '../../assets/images/Upload-video-preview.jpg';
import { useNavigate } from 'react-router-dom';

function UploadForm({uploadDescription, uploadTitle, inputResultTitle, inputResultDescription, submitResult}) {
  const navigate = useNavigate()  
    
  // function afterSubmitVideo (){
  //   alert('Submission is succesful! You will be routed to the Main Page') 
  //   navigate('/')
  //   }
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
          
          <form action="" className="upload-video__form" onSubmit={event => submitResult(event)} >
              <label className="upload-video__form-Label"> TITLE YOUR VIDEO </label>
              <textarea  value={uploadTitle} onChange={event => inputResultTitle(event)} placeholder='Add a title to your video' name="nameInput" className="upload-video__form-Input upload-video__form-Input--height">
              </textarea>
              <label className="upload-video__form-Label"> ADD A VIDEO DESCRIPTION </label>
              <textarea  value={uploadDescription} onChange={event => inputResultDescription(event)} placeholder='Add a description to your video' name="nameInput" className="upload-video__form-Input">
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