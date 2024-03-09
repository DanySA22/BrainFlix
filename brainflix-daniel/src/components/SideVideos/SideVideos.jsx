import './SideVideos.scss'    
import {Link} from "react-router-dom"

function SideVideos({list, selectedVideo, firstObject}) {
  console.log(selectedVideo)
  //iterate over the API data list of video to render related JSX. It also include Link
  // to route to the respective endpoint when JSX element is clicked.
  const listData = list.filter((item) => (item.id !== selectedVideo.id)).map((item) =>(
    <div className='side-videos__Item' key={item.id}> 
    <Link to={`/video/${item.id}`} className='side-videos__Image--Link'><img className='side-videos__Image' src= {item.image}/> </Link>
    <div className='side-videos__Info'>
      <p className='side-videos__Name'> {item.title} </p>
      <p className='side-videos__Creator'> {item.channel} </p>
    </div>
  </div>
  ))
    return(
       <section className="side-videos">
       
      <h3 className='side-videos__header'> NEXT VIDEOS </h3>
      {listData}
     
    </section>
    
    )

}


export default SideVideos;