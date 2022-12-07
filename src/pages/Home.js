import React from 'react'
import Header from "../component/Header";
import HeroSection from '../component/HeroSection';
import Project from '../component/Project';
import Blog from '../component/Blog';
import About from '../component/About';
import Contact from '../component/Contact'


const Home = ()=> {
  return (
    <>
        <Header></Header>
        <HeroSection/>
        <Project/>
        <Blog/>
        <About/>
        <Contact/>
    </>
  )
}

export default Home
