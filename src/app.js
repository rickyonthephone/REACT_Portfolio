import './App.css';
import {Switch, BrowserRouter as Router, Link, Route} from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";

function App() {
  return (

    <Router>
    <div className="App">
      <MyNavbar></MyNavbar>
    <Switch>

      <Route exact path="/">
        <AboutMe />
      </Route>

      <Route path="/portfolio">
        <Portfolio />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/resume">
        <Resume />
      </Route>

      <Route path='*'>
        <AboutMe />
      </Route>

    </Switch>
    </div>
    <div className="Footer">
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
