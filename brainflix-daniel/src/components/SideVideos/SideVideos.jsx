import './SideVideos.scss'

function SideVideos({data, identification, updateIdentification}) {
  const dataElements = data
  const listData = dataElements.filter((dataElement) => (dataElement.id !== identification)).map((dataElement) =>(
    <div className='side-videos__Item' key={dataElement.id} onClick={event => updateIdentification(event, dataElement.id)}> 
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