import * as React from 'react'

import { SelectStyle } from './styled';

interface Props {
    children: React.children;
}

export const Select: React.SFC<Props> = ({ children }) => (
    <SelectStyle>{children}</SelectStyle>
)