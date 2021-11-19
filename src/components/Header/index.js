import React from "react";
import * as S from "./styled";
import { graphql, useStaticQuery } from 'gatsby'




export function Header() {

  const data = useStaticQuery(graphql`
  query {
    alldata {
      headers {
        logoheader {
          url
          id
        }
        pokemons
        contato
        home
        mapas
        infopkm
        infoarena
        gameplay
        titlepkmunite
        subtitlepkmunite
        prgpkmunite
        btnswitch {
          url
          id
        }
        btapplestore {
          url
          id
        }
        btplaystore {
          url
          id
        }
        backgroundimgheader {
          url
          id
        }
      }
    }
  }
  `)

  const { logoheader, pokemons, contato, home, mapas, infopkm, infoarena, gameplay, titlepkmunite, subtitlepkmunite, prgpkmunite, btnswitch, btapplestore, btplaystore, backgroundimgheader } = data.alldata.headers[0];

  return (

    <S.ContainerHeader id="home">
      <S.ContainerMenuFixed>
        <S.MenuFixed>
          <img src={logoheader.url} alt="Logo Pokemon Unite" />
          <ul>
            <a href="#home"><li>{home}</li></a>
            <a href="#Pokémons"><li>{pokemons}</li></a>
            <a href="#maps"><li>{mapas}</li></a>
            <a href="#gameplay"><li>{gameplay}</li></a>
            <a href="#Contatos"><li>{contato}</li></a>
            <a href="http://localhost:8000/pkminfo"><li>{infopkm}</li></a>
            <a href="http://localhost:8000/mapas"><li>{infoarena}</li></a>
          </ul>
        </S.MenuFixed>
      </S.ContainerMenuFixed>
      <S.PlayPokemonUnite background={backgroundimgheader.url}>
        <S.DivEffect>
          <h1>{titlepkmunite}</h1>
          <h2>{subtitlepkmunite}</h2>
          <p>{prgpkmunite}</p>
          <div>
            <a href="https://www.nintendo.com/pt_BR/games/detail/pokemon-unite-switch/" target="_blank" rel="noopener noreferrer" ><figure><img src={btnswitch.url} /></figure></a>
            <a href="https://play.google.com/store/apps/details?id=jp.pokemon.pokemonunite&hl=pt_BR&gl=US" target="_blank" rel="noopener noreferrer" ><figure><img src={btplaystore.url} /></figure></a>
            <a href="https://apps.apple.com/app/id1512321575" target="_blank" rel="noopener noreferrer" ><figure><img src={btapplestore.url} /></figure></a>
          </div>
        </S.DivEffect >
      </S.PlayPokemonUnite>
    </S.ContainerHeader>
  )
}