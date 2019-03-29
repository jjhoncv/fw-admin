import * as React from 'react'

import { ListStyled, LogoWrapper, Logo, NavLeft, NavRight } from './styled';

import { ModuleHeader, SectionHeader } from './../../../Sections/models/ModuleHeader'

interface Props {
    data: ModuleHeader[];
}

export const TopBar: React.SFC<Props> = ({ data }) => {

    const handleLogOut = () => {
        localStorage.removeItem('token')
        location.href = '/admin';
    }
    
    return (
        <>
            <LogoWrapper>
                <Logo>Fw</Logo>
            </LogoWrapper>
            <NavLeft>
                <ListStyled>
                    {data.map((module: ModuleHeader) => (
                        <li key={module.id}><a><img src={module.icon} />{module.name}</a>
                            <ul>
                                {module.sections.map((section: SectionHeader) => (
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
        </>
    )
};