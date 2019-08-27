import React from 'react'

import { renderRoutes } from 'react-router-config';
import { FooterStyle, WrapperFooter, Main } from './styled';

import { Menu } from './../../view/Menu'

export const Dashboard = ({ route }) => (
  <>
    <Menu />
    <Main>
      {renderRoutes(route.routes)}
    </Main>
    <FooterStyle>
      <WrapperFooter>© Copyright Powered Fw . All rights reserved.</WrapperFooter>
    </FooterStyle>
  </>
)

