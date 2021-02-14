import React from "react"
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import GlobalStyle from "../Styles/GlobalStyles";

const MainLayout = ({children}) => (
  <>
    <GlobalStyle/>
    <Navigation/>
    {children}
    <Footer/>
  </>
)

export default MainLayout