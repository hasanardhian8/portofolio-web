import React from 'react'
import Header from "../component/Header";
import Footer from "../component/Footer";
import HeroSection from '../component/HeroSection';
import Project from '../component/Project';


const Home = ()=> {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <Project/>
        <h1>home</h1>
      <Footer/>
    </div>
  )
}

export default Home
