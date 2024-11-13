import React from 'react';
import Slider from 'react-slick';
import './Carousel.css'; // Importando o CSS para estilização

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Habilita os botões de navegação
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-slide">
          <img src="https://casaempirenopolis.com.br/wp-content/uploads/2024/02/casa-em-pirenopolis-abade-1024x768.jpg" alt="Cachoeira 1" />
        </div>
        <div className="carousel-slide">
          <img src="https://viajeibonito.com.br/wp-content/uploads/2022/05/pirenopolis-cachoeira-do-lazaro.jpg" alt="Cachoeira 2" />
        </div>
        <div className="carousel-slide">
          <img src="https://imgmd.net/images/c_limit%2Cw_1600/v1/guia/1684159/pirenopolis-234-c.jpg" alt="Cidade" />
        </div>
        {/* Adicione mais slides conforme necessário */}
      </Slider>
      <div className="carousel-overlay">
        <h1>Bem-vindo ao Odara</h1>
      </div>
    </div>
  );
};

// Botão "Próximo"
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
};

// Botão "Anterior"
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
};

export default Carousel;
