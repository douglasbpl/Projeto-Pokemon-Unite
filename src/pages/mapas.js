import React from 'react'
import * as S from './style'
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from "gatsby"


export default function Mapas() {
  const data = useStaticQuery(graphql`
    query {
      alldata {
        mapas {
            ttlarenas
            arenas
            home
            pokemon
            auromapark
            auromaparkimg {
              url
            }
            matchap
            numberap
            txtap
            merstadium
            merstadiumimg {
              url
            }
            matchms
            numberms
            txtms
            remoatstadium
            remoatstadiumimg {
              url
            }
            matchrs
            numberrs
            txtrms
            shivrecity
            shivrecityimg{
              url
            }
            matchsc
            numbersc
            txtsc
          }
      }
    }
    `)

  const mp = data.alldata.mapas[0]
  const mapas = [
    {
      name: mp.auromapark,
      img: mp.auromaparkimg.url,
      match: mp.matchap,
      number: mp.numberap,
      txt: mp.txtap
    },
    {
      name: mp.merstadium,
      img: mp.merstadiumimg.url,
      match: mp.matchms,
      number: mp.numberms,
      txt: mp.txtms
    },
    {
      name: mp.remoatstadium,
      img: mp.remoatstadiumimg.url,
      match: mp.matchrs,
      number: mp.numberrs,
      txt: mp.txtrms
    },
    {
      name: mp.shivrecity,
      img: mp.shivrecityimg.url,
      match: mp.matchsc,
      number: mp.numbersc,
      txt: mp.txtsc
    }
  ]
  return (
    <S.ContainerMapas>
      <S.GlobalStyle />
      <S.ContainerMenuFixed>
        <S.MenuFixed>
        <ul>
            <Link to="/" ><li>{mp.home}</li></Link>
            <Link to="/pkminfo"><li>{mp.pokemon}</li></Link>
            <Link to="/mapas"><li>{mp.arenas}</li></Link>
          </ul>
        </S.MenuFixed>
      </S.ContainerMenuFixed>
      <S.MapTtlb>{mp.ttlarenas} </S.MapTtlb>

      <S.SectbMaps >

        {mapas.map((item, index) => (
          <S.CardsMaps key={index}>
            <img src={item.img} alt="Imagem do Mapa" />
            <p>{item.match}</p>
            <p>{item.number}</p>
            <p>{item.txt}</p>
          </S.CardsMaps>
        ))}
      </S.SectbMaps>
    </S.ContainerMapas>
  )
}

