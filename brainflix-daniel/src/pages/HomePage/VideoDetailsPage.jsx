import axios from 'axios';
import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom'


//Use this page for alll the dynamic movement, including axios manipulation

function VideoDetailsPage()  {
    console.log(5)
    async function videoList(){
       const dataList = await axios.get('https://unit-3-project-api-0a5620414506.herokuapp.com/videos', {
        params: {"api_key":"a32a567a-7637-4dec-9793-fd8201ce16e2"}
       })
       return console.log(dataList)
    }
    
videoList()
    return (
        <>
        
        </>
        
    )
}

export default VideoDetailsPage;