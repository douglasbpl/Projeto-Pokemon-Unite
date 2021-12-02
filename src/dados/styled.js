import styled from 'styled-components';
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;   
  }
  html {
    scroll-behavior: smooth;
  }
  `

export const ContainerPkms = styled.div`
display:flex;
flex-direction: column;
justify-content: flex;
align-items: center;
background-color: #271d45;
font: 900 13px/1 "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
`

export const ContainerMenuFixed = styled.div`
width:100%;
background-color:#0b122e;
display:flex;
align-items:center;
justify-content:center;
position:fixed;
z-index: 1;
`

export const MenuFixedPM = styled.nav`
display:flex;
align-items:center;
justify-content:space-evenly;
font: 900 13px/1 "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
width:100%;
height:10vh;

ul{
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    width:80%;
    height:100%;    
    flex-wrap: wrap;
    list-style:none;
    font-size:1.5rem;       
}
li{
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:3%;
    min-width:10vw;
    height:5vh;       
}
li:hover{
    background-color:#242c47;
    color:gold;    
}

`

export const Ttlb = styled.h1`
height: 100px;
font-size: 50px;
color:aliceblue;
padding-top:10vh;
`

export const Sectb = styled.section`
display: flex;
align-items: center;
justify-content: space-evenly;
flex-wrap: wrap;
width: 70%;
min-height: 100vh;
background-color: gray;
`

export const ContainerBoxCardsPkm = styled.section`
 background-color: #271d45;;
 display: flex;
 flex-direction: column;
 align-items: center;
 width: 100%;
 padding-top: 50px;
 padding-bottom: 50px;
 h2{
     color: white;
     font-size: 2.5rem;
}
 `
export const ContainerCardsPkm = styled.div`
display:flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
width: 100%;
`

export const Cards = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 15px;
background-color: aliceblue;
width: 200px;
max-height: 300px;
border-radius: 10px;

p{
    font-size: 1.2rem;
    text-transform: uppercase;
}
button{
    background-color: blue;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    cursor: pointer;
}
img{
    width: 100%;
    height: 68%;    
  }
  `

export const ContainerMapas = styled.div`
display:flex;
flex-direction: column;
justify-content: flex;
align-items: center;
background-color: #271d45;
font: 900 13px/1 "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
`

export const MapTtlb = styled.h1`
height: 100px;
font-size: 50px;
color:aliceblue;
padding-top:10vh;
`

export const SectbMaps = styled.section`
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
width: 90%;
min-height: 100vh;
background-color: #271d45;
font: 300 13px/1 "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
`

export const CardsMaps = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 15px;
background-color: #2d3246;
color: aliceblue;
width: 500px;
height: 500px;
text-align: center;
border-radius: 10px;
p{
  font-size: max(5px,15px); 
}
img{
    width: 100%;
    height:50%;
}
  
`