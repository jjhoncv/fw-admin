import React, { SFC, ReactNode } from 'react'

import { FormStyle } from './styled';

interface Props {
    props?: any;
    children: ReactNode;
    onSubmit?: Function
}

export const FormStyled: SFC<Props> = ({ props, children }) => (
    <FormStyle {...props}>{children}</FormStyle>
)