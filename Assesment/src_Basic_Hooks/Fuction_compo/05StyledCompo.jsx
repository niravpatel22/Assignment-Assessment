import React from 'react';
import styled from 'styled-components';

function StyledCompo(props) {

const Blog = styled.section`
padding:20px;
background:red;
text-align:center;
`
const Title = styled.h1`
color:yellow;
`



    return (
      <>
      <Blog>
        <Title>
            Welcome To Styled Compo
        </Title>
      </Blog>
      </> 
    );
}

export default StyledCompo;