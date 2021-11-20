import React from 'react'
import * as S from './styled'
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from "gatsby"


export function Pkmi() {

  const data = useStaticQuery(graphql`
query {
  alldata {
    listpokemons {
    ttlpkms
    arenas
    home
    pokemons
    learnmore
    absol
    absolimg {
      url
    }
    blastoise
    blastoiseimg {
      url
    }
    blissey
    blisseyimg {
      url
    }
    charizard
    charizardimg {
      url
    }
    cinderace
    cinderaceimg {
      url
    }
    cramorant
    cramorantimg {
      url
    }
    crustle
    crustleimg {
      url
    }
    eldegoss
    eldegossimg {
      url
    }
    garchomp
    garchompimg {
      url
    }
    gardevoir
    gardevoirimg {
      url
    }
    gengar
    gengarimg {
      url
    }
    grendent
    grendentimg {
      url
    }
    greninja
    greninjaimg {
      url
    }
    lucario
    lucarioimg {
      url
    }
    machamp
    machampimg {
      url
    }
    mamoswine
    mamoswineimg {
      url
    }
    mrmime
    mrmimeimg {
      url
    }
    ninetales
    ninetalesimg {
      url
    }
    pikachu
    pikachuimg {
      url
    }
    slowbro
    slowbroimg {
      url
    }
    snorlax
    snorlaximg {
      url
    }
    sylveon
    sylveonimg {
      url
    }
    talonflame
    talonflameimg {
      url
    }
    venusaur
    venusaurimg {
      url
    }
    zeraora
    zeraoraimg {
      url
    }
    wigglytuff
    wigglytuffimg {
      url
    }
  }
}
}
`)

  const pk = data.alldata.listpokemons[0];

  const pkm = [
    { name: pk.absol, img: pk.absolimg.url, },
    { name: pk.blastoise, img: pk.blastoiseimg.url, },
    { name: pk.blissey, img: pk.blisseyimg.url, },
    { name: pk.charizard, img: pk.charizardimg.url, },
    { name: pk.cinderace, img: pk.cinderaceimg.url, },
    { name: pk.cramorant, img: pk.cramorantimg.url, },
    { name: pk.crustle, img: pk.crustleimg.url, },
    { name: pk.eldegoss, img: pk.eldegossimg.url, },
    { name: pk.garchomp, img: pk.garchompimg.url, },
    { name: pk.gardevoir, img: pk.gardevoirimg.url, },
    { name: pk.gengar, img: pk.gengarimg.url, },
    { name: pk.grendent, img: pk.grendentimg.url, },
    { name: pk.greninja, img: pk.greninjaimg.url, },
    { name: pk.lucario, img: pk.lucarioimg.url, },
    { name: pk.machamp, img: pk.machampimg.url, },
    { name: pk.mamoswine, img: pk.mamoswineimg.url, },
    { name: pk.mrmime, img: pk.mrmimeimg.url, },
    { name: pk.ninetales, img: pk.ninetalesimg.url, },
    { name: pk.pikachu, img: pk.pikachuimg.url, },
    { name: pk.slowbro, img: pk.slowbroimg.url, },
    { name: pk.snorlax, img: pk.snorlaximg.url, },
    { name: pk.sylveon, img: pk.sylveonimg.url, },
    { name: pk.talonflame, img: pk.talonflameimg.url, },
    { name: pk.venusaur, img: pk.venusaurimg.url, },
    { name: pk.zeraora, img: pk.zeraoraimg.url, },
    { name: pk.wigglytuff, img: pk.wigglytuffimg.url, },

  ]

  return (
    <S.ContainerPkms>
      <S.GlobalStyle />
      <S.ContainerMenuFixed>
        <S.MenuFixedPM>
          <ul>
            <Link to="/" ><li>{pk.home}</li></Link>
            <Link to="/pkm"><li>{pk.pokemons}</li></Link>
            <Link to="/mapas"><li>{pk.arenas}</li></Link>
          </ul>
        </S.MenuFixedPM>
      </S.ContainerMenuFixed>
      <S.Ttlb>{pk.ttlpkms}</S.Ttlb>
      <S.Sectb>
        <S.ContainerBoxCardsPkm id="Pokémons">
          <S.ContainerCardsPkm>

            {pkm.map((item, index) => (
              <S.Cards key={index}>
                <img src={item.img} alt="Imagem do Pokemon" />
                <p>{item.name}</p>
                <Link to="#"><button>{pk.learnmore}</button></Link>
              </S.Cards>
            ))}

          </S.ContainerCardsPkm>
        </S.ContainerBoxCardsPkm>
      </S.Sectb>
    </S.ContainerPkms>


  )
}