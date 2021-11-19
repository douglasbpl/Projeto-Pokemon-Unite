import React from "react";
import * as S from "./styled";
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from "gatsby"


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

  const { pokemons, knowmore, first, firsttxt, second, secondtxt, third, thirdtxt, fourth, fourthtxt } = data.alldata.mainSection1S[0];


  return (


    <S.ContainerFIrstSection id="Pokémons">
      <h2> {pokemons} </h2>
      <S.ContainerCardsPkm>

        <S.Cards >
          <img src={first.url} alt="Imagem do Pokemon" />
          <p>{firsttxt}</p>
          <Link to="/pkm"><button>{knowmore}</button></Link>
        </S.Cards>

        <S.Cards >
          <img src={second.url} alt="Imagem do Pokemon" />
          <p>{secondtxt}</p>
          <Link to="/pkm"><button>{knowmore}</button></Link>
        </S.Cards>

        <S.Cards >
          <img src={third.url} alt="Imagem do Pokemon" />
          <p>{thirdtxt}</p>
          <Link to="/pkm"><button>{knowmore}</button></Link>
        </S.Cards>

        <S.Cards >
          <img src={fourth.url} alt="Imagem do Pokemon" />
          <p>{fourthtxt}</p>
          <Link to="/pkm"><button>{knowmore}</button></Link>
        </S.Cards>
      </S.ContainerCardsPkm>
    </S.ContainerFIrstSection>
  )


}