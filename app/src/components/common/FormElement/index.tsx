import React, { ReactNode, SFC } from 'react'

import { FormElementStyle } from './styled';

interface Props {
    children: ReactNode;
}

export const FormElement: SFC<Props> = ({ children }) => (
    <FormElementStyle>{children}</FormElementStyle>
)