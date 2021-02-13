import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Navigation from "../components/Navigation";

const StyledDiv = styled.div `
  width: 100px;
  height: 100px;
  background-color: red;
`;

const IndexPage = () => (
  <>
    <Navigation/>
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
