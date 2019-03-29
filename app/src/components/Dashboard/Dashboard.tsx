import * as React from 'react'

import { renderRoutes } from 'react-router-config';

import styled from 'styled-components';

export const Main = styled.main`
    height: calc(100% - 100px);
    overflow-y: scroll;
`;

import {
    FooterStyle,
    WrapperFooter
} from './styled';

import { HeaderContainer } from './../../view/Sections/containers/HeaderContainer'

export const Dashboard = ({ route }) => (
    <>
        <HeaderContainer />
        <Main>
            {renderRoutes(route.routes)}
        </Main>
        <FooterStyle>
            <WrapperFooter>
                © Copyright Powered Fw . All rights reserved.
            </WrapperFooter>
        </FooterStyle>
    </>
)
