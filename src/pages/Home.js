import React from 'react';
import Carousel from '../components/Carousel';
import Map from '../components/Map';
import EmpresaCard from '../components/EmpresaCard'; // Importando o componente EmpresaCard
import Slider from 'react-slick'; // Importando o Slider do React Slick

const Home = () => {
  const partners = [
    {
      name: 'Restaurante A',
      description: 'Um ótimo lugar para comer pratos típicos.',
      imageUrl: 'https://example.com/image1.jpg', // Substitua pelo URL da imagem
    },
    {
      name: 'Cachoeira B',
      description: 'Uma bela cachoeira para relaxar.',
      imageUrl: 'https://example.com/image2.jpg', // Substitua pelo URL da imagem
    },
    {
      name: 'Pousada C',
      description: 'Acomodações confortáveis e acolhedoras.',
      imageUrl: 'https://example.com/image3.jpg', // Substitua pelo URL da imagem
    },
    // Adicione mais parceiros conforme necessário
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Número de cartões a serem exibidos
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <nav>
        {/* Sua barra de navegação aqui */}
      </nav>
      <Carousel />
      <section className="p-5 bg-beige">
        <h2 className="text-2xl font-bold">Bem-vindo à Cidade</h2>
        <p>
          Nossa cidade é conhecida por suas belas cachoeiras e natureza exuberante. 
          O clube de vantagens foi criado para oferecer aos moradores e visitantes 
          acesso a descontos e benefícios em restaurantes, passeios e muito mais.
        </p>
        <p>
          Explore as cachoeiras e descubra os melhores lugares para relaxar e aproveitar a natureza.
        </p>
      </section>
      <section className="p-5">
        <h2 className="text-2xl font-bold">Empresas Parceiras</h2>
        <Slider {...settings}>
          {partners.map((partner, index) => (
            <div key={index} className="p-2">
              <EmpresaCard 
                name={partner.name} 
                description={partner.description} 
                imageUrl={partner.imageUrl} 
              />
            </div>
          ))}
        </Slider>
      </section>
      <section className="p-5">
        <h2 className="text-2xl font-bold">Localização das Cachoeiras e Parceiros</h2>
        <Map />
      </section>
    </div>
  );
};

export default Home;
