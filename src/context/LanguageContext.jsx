import React, { createContext, useState, useContext } from 'react';

export const translations = {
  es: {
    navServices: "Servicios",
    navAircraft: "El Avión",
    navBook: "Reservar Vuelo",
    floatingWhatsappMsg: "Hola, quiero reservar un vuelo...",
    heroTitlePrefix: "Vuelos privados en",
    heroDescription: "Alquile su avión privado para viajes de negocios o turismo en todo el norte argentino con la mejor comodidad.",
    heroOrigin: "ORIGEN",
    heroOriginPlaceholder: "¿De dónde sales?",
    heroDestination: "DESTINO",
    heroDestinationPlaceholder: "¿A dónde viajas?",
    heroQuoteBtn: "Cotizar ahora",
    featTitle: "¿Por qué volar con",
    featDesc: "Ofrecemos un servicio de vuelos charter diseñado para quienes valoran su tiempo, la privacidad y el confort.",
    feat1Title: "Capacidad para 5/6 Personas",
    feat1Desc: "Viaja con tu equipo, familia o amigos con total comodidad en nuestra moderna aeronave.",
    feat2Title: "Destinos a Medida",
    feat2Desc: "Vuelos por toda la Provincia de Salta y provincias vecinas. Tú eliges el destino, nosotros te llevamos.",
    feat3Title: "Sin Demoras",
    feat3Desc: "Evita las largas filas y tiempos de espera de los vuelos comerciales. Optimiza tu tiempo al máximo.",
    feat4Title: "Seguridad y Privacidad",
    feat4Desc: "Viaja con total discreción y los más altos estándares de seguridad aeronáutica.",
    galTitlePrefix: "Nuestra",
    galTitleHighlight: "Aeronave",
    galDesc1: "Contamos con una aeronave de primer nivel con capacidad para 5 a 6 pasajeros, equipada con tecnología de última generación para garantizar un viaje placentero y seguro.",
    galDesc2: "El interior está diseñado pensando en tu comodidad, permitiéndote relajarte o continuar con tus negocios mientras volamos hacia tu próximo destino en el norte argentino.",
    galList1: "Vuelos ejecutivos",
    galList2: "Traslados turísticos privados",
    galList3: "Viajes de urgencia",
    footDesc: "Vuelos privados por toda la Provincia de Salta y Provincias vecinas. Piloto Comercial Daniel Luna.",
    footNav: "Navegación",
    footHome: "Inicio",
    footContact: "Contacto",
    footRights: "Todos los derechos reservados."
  },
  en: {
    navServices: "Services",
    navAircraft: "Aircraft",
    navBook: "Book Flight",
    floatingWhatsappMsg: "Hi, I want to book a flight...",
    heroTitlePrefix: "Private flights in",
    heroDescription: "Charter your private jet for business or leisure travel throughout Northern Argentina with ultimate comfort.",
    heroOrigin: "ORIGIN",
    heroOriginPlaceholder: "Where from?",
    heroDestination: "DESTINATION",
    heroDestinationPlaceholder: "Where to?",
    heroQuoteBtn: "Get Quote",
    featTitle: "Why fly with",
    featDesc: "We offer a charter flight service designed for those who value their time, privacy, and comfort.",
    feat1Title: "Capacity for 5/6 Passengers",
    feat1Desc: "Travel with your team, family, or friends in total comfort in our modern aircraft.",
    feat2Title: "Custom Destinations",
    feat2Desc: "Flights throughout Salta Province and neighboring provinces. You choose the destination, we take you there.",
    feat3Title: "No Delays",
    feat3Desc: "Avoid long lines and wait times of commercial flights. Optimize your time to the fullest.",
    feat4Title: "Security and Privacy",
    feat4Desc: "Travel with complete discretion and the highest standards of aeronautical safety.",
    galTitlePrefix: "Our",
    galTitleHighlight: "Aircraft",
    galDesc1: "We feature a top-tier aircraft with a capacity of 5 to 6 passengers, equipped with state-of-the-art technology to guarantee a pleasant and safe journey.",
    galDesc2: "The interior is designed with your comfort in mind, allowing you to relax or continue your business while we fly to your next destination in Northern Argentina.",
    galList1: "Executive flights",
    galList2: "Private tourist transfers",
    galList3: "Urgent travel",
    footDesc: "Private flights throughout Salta Province and neighboring provinces. Commercial Pilot Daniel Luna.",
    footNav: "Navigation",
    footHome: "Home",
    footContact: "Contact",
    footRights: "All rights reserved."
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // 'es' o 'en'

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
