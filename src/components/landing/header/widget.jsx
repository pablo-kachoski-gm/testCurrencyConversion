import React from 'react';
import Style from 'styled-components';

const HeaderSection = Style.header`
    height: 25vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
`
const HeaderSectionLogo = Style.div`
    width: 5vw;
    height: 5vw;
    border-radius: 50%;
    background: #CCC;
    margin: 0 0 3vh 0;
`
const UlNav = Style.ul`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    padding-inline-start: 0;
    margin-block-start: 0;
    margin-block-end: 0;

    & > li {
        margin: 0 1vw;
        width: 7vw;
        display: block;
        background: #CCC;
    }
`

export const HeaderWidget = () => (
    <HeaderSection>
        <HeaderSectionLogo>&nbsp;</HeaderSectionLogo>
        <nav>
            <UlNav>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
            </UlNav>
        </nav>
    </HeaderSection>
);