import './App.css'
import {Routes,Route} from "react-router-dom"
import {Dashboard,Add,Edit,RoadMap,FeedbackInfo} from "./views"
function App() {

  return (
    <div className="app">

      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/edit" element={<Edit/>}/>
        <Route path="/roadmap" element={<RoadMap/>}/>
        <Route path="/comments" element={<FeedbackInfo/>}/>
      </Routes>
    </div>
  )
}

export default App
