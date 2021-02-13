import React from "react"
import Navigation from "../components/Navigation";
import GlobalStyle from "../Styles/GlobalStyles";

const MainLayout = ({children}) => (
  <>
    <GlobalStyle/>
    <Navigation/>
    {children}
    <h1>Layout</h1>
  </>
)

export default MainLayout