import './side-videos.scss'
import mainData from '../../data/video-details.json'
import sideData from '../../data/videos.json'

function SideVideos(props) {
  console.log(props.data)
  const dataElements = props.data
  console.log(dataElements)
  
  const listData = dataElements.filter((dataElement) => (dataElement.id !== '84e96018-4022-434e-80bf-000ce4cd12b8')).map((dataElement) =>(
    <div className='side-videos__Item' key={dataElement.id}> 
    <img className='side-videos__Image' src= {dataElement.image}/>
    <div className='side-videos__Info'>
      <p className='side-videos__Name'> {dataElement.title} </p>
      <p className='side-videos__Creator'> {dataElement.channel} </p>
    </div>
  </div>
  ))
    return(
       <section className="side-videos">
        {/* Starting Side Videos section */}
      <h3 className='side-videos__header'> NEXT VIDEOS </h3>
      {listData}
      {/* Ending Side Videos Section */} 
    </section>
    
    )

}


export default SideVideos;