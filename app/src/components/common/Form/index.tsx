import React, { SFC, ReactNode } from 'react'

import { FormStyle } from './styled';

interface Props {
    children: ReactNode;
    onSubmit?: Function
}

export const Form: SFC<Props> = ({ children }) => (
    <form>
        <FormStyle>{children}</FormStyle>
    </form>
)