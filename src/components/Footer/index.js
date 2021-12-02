import React from "react";
import * as S from "./styled";
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";

export function Footer() {

  const data = useStaticQuery(graphql`
query {
  alldata {
    footers {
      menu
      home
      pokemon
      maps
      gameplay
      infopkm
      arenas
      facebook
      instagram
      github
      linkedin
      paragraph1
      paragraph2
    }
    }
  }
`)

  const { menu, home, pokemon, maps, gameplay, infopkm, arenas, facebook, instagram, github, linkedin, paragraph1, paragraph2 } = data.alldata.footers[0];


  return (

    <S.ContainerFooter id="Contatos">
      <S.Container>
        <S.BoxMenuFSection>
          <div>
            <h3>{menu}</h3>
            <ul>
              <li><AnchorLink to="/#home">{home}</AnchorLink></li>
              <li><AnchorLink to="/#Pokémons">{pokemon}</AnchorLink></li>
              <li><AnchorLink to="/#maps">{maps}</AnchorLink></li>
            </ul>
          </div>
          <div >
            <h3>{menu}</h3>
            <ul>
              <li><AnchorLink to="/#gameplay">{gameplay}</AnchorLink></li>
              <li><Link to="/pkm">{infopkm}</Link></li>
              <li><Link to="/mapas">{arenas}</Link></li>
            </ul>
          </div>

        </S.BoxMenuFSection>
      </S.Container>
      <S.BoxsocialNetwork>
        <ul>
          <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer">{facebook}</a></li>
          <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">{instagram}</a></li>
          <li><a href="https://www.github.com/" target="_blank" rel="noreferrer">{github}</a></li>
          <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">{linkedin}</a></li>
        </ul>
      </S.BoxsocialNetwork>
      <S.CopyRight>
        <div>
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
        </div>

      </S.CopyRight>


    </S.ContainerFooter>
  )
}