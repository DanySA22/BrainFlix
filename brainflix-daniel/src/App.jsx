import logo from './assets/Logo/BrainFlix-logo.svg';
import mohan from './assets/images/Mohan-muruge.jpg'
import close_fullscreen from './assets/Icons/close_fullscreen.svg';
import fullscreen from './assets/Icons/fullscreen.svg';
import pause from './assets/Icons/pause.svg';
import play from './assets/Icons/play.svg';
import publish from './assets/Icons/publish.svg';
import scrub from './assets/Icons/scrub.svg';
import volume_off from './assets/Icons/volume_off.svg';
import volume_up from './assets/Icons/volume_up.svg';
import videoDetails from './data/video-details.json'
import videos from './data/videos.json'

import './App.scss';

function App() {
  return (
    <body> 
      {/* Starting header */}
      <header className="header"> 
        <img src= {logo} alt='Brainflix logo' className='header__logo'/>
        <div className='header__functionalities'>
        <textarea  className ='header__search' >
          Search 
        </textarea>
        {/* <input placeholder="Search" className ='header__search'/>  */}
        <button className ='header__upload'>  UPLOAD </button>
        <img src={mohan} alt= "Mohan's Image" className='header__image'/>
        </div>
      </header>
      {/* Ending header */}
      
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
           {/* Starting Side Videos section */}
      <section className="side-videos">
          <h3 className='side-videos__header'> NEXT VIDEOS </h3>
          <div className='side-videos__Item'> 
            <img className='side-videos__Image' src='https://unit-3-project-api-0a5620414506.herokuapp.com/images/image1.jpg '/>
            <div className='side-videos__Info'>
              <p className='side-videos__Name'> Exploring Cities of Europe </p>
              <p className='side-videos__Creator'> Ryan Hernandez </p>
            </div>
          </div>
          <div className='side-videos__Item'> 
            <img className='side-videos__Image' src='https://unit-3-project-api-0a5620414506.herokuapp.com/images/image2.jpg'/>
            <div className='side-videos__Info'>
              <p className='side-videos__Name'> Molecular Gastronomy: Secrets Unveiled </p>
              <p className='side-videos__Creator'> Cornelia Currey </p>
            </div>
          </div>
          <div className='side-videos__Item'> 
            <img className='side-videos__Image' src='https://unit-3-project-api-0a5620414506.herokuapp.com/images/image3.jpg'/>
            <div className='side-videos__Info'>
              <p className='side-videos__Name'> Embracing Serenity in Everyday Moments</p>
              <p className='side-videos__Creator'> Dalia Bennu </p> 
              </div>
          </div>
              
          <div className='side-videos__Item'> 
            <img className='side-videos__Image' src= 'https://unit-3-project-api-0a5620414506.herokuapp.com/images/image4.jpg'/>
            <div className='side-videos__Info'>
              <p className='side-videos__Name'> Beyond the Horizon </p>
              <p className='side-videos__Creator'> Emmett Wilson </p>
             </div>
          </div>

          <div className='side-videos__Item'> 
            <img className='side-videos__Image' src='https://unit-3-project-api-0a5620414506.herokuapp.com/images/image5.jpg'/>
            <div className='side-videos__Info'>
              <p className='side-videos__Name'> Wild Rhythms: Harmony of African Fauna </p>
              <p className='side-videos__Creator'> Priscilla Romani </p>
            </div>
          </div>
          <div className='side-videos__Item'> 
            <img className='side-videos__Image' src='https://unit-3-project-api-0a5620414506.herokuapp.com/images/image6.jpg'/>
            <div className='side-videos__Info'>
              <p className='side-videos__Name'> Discovering the Night Sky </p>
              <p className='side-videos__Creator'> Sabine Faucher </p>
            </div>
          </div>
          <div className='side-videos__Item'> 
            <img className='side-videos__Image' src='https://unit-3-project-api-0a5620414506.herokuapp.com/images/image7.jpg'/>
            <div className='side-videos__Info'>
              <p className='side-videos__Name'> Art Unveiled </p>
              <p className='side-videos__Creator'> Theodore Bernard </p>
            </div>
          </div>
          <div className='side-videos__Item'> 
            <img className='side-videos__Image' src='https://unit-3-project-api-0a5620414506.herokuapp.com/images/image8.jpg'/>
            <div className='side-videos__Info'>
              <p className='side-videos__Name'> A Journey Through Time and Technology </p>
              <p className='side-videos__Creator'> Farah Mikhail </p>
            </div>
          </div>
        </section>
        {/* Ending Side Videos Section */}
      </main>
   


    </body>
  )
}

export default App;
