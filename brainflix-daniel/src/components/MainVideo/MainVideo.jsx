import './MainVideo.scss'


function MainVideo() {
    const listDataMain = dataDetails.filter((dataDetail) => (dataDetail.id == identification)).map((dataDetail) => (
        <section className='main-video' key={dataDetail.id}>
        <h2 className='main-video__header'> {dataDetail.title} </h2>
        <div className='main-video__info'>
        <div className='main-video__info-First'> 
        <p className='main-video__author'> <span>By</span> {dataDetail.channel}</p>
        <p className='main-video__date'> {new Date(dataDetail.timestamp).toLocaleString('en-US', {year: 'numeric', month: 'numeric', day: 'numeric'})}  </p> 
        </div> 
        <div className='main-video__info-Second'>
         <p className='main-video__views'> {dataDetail.views} </p>
         <p className='main-video__likes'> {dataDetail.likes} </p>
        </div> 
        </div> 
        <div className='main-video__details'>
        <p className='main-video__text'>
        {dataDetail.description}
        </p> 
        </div> 
     </section>
      ))
    const commentMain = dataDetails.filter((dataDetail) => (dataDetail.id == identification)).map((dataDetail) => (
      <section className='comment' key={dataDetail.id}>
      <h2 className="comment__amount"> {dataDetail.comments.length} Comments </h2>
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
        { dataDetail.comments.map((commentItem) =>
        <div  className = 'comment__user' key={commentItem.id}>
          <img className = 'comment__user-Image'/>
          <div className = 'comment__user-Info'> 
            <p className = 'comment__user-Name'> {commentItem.name} </p>
            <p className = 'comment__user-Date'>  {new Date(commentItem.timestamp).toLocaleString('en-US', {year: 'numeric', month: 'numeric', day: 'numeric'})} </p>
            <p className = 'comment__user-Text'> 
            {commentItem.comment}
            </p>
          </div>
        </div>
        )}
        </div>
      </section>
      ))


    return (
        <>
        {listDataMain}
        </>

      )

}

export default MainVideo;