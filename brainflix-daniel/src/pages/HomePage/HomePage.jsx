import {useState} from 'react'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import '../../App.scss';
import SideVideos from '../../components/SideVideos/SideVideos';
import Navigation from '../../components/Navigation/Navigation';
import MainVideo from '../../components/MainVideo/MainVideo'
import VideoImage from '../../components/VideoImage/VideoImage'
import mainData from '../../data/video-details.json'
import sideData from '../../data/videos.json'
import VideoDetailsPage from './VideoDetailsPage';

function HomePage()  {
// Defining states based on the two file.json
const [dataDetails, setDataDetails] = useState(mainData[0])
const [data, setData] = useState(sideData)


// Creating callback prop function that will be triggered by event handler on child component. This function include dataDetails setter function 
//to modificate his default state value.
const updateIdentification = (event, text) => {
   setDataDetails(mainData.find((element) => element.id == text))
}


return (
       
    <> 
    <Navigation/> 
    <VideoImage dataDetails = {dataDetails}/>
    <main className='main'>
      <div className='main__subdivision' >   
      
    <MainVideo dataDetails = {dataDetails}/>
             
    </div> 
    <SideVideos data={data} dataDetails = {dataDetails} updateIdentification = {updateIdentification} /> 
    </main>
  </>
)

}

export default HomePage;