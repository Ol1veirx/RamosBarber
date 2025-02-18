import React from 'react';
import Header from '../components/Header/Header';
import { MapPin, Clock, Scissors } from 'lucide-react';
import { Card, CardContent } from '../components/Card/Card';
import './Home.css';

const services = [
  {
    name: 'Sobrancelha',
    price: 'R$ 10',
    image: '/api/placeholder/300/200',
    category: 'normal'
  },
  {
    name: 'Barboteapia',
    price: 'R$ 20',
    image: '/api/placeholder/300/200',
    category: 'normal'
  },
  {
    name: 'Corte Degradê',
    price: 'R$ 20',
    image: '/api/placeholder/300/200',
    category: 'normal'
  },
  {
    name: 'Corte Infantil(até 10 anos)',
    price: 'R$ 18',
    image: '/api/placeholder/300/200',
    category: 'normal'
  },
  {
    name: 'Corte Simples',
    price: 'R$ 18',
    image: '/api/placeholder/300/200',
    category: 'normal'
  },
  {
    name: 'Hidratação',
    price: 'R$ 10',
    image: '/api/placeholder/300/200',
    category: 'normal'
  },
  {
    name: 'Corte + Sobrancelha',
    price: 'R$ 25',
    image: '/api/placeholder/300/200',
    category: 'normal'
  },
  {
    name: 'Barba',
    price: 'R$ 15',
    image: '/api/placeholder/300/200',
    category: 'normal'
  },
  {
    name: 'Corte + Barba',
    price: 'R$ 70',
    image: '/api/placeholder/300/200',
    category: 'premium'
  },
  {
    name: 'Corte Degradê + Barba',
    price: 'R$ 40',
    image: '/api/placeholder/300/200',
    category: 'premium'
  },
  {
    nama: 'Corte Simples + Barba',
    price: 'R$ 38',
    image: '/api/placeholder/300/200',
    category: 'premium'
  },
  {
    name: 'Corte + Sobrancelha',
    price: 'R$ 25',
    image: '/api/placeholder/300/200',
    category: 'vip'
  },
  {
    name: 'Barboterapia + Sobrancelha',
    price: 'R$ 25',
    image: '/api/placeholder/300/200',
    category: 'vip'
  },
  {
    name: 'Barboterapia + Pezinho',
    price: 'R$ 25',
    image: '/api/placeholder/300/200',
    category: 'vip'
  }
];

const Home = () => {
  const renderServices = (category: string) => {
    return services
      .filter(service => service.category === category)
      .map((service, index) => (
        <Card key={index} className="serviceCard">
          <img
            src={service.image}
            alt={service.name}
            className="serviceImage"
          />
          <CardContent className="serviceInfo">
            <div>
              <h3>{service.name}</h3>
              <span>{service.price}</span>
            </div>
          </CardContent>
        </Card>
      ));
  };

  return (
    <div className="container">
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div>
          <img
            src="src/assets/foto1.png"
            alt="Barbearia"
          />
        </div>
        <div className="heroContent">
          <div>
            <h1>Estilo e Precisão em Cada Corte</h1>
            <p>Transforme seu visual com um profissional de qualidade.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="sectionContent">
          <h2>Nossos Serviços</h2>

          <div className="serviceSubsection">
            <h3>Combos Premiums</h3>
            <div className="servicesGrid">
              {renderServices('premium')}
            </div>
          </div>

          <div className="serviceSubsection">
            <h3>Combos Vipes</h3>
            <div className="servicesGrid">
              {renderServices('vip')}
            </div>
          </div>

          <div className="serviceSubsection">
            <h3>Tabela de Preços Normal</h3>
            <div className="servicesGrid">
              {renderServices('normal')}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location">
        <div className="sectionContent">
          <h2>Nossa Localização</h2>
          <div className="locationGrid">
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d490.7120999584208!2d-36.56496210959699!3d-10.28599567818776!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1739820613837!5m2!1spt-BR!2sbr"
                width="800"
                height="600"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="locationInfo">
              <div className="infoItem">
                <MapPin className="icon" />
                <div>
                  <h3>Endereço</h3>
                  <p>Rua da Barbearia, 123 - Centro</p>
                  <p>São Paulo - SP</p>
                </div>
              </div>
              <div className="infoItem">
                <Clock className="icon" />
                <div>
                  <h3>Horário de Funcionamento</h3>
                  <p>Segunda a Sábado: 8h às 18h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
              <button className="button">
                <Scissors className="buttonIcon" />
                <span>Agende seu Horário</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;