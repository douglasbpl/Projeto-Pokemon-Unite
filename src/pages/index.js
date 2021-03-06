import React from 'react';
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
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

export default function Index() {

  return (
    <div>
      <GlobalStyle />
       <Helmet>
        <title>Projeto Pokémon Unite</title>
      </Helmet>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
