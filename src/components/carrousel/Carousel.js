import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import bulbasaur from './pokemon-header/bulbasaur-pokemon.png';
import eevee from './pokemon-header/eevee-pokemon.png';
import pikachu from './pokemon-header/pikachu-pokemon.png';
import squirtle from './pokemon-header/squirtle-pokemon.png';
import charmander from './pokemon-header/charmander-pokemon.webp';

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: 3,
    centerMode: true,
    cssEase: 'ease-out', // Adiciona uma transição suave
    beforeChange: (current, next) => setActiveSlide(next),
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        <div className={`carousel-slide ${activeSlide === 0 ? 'active' : ''}`}>
          <img src={pikachu} alt="Slide 1" width={'350px'} height={'350px'} />
        </div>
        <div className={`carousel-slide ${activeSlide === 1 ? 'active' : ''}`}>
          <img src={eevee} alt="Slide 2" width={'350px'} height={'350px'} />
        </div>
        <div className={`carousel-slide ${activeSlide === 2 ? 'active' : ''}`}>
          <img src={squirtle} alt="Slide 3" width={'350px'} height={'350px'} />
        </div>
        <div className={`carousel-slide ${activeSlide === 3 ? 'active' : ''}`}>
          <img src={charmander} alt="Slide 4" width={'400px'} height={'350px'} />
        </div>
        <div className={`carousel-slide ${activeSlide === 4 ? 'active' : ''}`}>
          <img src={bulbasaur} alt="Slide 5" width={'350px'} height={'350px'} />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
