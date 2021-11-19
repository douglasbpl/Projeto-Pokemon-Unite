import React from "react";
import * as S from "./styled";
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from "gatsby"



export default function SecondSection() {

  const data = useStaticQuery(graphql`

query {
  alldata {
    mainSection2S {
      titlemaps
      subtitlemaps
      mapone
      maptwo
      maptree
      mapfour
      backgroundmap {
        url
      }
      liststyled {
        url
      }
    }
  }
}
`)

  const { titlemaps, subtitlemaps, mapone, maptwo, maptree, mapfour, backgroundmap, liststyled } = data.alldata.mainSection2S[0];

  return (


    <S.ContainerSecondSection id="maps" backgroundss={backgroundmap.url}>
      <S.BoxTTMaps>
        <div>
          <h2>{titlemaps}</h2>
          <h3>{subtitlemaps}</h3>
          <ul>
            <li><S.MarkStyle >
              <img src={liststyled.url} alt="bolinha do marcador" /></S.MarkStyle><Link to="/mapas">{mapone}</Link></li>
            <li><S.MarkStyle >
              <img src={liststyled.url} alt="bolinha do marcador" /></S.MarkStyle><Link to="/mapas">{maptwo}</Link></li>
            <li><S.MarkStyle >
              <img src={liststyled.url} alt="bolinha do marcador" /></S.MarkStyle><Link to="/mapas">{maptree}</Link></li>
            <li><S.MarkStyle>
              <img src={liststyled.url} alt="bolinha do marcador" /></S.MarkStyle><Link to="/mapas">{mapfour}</Link></li>
          </ul>
        </div>
      </S.BoxTTMaps>

      {/* <S.BoxContainerMaps>
        <img src={backgroundmap.url} />
      </S.BoxContainerMaps> */}
    </S.ContainerSecondSection>
  )


}