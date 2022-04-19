import React from 'react';
import styled from 'styled-components';

const Main = () => {
    return (
        <Container>
            <h1 style={{ fontSize: '87px' }}>Join The <br /> Team</h1>
        </Container>
    );
}

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
h1{
    font-size: 87px;
    color: #343434;
    font-weight: 900;
    @media (max-width: 900px) {
        display: none;
    }
}
`

export default Main;
