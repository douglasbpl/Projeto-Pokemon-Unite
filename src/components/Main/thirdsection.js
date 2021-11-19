import React from "react";
import * as S from "./styled";
import { graphql, useStaticQuery } from 'gatsby'



export default function ThirdSection() {

  const data = useStaticQuery(graphql`
    query {
      alldata{
        mainSection3S {
          ttlsectiontree
          vdone {
            url
            id
          }
          vdtwo {
            url
            id
          }
          prgvdone
          prgvdtwo
        }
      }       
    }
    `)

    const { ttlsectiontree, vdone, vdtwo, prgvdone, prgvdtwo } = data.alldata.mainSection3S[0]

  return (


    <S.ContainerThirdSection  id="gameplay">

      <S.ContainerBoxVideo>
        <h2>{ttlsectiontree}</h2>
        <S.BoxVideo>

          <S.ConstVideo>
            <video src={vdone.url} alt="video de poémon unite" controls autoPlay loop muted>
            </video>
            <p>{prgvdone}</p>
          </S.ConstVideo>

          <S.ConstVideo>
            <video src={vdtwo.url} alt="video de poémon unite"  controls autoPlay loop muted >
            </video>
            <p>{prgvdtwo}</p>
          </S.ConstVideo>

        </S.BoxVideo>
      </S.ContainerBoxVideo>
    </S.ContainerThirdSection >
)
}    
    
