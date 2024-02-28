import './MainVideo.scss'
import mohan from '../../assets/images/Mohan-muruge.jpg';

function MainVideo({selectedVideo}) { 
   console.log(selectedVideo)
  // timeGap function for Diving Deeper. First I find the time different between current time and the time in the json file data
  //and divided by 1000 to convert it on seconds. Then I found the proportion that 
  // amount represents compare with the amount of seconds in a year, month, days, hours, minutes, seconds. Set if statement to dictate what to return
  // depending of what the proportion is 

  function timeGap(date) {
    const difference = Math.floor((new Date() - new Date(date))/1000)  
    let proportion = difference/31536000
    if (proportion > 1) {
     return Math.floor(proportion) + ' ' + 'years ago'
    }
    proportion = difference/2592000
    if (proportion > 1) {
     return Math.floor(proportion) + ' ' + 'months ago'
    }
    proportion = difference/86400
    if (proportion > 1) {
     return Math.floor(proportion) + ' ' + 'days ago'
    }
    proportion = difference/3600
    if (proportion > 1) {
     return Math.floor(proportion) + ' ' + 'hours ago'
    }
    proportion = difference/60
    if (proportion > 1) {
     return Math.floor(proportion) + ' ' + 'minutes ago'
    } else {
     return Math.floor(proportion) + ' ' + 'seconds ago'}
   
}

// map method over the comment user section of the current selected object
const commentsDetails = selectedVideo.comments.map((comment) =>
               <div className = 'comment__user' key={comment.id}>
          <img className = 'comment__user-Image'/>
          <div className = 'comment__user-Info'> 
            <p className = 'comment__user-Name'> {comment.name} </p>
            <p className = 'comment__user-Date'>  {timeGap(comment.timestamp)} </p>
            <p className = 'comment__user-Text'> 
            {comment.comment}
            </p>
          </div>
        </div>
      )  
  
  return (
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
      <h2 className="comment__amount"> {selectedVideo.comments.length} Comments </h2>
      <div className="comment__subdivision">
          <img src={mohan}  className="comment__image" alt="Mohan Muruge image" />
          <form action="" className="comment__form">
              <label className="comment__form-Label"> JOIN THE CONVERSATION </label>
              <textarea  defaultValue={'Add a new comment'} name="nameInput" className="comment__form-Input">
              </textarea>
              <button className="comment__submit-Button"> <p className="comment__submit-Button--text"> COMMENT </p></button>
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