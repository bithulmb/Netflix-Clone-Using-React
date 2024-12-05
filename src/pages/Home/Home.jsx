import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className="hero relative  ">
          <img src={hero_banner} alt="" className='banner-img w-[100%]  ' />
          <div className="hero-caption absolute w-[100%]  bottom-0 ">
            <img src={hero_title} alt="" className='caption-img w-[90%] max-w-[420px] mb-[30px] ' />
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sint reiciendis minima eum sunt dignissimos rem labore debitis quibusdam perspiciatis eveniet pariatur eos, accusantium perferendis, dolores animi quam error facere.</p>
            <div className="hero-btns flex gap-[10px]  ">
              <button className='btn' ><img src={play_icon} alt=""  className='w-[25px] '/>Play</button>
              <button className='btn dark-btn' ><img src={info_icon} alt="" className='w-[25px] text-black'/>More Info</button>
    
            </div>
            <TitleCards/>
          </div>
        </div>
        <div className="more-cards">
          <TitleCards title="Blockbuster Movies" category="top_rated"/>
          <TitleCards title="Only On Netfilx" category="popular" />
          <TitleCards title="Upcoming" category="upcoming" />
          <TitleCards title="Top Picks for you"/>
        </div>
        <Footer/>
        
      
    </div>
  )
}

export default Home
