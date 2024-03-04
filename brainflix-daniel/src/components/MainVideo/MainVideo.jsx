import './MainVideo.scss'
import mohan from '../../assets/images/Mohan-muruge.jpg';   
import timeGap from '../../utilities/TimeGap/TimeGap';

function MainVideo({selectedVideo, commentForm, inputResult, submitResult, deleteComment}) { 
  
//map method over the comment user section of the current selected object
const commentsDetails = selectedVideo.comments && selectedVideo.comments.length > 0 ?(selectedVideo.comments.map((comment) => (
               <div className = 'comment__user' key={comment.id}>
          <img className = 'comment__user-Image'/>
          <div className = 'comment__user-Info'> 
            <p className = 'comment__user-Name'> {comment.name} </p>
            <p className = 'comment__user-Date'>  {timeGap(comment.timestamp)} </p>
            <p className = 'comment__user-Text'> 
            {comment.comment}
            </p>
            <div className = 'comment__user-Subdivision'>
            <p className = 'comment__user-Text'> Likes: {comment.likes} </p>
            <button className = 'comment__user-Like' onClick={event => deleteComment(comment.id)}> Like </button>
             <button className = 'comment__user-Delete' onClick={event => deleteComment(comment.id)}> Delete </button>
            </div>
          </div>
        </div>
      ))): null 

return  (
      <>
  {/* Start of main video general information section */}
  <section className='main-video'>
    <h2 className='main-video__header'> {selectedVideo.title} </h2>
    <div className='main-video__info'>
     <div className='main-video__info-First'> 
     <p className='main-video__author'> <span>By</span> {selectedVideo.channel}</p>
     <p className='main-video__date'> {timeGap(selectedVideo.timestamp)}  </p> 
     </div> 
     <div className='main-video__info-Second'>
      <p className='main-video__views'> {selectedVideo.views} </p>
      <p className='main-video__likes'> {selectedVideo.likes} </p>
     </div> 
     </div> 
     <div className='main-video__details'>
     <p className='main-video__text'>
     {selectedVideo.description}
     </p> 
     </div> 
    </section>
    {/* End of main video general information section */}

    {/* Start of main video comment section */}
    <section className='comment'>
      <h2 className="comment__amount"> {selectedVideo.comments?selectedVideo.comments.length:null} Comments </h2>
      <div className="comment__subdivision">
          <img src={mohan}  className="comment__image" alt="Mohan Muruge image" />
          <form onSubmit={event => submitResult(event)} className="comment__form">
              <label className="comment__form-Label"> JOIN THE CONVERSATION </label>
              <textarea  value={commentForm} onChange={event => inputResult(event)} name="commentInput" placeholder='Add a new comment' className="comment__form-Input">
              
              </textarea>
              <button type="submit" className="comment__submit-Button" > <p className="comment__submit-Button--text"> COMMENT </p></button>
          </form> 
          
        </div> 
       
      <div className = 'comment__display'>
        {commentsDetails}
      </div>  
      </section>

      {/* End of main video comment section */}
        </>

) 

}

export default MainVideo;