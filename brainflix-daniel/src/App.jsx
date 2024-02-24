import {useState} from 'react'
import './App.scss';
import SideVideos from './components/SideVideos/SideVideos';
import Navigation from './components/Navigation/Navigation';
import MainVideo from './components/MainVideo/MainVideo'
import VideoImage from './components/VideoImage/VideoImage'
import mainData from './data/video-details.json'
import sideData from './data/videos.json'

function App() {
  // Defining states based on the two file.json
  const [dataDetails, setDataDetails] = useState(mainData)
  const [data, setData] = useState(sideData)
  const [identification, setIdentification] = useState(dataDetails[0].id)
 
  // Creating callback prop function that will be triggered by 
  //event handler on child component. This function include a setter function to modificate
  // the state of the id used for filter by the selected element id.
  const updateIdentification = (event, text) => {
    setIdentification(text)
  }
  return (
    <> 
      <Navigation/> 
      <VideoImage dataDetails = {dataDetails} identification = {identification}/>
      <main className='main'>
        <div className='main__subdivision' >   
        
        <MainVideo dataDetails = {dataDetails} identification = {identification} dataChange={setDataDetails} />
               
      </div> 
      <SideVideos data={data} dataChange={setData} identification = {identification} updateIdentification = {updateIdentification} /> 
      </main>
    </>
  )
}

export default App;
