import React from "react"
import { Link } from "gatsby"
import Navigation from "../components/Navigation"


const BlogPage = () => (
  <>
    <Navigation/>
    <h1>Moje wpisy</h1>
    <p>wpis 1</p>
    <p>wpis 2</p>
    <p>wpis 3</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default BlogPage
