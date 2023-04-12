import { Routes,Route} from "react-router-dom"
import FooterLayout from "./Layout/Footer"
import Layout from "./Layout/Layout"
import Header from "./components/Header"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {


  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path ='/' element={<Layout/>}/>
      

      </Routes>
    </div>
  );
}

export default App
