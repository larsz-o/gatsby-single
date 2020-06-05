import React, { FunctionComponent } from 'react';
import { Container, Info, NoWrap } from './style';

export const Footer: FunctionComponent<{}> = () => {
    return (
        <Container>
            <Info>
                <NoWrap>&copy; {year}</NoWrap>{' '}
                <NoWrap>
                    Created by Lars Mackenzie Designs &mdash; with GatsbyJS :)
                </NoWrap>
            </Info>
            <Info>Our website uses no cookies</Info>
        </Container>
    );
};
let date = new Date();
let year = date.getFullYear();