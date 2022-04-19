import React from "react";
import styled from "styled-components";

const Input = ({ type, placeholder }) => {
    return (
        <Container>
            <StyledInput type={type ? type : 'text'} placeholder={placeholder} required autoComplete="off" />
            <Status />
        </Container>
    )
}


const StyledInput = styled.input`
width: 88%;
max-width: 335px;
min-width: 250px;
height: 52px;
background-color: #f5f5f5;
border: none;
margin: 0.4rem;
border-radius: 10px;
padding: 0 10px;
font-size: 14px;
color: #9D9D9D;
font-weight: 300;
box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.30);
border-radius: 11px;
transition: all 0.3s ease-in;

&:hover{
    transform: translateY(-3px);
}
&:focus-visible{
    outline: inherit;;
}

`
const Status = styled.div`
width: 10px;
height: 10px;
background-color: #9d9d9d;
border-radius: 10px;
margin-left: 16px;

${StyledInput}:focus + & {
    background-color: #FFA689;
}
${StyledInput}:invalid + & {
    background-color: #FE2F75;
}
${StyledInput}:valid + & {
    background-color: #70EDB9;
}
`

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;


`

export default Input;