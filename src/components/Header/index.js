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
            <li><Link to="/#home">{home}</Link></li>
            <li><Link to="/#Pokémons">{pokemons}</Link></li>
            <li><Link to="/#maps">{mapas}</Link></li>
            <li><Link to="/#gameplay">{gameplay}</Link></li>
            <Link to="/#Contatos"><li>{contato}</li></Link>
            <li><Link to="/pkm">{infopkm}</Link></li>
            <li><Link to="/mapas">{infoarena}</Link></li>
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


