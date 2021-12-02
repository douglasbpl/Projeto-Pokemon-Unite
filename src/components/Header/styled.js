import styled from 'styled-components';

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

img{
    width:100px;
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





