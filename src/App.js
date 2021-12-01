import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Project from './components/Project/Project';
import Services from './components/Services/Services';
// import Skills from './components/Skills/Skills';
import ContactMe from './components/ContactMe/ContactMe';
import PersonalSkills from './components/PersonalSkills/PersonalSkills';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,Link 
// } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <About></About>
      <Services></Services>
      <Project></Project>
      <PersonalSkills></PersonalSkills>
      <ContactMe></ContactMe>
    

    </div>
  );
}

export default App;
