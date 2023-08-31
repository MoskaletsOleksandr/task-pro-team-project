import styled from "@emotion/styled";
import {  NavLink } from 'react-router-dom';

export const AuthTitle=styled.div`
display:flex;
justify-content:start;
gap:20px;
font-size:18px;
margin-bottom:10px;

`

export const StyledLink=styled(NavLink)`
display:inline-block;
text-decoration:none;
color:rgba(255, 255, 255, 30%);
&.active{
    color:white;

}
&:hover{
    color:rgba(255, 255, 255, 70%);
}


`