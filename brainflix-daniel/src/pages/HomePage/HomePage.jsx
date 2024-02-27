import axios from 'axios';
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from "react-router-dom"
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

// For now I am going to add VideoDetailsPage code here until I figure out why the console.log is not working in that page
console.log(5)
    async function videoList(){
       const dataList = await axios.get('https://unit-3-project-api-0a5620414506.herokuapp.com/videos', {
        params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}
       })
       return dataList.data
    }

    async function videoListResult(){
         const dataListResult = await videoList()
         return dataListResult.data
    }
const dataListResult = videoListResult()
console.log(videoList)
// const apiData = [ dataObject, setDataObject] = useState(null)
async function videoDetail(){
  const dataList = await axios.get('https://unit-3-project-api-0a5620414506.herokuapp.com/videos/id:' + {} , {
   params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}
  })
  return console.log(dataList.data)
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