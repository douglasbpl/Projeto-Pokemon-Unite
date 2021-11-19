import React from 'react';
import { Pkmi } from '../dados/pkminfo';
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

export default function Pkm() {

  return (
    <div>
      <GlobalStyle />
       <Helmet>
        <title>Projeto Pokémon Unite</title>
      </Helmet>
      <Pkmi/>      
    </div>
  )
}
