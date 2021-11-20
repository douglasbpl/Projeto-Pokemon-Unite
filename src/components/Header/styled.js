import styled, { keyframes } from 'styled-components';

export const ContainerHeader = styled.header`
display:flex;
flex-direction:column;
width:100%;
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

export const MenuFixed = styled.nav`
display: flex;
align-items: center;
justify-content: space-evenly;
font: 900 13px/1 "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
width:100%;
height:10vh;
{  animation-name: lightSpeedIn;    
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
img{
    width:100px;
        transform-origin: top center;
        origin: top center;
        transform-origin: top center;
        animation-name: swing;
        animation-duration: 1.5s;        
        animation-fill-mode: both;
        animation-iteration-count: infinite;
        }
        @keyframes swing {
        20% {
        transform: rotate3d(0, 0, 1, 15deg);        
        }
        40% {
        transform: rotate3d(0, 0, 1, -10deg);        
        }
        60% {
        transform: rotate3d(0, 0, 1, 5deg);        
        }
        80% {
        transform: rotate3d(0, 0, 1, -5deg);        
        }
        100% {
        transform: rotate3d(0, 0, 1, 0deg);      
    }             
`

export const PlayPokemonUnite = styled.div`
width:100%;
background-image:url(${props => props.background});
background-size:cover;
background-position-y: 30px;
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

export const DivEffect = styled.div`
width:30vw;
background-color:white;
text-align:center;
display:flex;
flex-direction:column;
border-radius: 10%;
opacity:0.7;
margin-left:20px;
flex-wrap:wrap;
font: 400 13px/1 "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    {
    animation-name: swing;   
    transform-origin: top center;
    origin: top center;    
    animation-duration: 1.5s;        
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    }
    @keyframes swing {
    20% {
    transform: rotate3d(0, 0, 1, 15deg);        
    }
    40% {
    transform: rotate3d(0, 0, 1, -10deg);        
        }
    60% {
    transform: rotate3d(0, 0, 1, 5deg);        
        }
    80% {
        transform: rotate3d(0, 0, 1, -5deg);        
        }
    100% {
        transform: rotate3d(0, 0, 1, 0deg);      
    }    
}
&:hover{
    animation: ${keyframes`
    0% {
        
    }    
    100% {  
    `}
    }
h1{
    font-size:50px;
    font-weight:bold;
    color:black;
}
p{
    font-size:20px;
}
h2{
    font-size:30px;
    font-weight:bold;
    color:black;
}
div{
    display:flex;
    width:100%;
    justify-content:space-around;
    flex-wrap:wrap;
    margin-bottom:10px;}

img{
    width:150px;
    height:50px;
}  
`





