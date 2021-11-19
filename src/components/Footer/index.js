import React from "react";
import * as S from "./styled";
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from "gatsby"

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
              <Link to="#home"><li>{home}</li></Link>
              <Link to="#Pokémons"><li>{pokemon}</li></Link>
              <Link to="#maps"><li>{maps}</li></Link>
            </ul>
          </div>
          <div >
            <h3>{menu}</h3>
            <ul>
              <li><Link to="#gameplay">{gameplay}</Link></li>
              <li><Link to="/pkminfo">{infopkm}</Link></li>
              <li><Link to="/mapas">{arenas}</Link></li>
            </ul>
          </div>

        </S.BoxMenuFSection>
      </S.Container>
      <S.BoxsocialNetwork>
        <ul>
          <li><a href="https://www.facebook.com/" target="_blank">{facebook}</a></li>
          <li><a href="https://www.instagram.com/" target="_blank" >{instagram}</a></li>
          <li><a href="https://github.com/" target="_blank" >{github}</a></li>
          <li><a href="https://www.linkedin.com/" target="_blank" >{linkedin}</a></li>
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