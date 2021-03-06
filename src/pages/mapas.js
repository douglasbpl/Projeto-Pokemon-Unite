import React from 'react';
import { Mpsi } from '../dados/mapsinfo';
import { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;   
  }
  html {
    scroll-behavior: smooth;
  }
  `

export default function Mapas() {

  return (
    <div>
      <GlobalStyle />
       <Helmet>
        <title>Projeto Pokémon Unite</title>
      </Helmet>
      <Mpsi/>      
    </div>
  )
}


