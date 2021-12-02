import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Project from './components/Project/Project';
import Services from './components/Services/Services';
import ContactMe from './components/ContactMe/ContactMe';
import PersonalSkills from './components/PersonalSkills/PersonalSkills';
import {
  BrowserRouter as Router,
  Switch,
  Route,Link 
} from "react-router-dom";
import Project_1 from './components/Project_1/Project_1';
import Main from './components/Main/Main';
import Project_2 from './components/Project_2/Project_2';
import Project_3 from './components/Project_3/Project_3';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Main></Main>
          </Route>
          <Route path="/main">
            <Main></Main>
          </Route>
          <Route path="/project1">
            <Project_1></Project_1>
          </Route>
          <Route path="/project2">
            <Project_2></Project_2>
          </Route>
          <Route path="/project3">
           <Project_3></Project_3>
          </Route>
        </Switch>
       
      </Router>
    </div>
  );
}

export default App;
