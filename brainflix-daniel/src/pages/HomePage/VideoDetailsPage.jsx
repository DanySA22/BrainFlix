import axios from 'axios';
import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import SideVideos from '../../components/SideVideos/SideVideos';

//Use this page for alll the dynamic movement, including axios manipulation

function VideoDetailsPage()  {
   
console.log(5)
const [list, setList] = useState([])
const [selectedVideo, setSelectedVideo] = useState({})
useEffect(() => {
 const videoList = async () => {
    const dataList = await axios.get('https://unit-3-project-api-0a5620414506.herokuapp.com/videos', {
        params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}
    });
    console.log(dataList.data)
    setList(dataList.data)
};
videoList()
}, [])

// const {id} = useParams()
useEffect(() => {
    const oneVideo = async () => {
       let id = '84e96018-4022-434e-80bf-000ce4cd12b8'
       const dataDetail = await axios.get('https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}', {
           params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}
       });
       console.log(dataDetail.data)
       setSelectedVideo(dataDetail.data)
    };
    oneVideo()
}, [])

//Promises data can be handle it only inside functions, that function could be the useEffect. So instead of creating a global variable just 
//access the data that you need directly on the function that you will need it, even if this function is 
// not async. Follow this example:

// async function videoListResult(){
// const dataListResult = await videoList()
// return dataListResult
// }
// videoListResult()  //it console the data of the promise

// // const apiData = [ dataObject, setDataObject] = useState(null)
// async function videoDetail(){
// const dataList = await axios.get('https://unit-3-project-api-0a5620414506.herokuapp.com/videos/id:' + {} , {
// params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}
// })
// return console.log(dataList.data)
// }

    return (
        <>
        <SideVideos list={list}  selectedVideo = {selectedVideo}/> 
        {/* data={data} dataDetails = {dataDetails} */}
        </>
        
    )
}

export default VideoDetailsPage;