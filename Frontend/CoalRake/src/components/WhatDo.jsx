'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhatDo = () => {
  useEffect(() => {
    AOS.init({
      delay: 100,
      offset: 100,
      duration: 700,
      once: false,
      mirror: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section
      data-aos="fade-in"
      className="p-4 md:p-10 m-4 sm:m-16 sm:flex sm:items-center sm:justify-between"
      style={{ fontFamily: 'Ambit, sans-serif' }}
    >
      <div className="sm:w-full mr-4 md:w-1/2">
        <h2 className="text-3xl md:text-5xl font-semibold mb-2 md:mb-4">
          What Do We Do
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl text-justify">
           Our digital platform provides real-time updates on coal
          availability at railway sidings, ensuring that trains are dispatched
          to the nearest location with sufficient coal. By optimizing coal
          transportation routes and minimizing waiting times, we help companies
          save on demurrage charges and streamline their operations. Our
          advanced algorithms and technology-driven solutions empower the coal
          industry to make informed decisions, reduce costs, and enhance
          efficiency. With a focus on sustainability and innovation, we aim to
          drive positive change in the transportation of this critical resource.
        </p>
      </div>
      <div className="sm:w-1/2 flex justify-center items-center ml-4 sm:mt-0">
        <img
          src="/siding.png"
          alt="map"
          width={1000}
          height={600}
          className="rounded-3xl overflow-hidden"
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>
    </section>
  );
};

export default WhatDo;
