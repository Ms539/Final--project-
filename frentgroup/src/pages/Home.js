import React from 'react'
import {Carousel} from 'react-bootstrap';
import Collection from '../images/./Home1.jpg';
import Shorts from '../images/./Shorts.jpg';
import Potential from '../images/./YOURPOTENTIAL.jpg';

const Home = () => {
  return (
    <div >
      <Carousel variant="dark" className="carrousel">
      <Carousel.Item>
        <img
          className="image"
          src={Collection}
          alt="Our COLLECTION."
        />
      <Carousel.Caption>
        <h3 className='our'>Our Collection.</h3>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image"
          src={Shorts}
          alt="Shorts"
        />
        <Carousel.Caption>
          <h3 className='long'>The Long and Short of it.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image"
          src={Potential}
          alt="Potential"
        />
        <Carousel.Caption>
          <h3 className='redefine'>
          REDEFINE YOUR POTENTIAL.
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      {/* <p style={{fontFamily:'serif',position:'initial'}}>
         It’s not our goals that unite us, but the things we do to achieve them. Because although our training grounds and end goals might be different, sweat is our sport. And we’re a team of individuals who know that to go further, we go together.
      </p> */}

    </div>
  )
}

export default Home