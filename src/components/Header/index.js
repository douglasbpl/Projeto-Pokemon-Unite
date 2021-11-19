import React from "react";
import * as S from "./styled";
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from "gatsby"


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
            <Link to="#home"><li>{home}</li></Link>
            <Link to="#Pokémons"><li>{pokemons}</li></Link>
            <Link to="#maps"><li>{mapas}</li></Link>
            <Link to="#gameplay"><li>{gameplay}</li></Link>
            <Link to="#Contatos"><li>{contato}</li></Link>
            <Link to="/pkm"><li>{infopkm}</li></Link>
            <Link to="/mapas"><li>{infoarena}</li></Link>
          </ul>
        </S.MenuFixed>
      </S.ContainerMenuFixed>
      <S.PlayPokemonUnite background={backgroundimgheader.url} alt ="Background Pokémon Unite">
        <S.DivEffect>
          <h1>{titlepkmunite}</h1>
          <h2>{subtitlepkmunite}</h2>
          <p>{prgpkmunite}</p>
          <div>
            <a href="https://www.nintendo.com/pt_BR/games/detail/pokemon-unite-switch/" target="_blank" rel="noreferrer" ><figure><img src={btnswitch.url} alt="Button Nintendo Switch"/></figure></a>
            <a href="https://play.google.com/store/apps/details?id=jp.pokemon.pokemonunite&hl=pt_BR&gl=US" target="_blank" rel="noreferrer" ><figure><img src={btplaystore.url} alt="Button PLayStorw" /></figure></a>
            <a href="https://apps.apple.com/app/id1512321575" target="_blank" rel="noreferrer" ><figure><img src={btapplestore.url} alt="Button Applestore"/></figure></a>
          </div>
        </S.DivEffect >
      </S.PlayPokemonUnite>
    </S.ContainerHeader>
  )
}


