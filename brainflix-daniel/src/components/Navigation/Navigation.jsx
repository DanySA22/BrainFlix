import './Navigation.scss'
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import mohan from '../../assets/images/Mohan-muruge.jpg';
import {Link} from "react-router-dom"
function Navigation ()  {
    return (
      <header className="header"> 
      <Link to="/" className='header__logo'><img src= {logo} alt='Brainflix logo' /></Link>
      <div className='header__functionalities'>
      <textarea  defaultValue={'Search'} className ='header__search' >
      </textarea>
      <Link to="/upload" className ='header__upload'><button className ='header__upload--button'>  UPLOAD  </button></Link>
      <img src={mohan} alt= "Mohan's Image" className='header__image'/>
      </div>
      </header>
    
    )
}

export default Navigation;
