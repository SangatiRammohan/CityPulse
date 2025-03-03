import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
    <section>
      <div className="hero">
        <div className="heropart1">
          <p>CityPulse</p>
          <h1>Your Perfect Tours <span>Around the World</span> Start Here!</h1>
          <h2>Join our group and individual tours. Enjoy your vacations and get amazing emotions!</h2>
          <div className="explorebtns">
            <button>Explore Tours</button>
            <button> Watch Tour</button>
          </div>
        </div>
        <div className="heropart2">
          <img src="../../../public/HeroAssests/travel.png" alt="" />
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero
