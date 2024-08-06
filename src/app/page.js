import React from "react";
import Navbar from "@/composant/Navbar";
import Accueil from "@/composant/Accueil";
import Quisuisje from "@/composant/Quisuisje";
import Service from  "@/composant/Service";
import Competence from "@/composant/Competence";
import ImageBox from "@/composant/ImageBox";
import ContactForm from "@/composant/ContactForm";
import Footer from "@/composant/Footer";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;




 function Home() {
  return (
   <div>

    <Navbar/>
    <Accueil id/>
    <Quisuisje/>
    <Service/>
    <Competence/>
     <ImageBox/>
     <ContactForm/>
     <Footer/>
   

  
   </div>
  );
}


export default Home;