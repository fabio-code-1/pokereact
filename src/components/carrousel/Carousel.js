import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import bulbasaur from '../../assets/images/pokemon-header/bulbasaur-pokemon.png';
import eevee from '../../assets/images/pokemon-header/eevee-pokemon.png';
import pikachu from '../../assets/images/pokemon-header/pikachu-pokemon.png';
import squirtle from '../../assets/images/pokemon-header/squirtle-pokemon.png';
import charmander from '../../assets/images/pokemon-header/charmander-pokemon.webp';

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
    centerPadding: '10px', // Espaçamento entre os slides
    cssEase: 'ease-out', // Adiciona uma transição suave
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          centerPadding: '25px', // Espaçamento maior entre os slides em dispositivos móveis
        },
      },
    ],
  };

  return (
    <div className="carousel h-100 ">
      <Slider {...settings}>
        <div className={`carousel-slide d-flex align-items-center justify-content-center ${activeSlide === 0 ? 'active' : ''}`}>
          <img src={pikachu} alt="Slide 1" className=" sm-img " width={'350px'} height={'350px'} />
        </div>
        <div className={`carousel-slide d-flex align-items-center justify-content-center ${activeSlide === 1 ? 'active' : ''}`}>
          <img src={eevee} alt="Slide 2" className=" sm-img " width={'350px'} height={'350px'} />
        </div>
        <div className={`carousel-slide d-flex align-items-center justify-content-center ${activeSlide === 2 ? 'active' : ''}`}>
          <img src={charmander} alt="Slide 3" className=" sm-img " width={'400px'} height={'350px'} />
        </div>
        <div className={`carousel-slide d-flex align-items-center justify-content-center ${activeSlide === 3 ? 'active' : ''}`}>
          <img src={squirtle} alt="Slide 4" className=" sm-img " width={'350px'} height={'350px'} />
        </div>
        <div className={`carousel-slide d-flex align-items-center justify-content-center ${activeSlide === 4 ? 'active' : ''}`}>
          <img src={bulbasaur} alt="Slide 5" className=" sm-img " width={'350px'} height={'350px'} />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
