import React from 'react'
import { useEffect } from 'react';
import { ListStyled, WrapperTopBar, LogoWrapper, Logo, NavLeft, NavRight, Error } from './styled';
import { fetchSection } from './../../state/section/actions'

export const Nav = ({
  dispatch,
  errorMessage,
  isFetching,
  items
}) => {

  const handleLogOut = () => {
    localStorage.removeItem('token')
    location.href = '/admin';
  }

  useEffect(() => {
    dispatch(fetchSection());
  }, []);

  return (
    <WrapperTopBar>
      <LogoWrapper>
        <Logo>Fw</Logo>
      </LogoWrapper>
      <NavLeft loading={isFetching}>
        <Error>{errorMessage}</Error>
        <ListStyled>
          {items.map((module) => (
            <li key={module.id}><a><img src={module.icon} />{module.name}</a>
              <ul>
                {module.sections.map((section) => (
                  <li key={section.id}><a href={section.url}>{section.name}</a></li>
                ))}
              </ul>
            </li>
          ))}
        </ListStyled>
      </NavLeft>
      <NavRight>
        <ListStyled pos="right">
          <li><a href="http://">User xxx</a>
            <ul>
              <li><a href="/admin/profile">Profile</a></li>
              <li><a onClick={() => handleLogOut()}>Log out</a></li>
            </ul>
          </li>
        </ListStyled>
      </NavRight>
    </WrapperTopBar>
  )
}