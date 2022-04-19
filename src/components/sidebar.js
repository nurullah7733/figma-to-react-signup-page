import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg'
import Input from './input';

const Sidebar = () => {
    return (
        <Container>
            <LogoWrapper>
                <img src={logo} alt='Logo' />
                <h3>Eli <span>Codes</span></h3>
            </LogoWrapper>
            <Form>
                <h3>
                    Sign Up
                </h3>
                <Input placeholder='Your Name' />
                <Input type='email' placeholder='Email' />
                <Input type='password' placeholder='Password' />
                <Input type='password' placeholder='Confirm Password' />
                <button>Sign Up</button>
            </Form>
            <Term>
                By signing up, I agree to the Privacy Policy <br /> and Terms of Service
            </Term>
            <h4>Already have an account? <span>Sign In</span></h4>

        </Container>
    );
}

const Term = styled.p`
color: #808080;
font-size: 13px;
text-align: center;
font-weight: 300;
margin: -35px;

`
const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column; 
align-items: center;

h3{
    color: #666666;
    margin-bottom: 18px;

}
button{
width: 75%;
max-width: 335px;
min-width: 200px;
height: 52px;
background-color: #70EDB9;
border: none;
margin: 0.4rem;
border-radius: 10px;
color: #fff;
font-weight: 600;
font-size: 14px;
cursor: pointer;
}

`

const LogoWrapper = styled.div`
img{height: 6rem}
h3{
    text-align: center;
    color: #FF8D8D;
    font-weight: 700;
    font-size: 28px;
    span{
        color: #70EDB9;
        font-size: 21px;
        font-weight: 300;
    }
}
`
const Container = styled.div`
min-width: 519px;
background-color: rgba(255, 255, 255, 0.87);
backdrop-filter: blur(48%);
height: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
padding:  0 2rem;

h4{
    font-size: 13px;
    font-weight:700;
    color: #808080

}
span {
    color: #FFA689;
    cursor: pointer;
}

@media (max-width: 900px) {
    width: 100vh;
    position: absolute;
    padding: 0;
    
}
`


export default Sidebar;
