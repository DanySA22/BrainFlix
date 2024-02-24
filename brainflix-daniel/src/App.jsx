import {useState} from 'react'
import logo from './assets/Logo/BrainFlix-logo.svg';
import mohan from './assets/images/Mohan-muruge.jpg';
import './App.scss';
import SideVideos from './components/side-videos/side-videos';
import Navigation from './components/nav/nav';
import mainData from './data/video-details.json'
import sideData from './data/videos.json'

function App() {
  const [dataDetails, setDataDetails] = useState(mainData)
  const [data, setData] = useState(sideData)
  const [identification, setIdentification] = useState(dataDetails[0].id)
 
  const updateIdentification = (event, text) => {
    setIdentification(text)
  }
  const videoMain = dataDetails.filter((dataDetail) => (dataDetail.id == identification)).map((dataDetail) => (
    <div className='video-container'>
    <video className='video-container__Image' controls poster= {dataDetail.image} key={dataDetail.id}>
    </video>
    </div>
  ))

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
console.log(dataDetails[0].comments[1].name)
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
      <Navigation/> 
      {videoMain}
      <main className='main'>
        <div className='main__subdivision' >   
        {listDataMain}
           
        {commentMain}
        
      </div> 
      <SideVideos data={data} dataChange={setData} idChange = {setIdentification}  identifier = {identification} test = {updateIdentification} /> 
      </main>
    </>
  )
}

export default App;
