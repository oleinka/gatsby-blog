import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavigationWrapper = styled.nav `
    position: absolute;
    width: 100%; 
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Quicksand';
    font-size: 25px;
    padding: 30px;
    a {
        text-decoration: none;
        color: inherit;
    }
`;
const NavigationItems = styled.ul `
    display: flex; 
    flex-direction: row;
    list-style-type: none;
`;

const NavigationList = styled.li `
    margin-left: 20px;
`

const Navigation = () => (
<NavigationWrapper>
<span>
    <Link to='/'>LOGO</Link>
</span>
<NavigationItems>
    <NavigationList>
        <Link to='/'>Strona główna</Link>
    </NavigationList>
    <NavigationList>
        <Link to='/projects'>Portfolio</Link>
    </NavigationList>
    <NavigationList>
        <Link to='/contact'>Kontakt</Link>
    </NavigationList>
</NavigationItems>
</NavigationWrapper>
)

export default Navigation