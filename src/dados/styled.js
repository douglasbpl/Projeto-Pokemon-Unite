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
{  
    animation-name: lightSpeedIn;  
    animation-timing-function: ease-out;
    animation-duration: 1s;
    animation-fill-mode: both;      
    @keyframes lightSpeedIn {
    0% {
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
    }
    60% {
    transform: skewX(20deg);
    opacity: 1;
    }
    80% {
    transform: skewX(-5deg);
    opacity: 1;
    }
    100% {
    transform: none;
    opacity: 1;
    }
}     
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
a{
    text-decoration:none;
    color:white;
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
{
  animation-name: zoomInDown;
  animation-duration: 1s;
  animation-fill-mode: both;
  }
  @keyframes zoomInDown {
  0% {
  opacity: 0;
  transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
  animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }
  60% {
  opacity: 1;
  transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}  
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
&:hover{  
  animation-name: rubberBand;
  animation-duration: 1s;
  animation-fill-mode: both;
  }
  @keyframes rubberBand {
  0% {
  transform: scale3d(1, 1, 1);
  }
  30% {
  transform: scale3d(1.25, 0.75, 1);
  }
  40% {
  transform: scale3d(0.75, 1.25, 1);
  }
  50% {
  transform: scale3d(1.15, 0.85, 1);
  }
  65% {
  transform: scale3d(.95, 1.05, 1);
  }
  75% {
  transform: scale3d(1.05, .95, 1);
  }
  100% {
  transform: scale3d(1, 1, 1);
  }
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
{
  animation-name: zoomInDown;
  animation-duration: 1s;
  animation-fill-mode: both;
  }
  @keyframes zoomInDown {
  0% {
  opacity: 0;
  transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
  animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }
  60% {
  opacity: 1;
  transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
  } 
  &:hover{  
    animation-name: rubberBand;
    animation-duration: 1s;
    animation-fill-mode: both;
    }
    @keyframes rubberBand {
    0% {
    transform: scale3d(1, 1, 1);
        }
    30% {
    transform: scale3d(1.25, 0.75, 1);
        }
    40% {
    transform: scale3d(0.75, 1.25, 1);
       }
    50% {
    transform: scale3d(1.15, 0.85, 1);
       }
    65% {
    transform: scale3d(.95, 1.05, 1);
       }
    75% {
    transform: scale3d(1.05, .95, 1);
       }
    100% {
    transform: scale3d(1, 1, 1);
       }
    }    
`