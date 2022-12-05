import React from 'react'
import Header from "../component/Header";
import Footer from "../component/Footer";
import HeroSection from '../component/HeroSection';
import Project from '../component/Project';
import Blog from '../component/Blog';
import About from '../component/About';


const Home = ()=> {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <Project/>
        <Blog/>
        <About/>
        <Footer/>
    </div>
  )
}

export default Home
