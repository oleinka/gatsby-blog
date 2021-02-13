import React from "react"
import { Link } from "gatsby"
import Navigation from "../components/Navigation";

const ProjectsPage = () => (
  <>
    <Navigation/>
    <h1>Moje projekty</h1>
    <p>Projekt 1</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default ProjectsPage
