import Home from "./components/registration/Home";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Starter from "./views/Starter";
import FullLayout from "./layouts/FullLayout"
import Header from "./layouts/Header";
const App = () => {
  return (<>

    {/* <Home/> */}
    {/* <Link to="/Starter" style={{ textDecoration: 'none' }}><Button variant="contained" disableElevation style={{ borderRadius: '25px', backgroundColor: '#b08d80', color: '#050505', marginTop: '20px' }}>Admin</Button></Link> */}
    {/* <Starter/> */}
    {/* <Router> */}
    <Routes>
      {/* <Route path="/" element={<Header/>} /> */}
      <Route exact path="/" element={<Home/>} />
      <Route path="/FullLayout" element={<FullLayout/>} />
    </Routes>

    {/* </Router> */}
  </>
  )
};

export default App;
