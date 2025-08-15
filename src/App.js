
import './App.css';
import Header from './compoents/header/Header';
import Banner from './compoents/banner/Banner';
import Explore from './compoents/explore/Explore';
import Blogs from './compoents/blog/Blogs';
import Gallery from './compoents/gallery/Gallery';
import Footer from './compoents/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Explore/>
      <Blogs/>
      <Gallery/>
      <Footer/>
      
    </div>
  );
}

export default App;
