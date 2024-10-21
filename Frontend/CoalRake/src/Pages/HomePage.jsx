'use client';
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'; // Ensure you import NavBar
import WhatDo from '../components/WhatDo';
import Slideshow from '../components/slideshow'; // Updated the casing of Slideshow component
import Footer from '../components/Footer';
import SelectionMenu from '../components/SelectionMenu';
import image1 from '../assets/coal_image1.jpg'
import image2 from '../assets/coal_image2.jpg'
import image3 from '../assets/coal_image3.jpg'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Ambit';
    src: url('/fonts/Ambit/Ambit-Regular.ttf') format('truetype');
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Ambit', sans-serif;
  }
`;

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  text-align: center;
`;



const images = [image1,image2,image3];

const HomePage = () => {
  return (
    <>
      <GlobalStyle />
      <HomePageContainer>
        <Slideshow images={images}  /> 
        <WhatDo />
        <SelectionMenu />
      </HomePageContainer>
      <Footer />
    </>
  );
};

export default HomePage;
