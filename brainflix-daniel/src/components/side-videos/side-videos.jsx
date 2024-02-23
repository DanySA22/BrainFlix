import './side-videos.scss'
import mainData from '../../data/video-details.json'
import sideData from '../../data/videos.json'

function SideVideos({data, idChange, identifier, test}) {
  console.log(data)
  const dataElements = data
  console.log(dataElements)
 console.log(identifier)
  const listData = dataElements.filter((dataElement) => (dataElement.id !== identifier)).map((dataElement) =>(
    <div className='side-videos__Item' key={dataElement.id} onClick={event => test(event, dataElement.id)}> 
    <img className='side-videos__Image' src= {dataElement.image}/>
    <div className='side-videos__Info'>
      <p className='side-videos__Name'> {dataElement.title} </p>
      <p className='side-videos__Creator'> {dataElement.channel} </p>
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