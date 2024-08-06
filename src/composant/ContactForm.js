"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
  import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    whatsapp: ''
  });
  const [thankYouMessage, setThankYouMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Form submitted successfully');
       
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
    setThankYouMessage('Merci d\'avoir rempli le formulaire !');

    setFormData({
      name: '',
      email: '',
      whatsapp: '',
      message: ''
    });
  };
  
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center p-10 space-y-8 lg:space-y-0 lg:space-x-8" id='ContactForm'>
    <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-gray-600 mb-6">
        Nous serions ravis de vous entendre. Veuillez remplir le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
      </p>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="fullName">Votre nom complet</label>
          <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
           placeholder='nom,prenom'
          required
         
        />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">Votre adresse e-mail</label>
          <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
             placeholder='parexemple@gmail.com'
          required
       
        />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="whatsapp">Votre numéro WhatsApp</label>
          <input
          type="tel"
          id="whatsapp"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          placeholder="+221 78 333 38 55" 
          required
         
        />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="message">Votre message</label>
          <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          rows="4"
          required
        ></textarea>
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          envoyer
        </button>
      </form>
      {thankYouMessage && (
        <div className="mt-4 text-green-500">
          {thankYouMessage}
        </div>
      )}
    </div>

    <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-semibold mb-6">Informations de contact</h2>
      <div className="flex items-center mb-4">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600 text-2xl mr-3" />
        <div>
          <p className="text-gray-800 font-medium">Adresse :</p>
          <p className="text-gray-600">Dakar, Sénégal</p>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <FontAwesomeIcon icon={faPhone} className="text-blue-600 text-2xl mr-3" />
        <div>
          <p className="text-gray-800 font-medium">Téléphone :</p>
          <p className="text-gray-600">+221 78 566 17 61</p>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 text-2xl mr-3" />
        <div>
          <p className="text-gray-800 font-medium">Email :</p>
          <p className="text-gray-600">Vieuxmaitakagny@gmail.com</p>
        </div>
      </div>
      <div className="w-full h-64">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15437.38763186454!2d-17.462769079431805!3d14.692963640273584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2ssn!4v1722947253746!5m2!1sfr!2ssn"
         
           referrerpolicy="no-referrer-when-downgrade"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
  );
};


