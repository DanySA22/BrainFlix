import './nav.scss'
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import mohan from '../../assets/images/Mohan-muruge.jpg';

function Navigation ()  {
    return (
       
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
    
    )
}

export default Navigation;
