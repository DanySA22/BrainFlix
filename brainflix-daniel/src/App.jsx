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
  const dataMainDetails = dataDetails
  
  const videoMain = dataMainDetails.filter((dataMainDetail) => (dataMainDetail.id == '84e96018-4022-434e-80bf-000ce4cd12b8')).map((dataMainDetail) => (
    <video className='video-Image' controls poster= {dataMainDetail.image} key={dataMainDetail.id}>
    </video>
  ))

  const listDataMain = dataMainDetails.filter((dataMainDetail) => (dataMainDetail.id == '84e96018-4022-434e-80bf-000ce4cd12b8')).map((dataMainDetail) => (
    <section className='main-video' key={dataMainDetail.id}>
    <h2 className='main-video__header'> {dataMainDetail.title} </h2>
    <div className='main-video__info'>
    <div className='main-video__info1'> 
    <p className='main-video__author'> <span>By</span> {dataMainDetail.channel}</p>
    <p className='main-video__date'> {dataMainDetail.timestamp}  </p> 
    </div> 
    <div className='main-video__info2'>
     <p className='main-video__views'> {dataMainDetail.views} </p>
     <p className='main-video__likes'> {dataMainDetail.likes} </p>
    </div> 
    </div> 
    <div className='main-video__details'>
    <p className='main-video__text'>
    {dataMainDetail.description}
    </p> 
    </div> 
 </section>
  ))
console.log(dataMainDetails[0].comments[1].name)
 const commentMain = dataMainDetails.filter((dataMainDetail) => (dataMainDetail.id == '84e96018-4022-434e-80bf-000ce4cd12b8')).map((dataMainDetail) => (
  <section className='comment' key={dataMainDetail.id}>
  <h2 className="comment__amount"> {dataMainDetail.comments.length} Comments </h2>
  <div className="comment__subdivision">
      <img src={mohan}  className="comment__image" alt="Mohan Muruge image" />
      <form action="" className="comment__form">
          <label className="comment__form-Label"> JOIN THE CONVERSATION </label>
          <textarea name="nameInput" className="comment__form-Input">
           Add a new comment
          </textarea>
          <button className="comment__submit-Button"> <p className="comment__submit-Button--text"> COMMENT </p></button>
      </form> 
    </div >
    <div className = 'comment__display'>
    <div  className = 'comment__user'>
      <img className = 'comment__user-Image'/>
      <div className = 'comment__user-Info'> 
        <p className = 'comment__user-Name'> Noah Duncan </p>
        <p className = 'comment__user-Date'>  8/11/2023 </p>
        <p className = 'comment__user-Text'> 
        Your insights into the future of AI are enlightening! The intersection of technology 
        and ethics is particularly thought-provoking. Keep us updated on the tech front!
        </p>
      </div>
    </div>
    </div>
  </section>
  ))
  return (
    <> 
      <Navigation/> 
       {/* Big video Image */}
       {videoMain}
       
      <main className='main'>
        <div className='main__subdivision' >   
        {/* Main Video information */}
        {listDataMain}
       
        {/* Ending Main Video Information */}

        {/* Starting Comments section */}
        <section className='comment'>
        <h2 className="comment__amount"> 3 Comments </h2>
        <div className="comment__subdivision">
            <img src={mohan}  className="comment__image" alt="Mohan Muruge image" />
            <form action="" className="comment__form">
                <label className="comment__form-Label"> JOIN THE CONVERSATION </label>
                <textarea name="nameInput" className="comment__form-Input">
                 Add a new comment
                </textarea>
                <button className="comment__submit-Button"> <p className="comment__submit-Button--text"> COMMENT </p></button>
            </form> 
          </div >
          <div className = 'comment__display'>
          <div  className = 'comment__user'>
            <img className = 'comment__user-Image'/>
            <div className = 'comment__user-Info'> 
              <p className = 'comment__user-Name'> Noah Duncan </p>
              <p className = 'comment__user-Date'>  8/11/2023 </p>
              <p className = 'comment__user-Text'> 
              Your insights into the future of AI are enlightening! The intersection of technology 
              and ethics is particularly thought-provoking. Keep us updated on the tech front!
              </p>
            </div>
          </div>
          <div  className = 'comment__user'>
            <img className = 'comment__user-Image'/>
            <div className = 'comment__user-Info'> 
              <p className = 'comment__user-Name'> Terry Wong </p>
              <p className = 'comment__user-Date'>  8/10/2023 </p>
              <p className = 'comment__user-Text'> This video is a fantastic overview of the AI landscape. 
              Your ability to distill complex concepts into digestible content is impressive. Can t wait for 
              more tech insights </p>
            </div>
          </div>
          <div  className = 'comment__user comment__user--border'>
            <img className = 'comment__user-Image'/>
            <div className = 'comment__user-Info'> 
              <p className = 'comment__user-Name'> Janice Rodriguez </p>
              <p className = 'comment__user-Date'>  8/9/2023 </p>
              <p className = 'comment__user-Text '> Your channel is my go-to source for staying updated on tech trends. 
              The exploration of AI's future implications is both informative and exciting. Kudos on another excellent 
              video!</p>
            </div>
          </div>
          </div>
        </section>
        
        {/* Ending comments section */}
        </div> 
         <SideVideos data={data} dataChange={setData} /> 
      </main>
   


    </>
  )
}

export default App;
