import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';

const FooterWrapper = styled.nav `
    position: absolute;
    width: 100%; 
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Quicksand', sans-serif;
    font-size: 20px;
    padding: 30px;
    background-color: #3d3a32;
    color: white;
    a {
        text-decoration: none;
        color: inherit;
    }
`;
const FooterItems = styled.ul `
    display: flex; 
    flex-direction: row;
    list-style-type: none;
`;

const FooterList = styled.li `
    margin-left: 20px;
`

const Footer = () => (
<FooterWrapper>
<FooterItems>
    <FooterList>
        <Link to='/'>Strona główna</Link>
    </FooterList>
    <FooterList>
        <Link to='/projects'>Portfolio</Link>
    </FooterList>
    <FooterList>
        <Link to='/contact'>Kontakt</Link>
    </FooterList>
</FooterItems>
</FooterWrapper>
)

export default Footer