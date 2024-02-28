import './SideVideos.scss'
//adding a link allow me to catch the ids of the element but I need
//a way to pass the data here (that is state as a prop)
function SideVideos({list, selectedVideo}) {
  console.log(list)
  const listData = list.filter((item) => (item.id !== selectedVideo.id)).map((item) =>(
    <div className='side-videos__Item' key={item.id}> 
    <img className='side-videos__Image' src= {item.image}/>
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