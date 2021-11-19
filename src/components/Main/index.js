import React from "react";
import * as S from "./styled";
import FirstSection from "./firstsection";
import SecondSection from "./secondsection";
import ThirdSection from "./thirdsection";


// import { graphql, useStaticQuery } from 'gatsby'

export function Main() {
  
  return (

 
    <S.ContainerMain>      
      <FirstSection />
      <SecondSection />
      <ThirdSection />        
    </S.ContainerMain>
  );
}

