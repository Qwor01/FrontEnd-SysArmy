import { useState } from 'react'
import Carousel from './assets/Components/Carousel'
import Navbar from './assets/Components/Navbar';
import Nerdearla from './assets/Components/Nerdearla';
import Birras from './assets/Components/Birras';
import Footer from './assets/Components/Footer';

function App() {
const[carouselView, setCarouselView] = useState(true);
const[navbarView, setNavbarView] = useState(false);
const[nerdearlaView, setNerdearlaView] = useState(false);
const[birrasView, setBirrasView] = useState(false);

  return (
    <>
      {carouselView &&
       <Carousel 
        setCarouselView = {setCarouselView}
        setNavbarView = {setNavbarView}
        setNerdearlaView = {setNerdearlaView}
        setBirrasView = {setBirrasView}/>
      }

      {navbarView &&
      <Navbar         
        setCarouselView = {setCarouselView}
        setNavbarView = {setNavbarView}
        setNerdearlaView = {setNerdearlaView}
        setBirrasView = {setBirrasView}/>
      }
      {nerdearlaView &&
      <Nerdearla />}

      {birrasView &&
      <Birras />}
    </>
  )
}

export default App
