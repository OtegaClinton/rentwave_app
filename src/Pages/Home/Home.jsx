import React, { useRef } from 'react'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import Content from '../../Components/Content/Content'
import Footer from '../../Components/Footer/Footer'
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const Home = () => {
  const headerRef = useRef(null);

    return (
        <div className='AppContainer'>
          <Header  headerRef={headerRef}/>
          <Hero />
          <Content />
          <Footer  headerRef={headerRef}/>
        </div>
      )
}

export default Home;