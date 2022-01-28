import './App.css';
import Home from './components/Home';
import About from './components/About';
import Header from "./components/Header";
import Menu from "./components/Menu";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Reviews from "./components/Reviews";
import MyFooter from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <About />
        <Menu />
        <Reviews />
        <Blog />
        <Contact />

        <MyFooter />
    </div>
  );
}

export default App;
