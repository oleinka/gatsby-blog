import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledDiv = styled.div `
  width: 100px;
  height: 100px;
  background-color: red;
`;
const Banner = styled.div `
  background-image: url("/static/07ed97db881f74b28d6eba10a4efa860/bgimage.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -10; 
`;

const IndexPage = () => (
  <>
    <Banner/>
      <h1>Hi people</h1>
      <p>Welcome to my new Gatsby site.</p>
      <p>Soon</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <StyledDiv/>
    </div>
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </>
)

export default IndexPage
