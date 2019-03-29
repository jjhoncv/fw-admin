import * as React from 'react'

import { LabelStyle } from './styled';

interface Props {
    children: React.children;
}

export const Label: React.SFC<Props> = ({ children }) => (
    <LabelStyle>{children}</LabelStyle>
)