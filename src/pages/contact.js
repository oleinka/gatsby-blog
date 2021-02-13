import React from "react"
import { Link } from "gatsby"
import Navigation from "../components/Navigation";

const ContactPage = () => (
  <>
    <Navigation/>
    <h1>Kontakt</h1>
    <p>e-mail: m.olejniczak550@gmail.com</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default ContactPage
