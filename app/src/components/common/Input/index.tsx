import React, { SFC } from 'react'

import { InputStyle } from './styled'

interface Props {
    type: string;
    name?: string;
    value?: string;
    onClick?: Function;
    onChange?: Function
}

export const Input: SFC<Props> = ({ ...props }) => (
    <InputStyle {...props} />
)