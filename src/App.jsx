import { GlobalStyles } from './Global.style'
import {Navbar} from './Components/index'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './Pages/Home'
import Work from './Pages/Work'
import Contact from './Pages/Contact'
function App() {
  

  return (
    <>
    <Router>
      <GlobalStyles/>
      <Navbar/> 
      <Routes>
        <Route path= "/stitch-customs-keyboards/" element={<Home></Home>}/>
        <Route path="/stitch-customs-keyboards/work" element={<Work></Work>}/>
        <Route path="/stitch-customs-keyboards/contact"element={<Contact></Contact>}/>
      </Routes>
    </Router>
    </>
  )
}





export default App
