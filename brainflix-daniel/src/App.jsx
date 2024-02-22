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
  
  return (
    <body> 
      <Navigation/>
       {/* Big video Image */}
       
       <video className='video-Image' controls poster='https://unit-3-project-api-0a5620414506.herokuapp.com/images/image0.jpg'>
        </video>
        
      <main className='main'>
        <div className='main__subdivision' >   
        {/* Main Video information */}
        <section className='main-video'>
           <h2 className='main-video__header'> Tech Trends: The Future of Artificial Intelligence </h2>
           <div className='main-video__info'>
           <div className='main-video__info1'> 
           <p className='main-video__author'> By Aiden Thompson</p>
           <p className='main-video__date'>  8/8/2023 </p> 
           </div> 
           <div className='main-video__info2'>
            <p className='main-video__views'> 980,544 </p>
            <p className='main-video__likes'> 22,479 </p>
           </div> 
           </div> 
           <div className='main-video__details'>
           <p className='main-video__text'>
           Explore the cutting-edge developments and predictions for Artificial Intelligence in the 
           coming years. From revolutionary breakthroughs in machine learning to the ethical considerations 
           influencing AI advancements, this exploration transcends the boundaries of mere speculation. 
           Join us on a journey that navigates the intricate interplay between innovation, ethics, 
           and the ever-evolving tech frontier.
           </p> 
           </div> 
        </section>
        {/* Ending Main Video Information */}

        {/* Starting Comments section */}
        <section className='comment'>
        <h2 className="comment__amount"> 3 Comments </h2>
        <div className="comment__subdivision">
            <img src={mohan}  className="comment__image" alt="Mohan Muruge image" />
            <form action="" className="comment__form">
                <label for="" className="comment__form-Label"> JOIN THE CONVERSATION </label>
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
   


    </body>
  )
}

export default App;
