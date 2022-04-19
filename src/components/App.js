import React from "react";
import styledComponents from "styled-components";
import bgimg from '../assets/bg.png';
import Main from "./main";
import Sidebar from "./sidebar";

const App = () => {
  return (
    <div>

      <Container>
        <Wrapper>
          <Sidebar />
          <Main />
        </Wrapper>
      </Container>

    </div>
  );
}

const Container = styledComponents.div`
background: #eefcff;
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
`;
const Wrapper = styledComponents.div`
background-image: url(${bgimg});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
width: 100%;
height: 100%;
display: flex;


`

export default App;
