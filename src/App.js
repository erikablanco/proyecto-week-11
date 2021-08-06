import  Header from './components/Header/';
import Homepage from './veiws/Homepage';
import CarouselContainer from './components/CarouselContainer/index';
import Contact from './veiws/Contact';
import About from './veiws/About';
import Login from './veiws/Login';
import Footer from './components/Footer/index'
//import { Router } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {  
  return (
    <div className="App"> 
      <Router> 
      <Header contact ="contactenos"/>
            <Switch>
          <Route path="/about">
            <About />
            <Footer/>
          </Route>
          <Route path="/contact">
            <Contact/>
            <Footer/>
          </Route>
          <Route path="/login">
            <Login/>
            <Footer/>
          </Route>
          <Route path="/">
            <CarouselContainer/> 
            <Homepage/>            
          </Route>
        </Switch> 
                
       </Router>  
       
    </div>
  );
}

export default App;
