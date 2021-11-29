import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import ContactMe from './components/ContactMe/ContactMe';
import Home from './components/Home/Home';
import MenuBar from './components/MenuBar/MenuBar';
// import NavBar from './components/NavBar/Navbar';

function App() {
  return (
    <div className="App">
      <MenuBar></MenuBar>
      <Banner></Banner>
      <Home></Home>
      <About></About>
      <ContactMe></ContactMe>
    </div>
  );
}

export default App;
