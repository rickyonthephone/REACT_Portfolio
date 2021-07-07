import logo from './logo.svg';
import './App.css';
import {Switch, BrowserRouter as Router, Link, Route} from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (

    <Router>
    <div className="App">
      <MyNavbar></MyNavbar>
    <Switch>
      <Route exact path="/">
        <AboutMe></AboutMe>
      </Route>
      <Route path="/portfolio">
        <Portfolio></Portfolio>
      </Route>
      <Route path="/contact">
        <Contact></Contact>
      </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
