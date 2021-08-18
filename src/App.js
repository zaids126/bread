import './App.css';
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import Card from './Components/Card';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
     <Navigation/>
     <Header/>
     <Card/>
     <Carousel/>
     <Footer/>
    </div>
  );
}

export default App;
