import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';
import VideoDetailsPage from "./pages/HomePage/VideoDetailsPage";

function App() {
 
  return (

    <BrowserRouter>
    <Routes>
        <Route path = "/"  element={<HomePage/>}/>
    </Routes>
    <Routes>
       <Route path = "/upload"  element = {<UploadPage/>}/>
    </Routes>
    <Routes>
       <Route path = 'video/:id'  element = {<VideoDetailsPage/>}/>
    </Routes>
       
    </BrowserRouter>
  )
}

export default App;
