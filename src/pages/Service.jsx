import React from 'react';
import Hero from '../components/Hero';
import Stack from '../components/Stack';

function Service() {
  return (
    <div>
      <Hero 
        title="Our Services"
        subtitle="We provide innovative solutions for your brand."
        image="/images/service-hero.jpg"
      />
      
      <section className="service-stack">
        <Stack />
      </section>
    </div>
  );
}

export default Service;
