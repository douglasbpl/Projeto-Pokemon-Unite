import styled from 'styled-components';

export const ContainerFooter = styled.div`
display: flex;
flex-direction: column;
width: 100%;
background-color: #2d3246;
font: 900 13px/1 "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
text-transform: uppercase;
color: rgba(255, 255, 255, 0.5);
`

export const Container = styled.div`
display:flex;
width: 100%;
justify-content: center;
align-items: center;
`

export const BoxMenuFSection = styled.div`
display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;    
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    width: 50%; 
  }
  div:hover{
    background-color: rgba(255, 255, 255, 0.1);
  }
  ul{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;  
  }
  li{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px 0;  
  }  
  h3 {
    font-size: 25px;
  }
`

export const BoxsocialNetwork = styled.div`
width: 100%;
  ul{
  display: flex;
  width: 100%;    
  list-style: none;
  padding: 0;
  margin: 0;    
  }  
   li{
    display: flex;
    align-items: center;
    padding: 0;
    border: 1px solid rgba(255, 255, 255, 0.1);
    width: 25%;   
    }
    li:hover{
      background-color: rgba(255, 255, 255, 0.1);
    }
    a{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 23px;
    padding-bottom: 23px;
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;  
  }
  a:hover{
    color: gold;
  }
  `

export const CopyRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 9vh;
  text-align: center;
  &:hover{
    background-color: rgba(255, 255, 255, 0.1);
  }
  `