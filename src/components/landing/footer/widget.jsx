import React from 'react';
import Style from 'styled-components';

const FooterSection = Style.footer`
    background: #CCC;
    border-top: 1vh solid rgb(160, 160, 160);
    height: 27vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const ColumnSection = Style.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0 1vw;
    & > last:child {
        margin: 0;
    }
`
const ColumnTitle = Style.h3`
    background: rgb(135,135,135);
    width: 7vw;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
`
const ColumnItems = Style.ul`
    list-style-type: none;
    padding-inline-start: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    & > li {
        background: rgb(165,165,165);
        margin: 0.5vw 0;
        width: 17vw;
        display: block;
    }
    & > li:last-child {
        margin: 0;
    }
`
const NetWorkColumnItems = Style.ul`
    list-style-type: none;
    padding-inline-start: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    display: flex;
    flex-direction: row;
    & > li {
        background: rgb(165,165,165);
        margin: 0.5vw 4vh 0 0;
        width: calc(10px + 7vmin);
        height: calc(10px + 7vmin);
        display: block;
    }

`

export const FooterWidget = () => (
    <FooterSection>
        <ColumnSection>
            <ColumnTitle>&nbsp;</ColumnTitle>
            <ColumnItems>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
            </ColumnItems>
        </ColumnSection>
        <ColumnSection>
            <ColumnTitle>&nbsp;</ColumnTitle>
            <ColumnItems>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
            </ColumnItems>
        </ColumnSection>
        <ColumnSection>
            <ColumnTitle>&nbsp;</ColumnTitle>
            <ColumnItems>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
            </ColumnItems>
        </ColumnSection>
        <ColumnSection>
            <ColumnTitle>&nbsp;</ColumnTitle>
            <NetWorkColumnItems>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
            </NetWorkColumnItems>
        </ColumnSection>
    </FooterSection>
);