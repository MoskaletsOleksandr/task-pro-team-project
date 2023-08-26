import styled from "@emotion/styled";


export const AuthTitle=styled.p`
font-size:18px;
color:${({name})=>(name==='register'?'white':'rgba(255, 255, 255, 30%)')};
margin-bottom:10px;
`


export const AuthSpan=styled.span`
font-size:18px;
color:${({name})=>(name!=='register'?'white':'rgba(255, 255, 255, 30%)')};

margin-left:20px;

`