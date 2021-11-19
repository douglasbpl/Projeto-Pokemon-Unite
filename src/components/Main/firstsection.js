import React from "react";
import * as S from "./styled";
import { graphql, useStaticQuery } from 'gatsby';


export default function FirstSection() {

  const data = useStaticQuery(graphql`
query {
  alldata {
     mainSection1S {
        pokemons
        knowmore
        first {
          url
        }
        firsttxt
        second {
          url
        }
        secondtxt
        third {
          url
        }
        thirdtxt
        fourth {
          url
        }
        fourthtxt    
      }
    }
  }
`)

  const { pokemons,knowmore, first, firsttxt, second, secondtxt, third, thirdtxt, fourth, fourthtxt } = data.alldata.mainSection1S[0];


  return (


    <S.ContainerFIrstSection id="Pokémons">
      <h2> {pokemons} </h2>
      <S.ContainerCardsPkm>

        <S.Cards >         
          <img src={first.url} alt="Imagem do Pokemon" />         
          <p>{firsttxt}</p>
          <a href="http://localhost:8000/pkminfo"><button>{knowmore}</button></a>
        </S.Cards>

        <S.Cards >
          <img src={second.url} alt="Imagem do Pokemon" />
          <p>{secondtxt}</p>
          <a href="http://localhost:8000/pkminfo"><button>{knowmore}</button></a>
        </S.Cards>

        <S.Cards >
          <img src={third.url} alt="Imagem do Pokemon" />
          <p>{thirdtxt}</p>
          <a href="http://localhost:8000/pkminfo"><button>{knowmore}</button></a>
        </S.Cards>

        <S.Cards >
          <img src={fourth.url} alt="Imagem do Pokemon" />
          <p>{fourthtxt}</p>
          <a href="http://localhost:8000/pkminfo"><button>{knowmore}</button></a>
        </S.Cards>
      </S.ContainerCardsPkm>
    </S.ContainerFIrstSection>
  )


}