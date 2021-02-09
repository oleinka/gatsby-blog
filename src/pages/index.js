import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledDiv = styled.div `
  width: 100px;
  height: 100px;
  background-color: red;
`;

const IndexPage = () => (
  <>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <StyledDiv/>
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </>
)

export default IndexPage
