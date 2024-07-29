import './App.css';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Tours from './Pages/Tour/Tours';
import { Description } from './Components/Content/ContentTitles/ContentInfo';
import ScrollgToTop from './Components/ScrollgToTop';
import AboutUs from './Pages/AboutUs/AboutUs';
import TripPackage from './Pages/TripPackage/TripPackage';
import TermConditons from './Pages/Contact/TermConditons';
import Whatsapp from "./Assets/whatsapp (1).png";
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const routes = (

  <Router>
    <ScrollgToTop>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path="tours" exact element={<Tours />}>
          {Description.map((item, i) => (
            <Route path={item.path} key={i} exact element={item.element} />
          ))}
        </Route>
        <Route path='about' exact element={<About />} />
        <Route path='contact' exact element={<Contact />} />
        <Route path='aboutus' exact element={<AboutUs />} />
        <Route path='package' exact element={<TripPackage />} />
        <Route path='terms' exact element={<TermConditons />} />
      </Routes>
    </ScrollgToTop>
  </Router>
)

const phoneNumber = '8790336560';
const message = 'Hello!';

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

function App() {


  return (
    <div className="App">
      {routes}
      <div className='overlay-icons'>
        <p>FollowUs-on</p>
        <div>
          <span style={{color:'rgb(255, 16, 56)'}}> <FaInstagram /></span>
          <span style={{color:'blue'}}> <FaFacebook /></span>
          <span> <FaXTwitter /></span>
        </div>
      </div>
      <div className='iconWhatsapp'>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <img src={Whatsapp} style={{
            color: "green",
            width: '50px'
          }} />
        </a>
      </div>
    </div>
  );
}

export default App;
