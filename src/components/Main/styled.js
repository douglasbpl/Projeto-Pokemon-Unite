import styled from 'styled-components';


export const ContainerMain = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
font: 400 13px/1 "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
`

export const ContainerFIrstSection = styled.section`
background-color: #271d45;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
padding-top: 90px;
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
height: 70vh;
`

export const Cards = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 15px;
background-color: aliceblue;
width: 250px;
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
    height: 60%;    
  }

`

export const ContainerSecondSection = styled.section`
display: flex;
align-items: center;
justify-content: flex-start;
width: 100%;
background-image: url(${props => props.backgroundss});
background-size: cover;
background-position: center center;
height: 100vh;   
`
export const BoxTTMaps = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 30%;
background-color:white; 
opacity:0.5;  
height: 50%;
border-radius: 10%;
font: 400 13px/1 "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 1.7rem;  
}
h2{
    color: black;
    text-transform: uppercase;    
}
h3{
    color: black;
    font-size: 1.7rem;    
}
ul {
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;    
  }
    li {
        display: flex;
        align-items: center;
        justify-content: flex-start;      
        
         }
a {
    color: Black;
    text-decoration: none;
    padding-bottom: 5px;    
}
a:hover{
    color: blue;   
}   
`
export const MarkStyle = styled.span`
padding-right: 15px;

img{
    width: 100%;
    
}          
`
export const BoxContainerMaps = styled.div`
width: 50%;
opacity: 0.8;
img{
    width: 100%;
    height: 100%;
}
`
export const ContainerThirdSection = styled.section`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: #271d45;
font: 400 13px/1 "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
padding-top: 80px;
padding-bottom: 50px;
h2{
    color: white;
    font-size: 2.5rem;
}
p{
    color: white;
    font-size: 1.2rem;
}
`
export const ContainerBoxVideo = styled.div`
width: 60%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;`

export const BoxVideo = styled.div`
display:flex;
width: 100%;
justify-content: space-around;
align-items: center;
text-align: center;
flex-wrap: wrap;
`

export const ConstVideo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 15px;
width: 400px;
max-height: 300px;
   
video
     {
        height: 100%;
        width: 100%;   
    }    
                                
`