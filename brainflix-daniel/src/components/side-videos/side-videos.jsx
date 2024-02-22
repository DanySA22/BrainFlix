import './side-videos.scss'

function SideVideos() {
    return(
       <section className="side-videos">
        {/* Starting Side Videos section */}
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
        {/* Ending Side Videos Section */} 
    </section>
    
    )

}


export default SideVideos;