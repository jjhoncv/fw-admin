import React, { SFC } from 'react'

import { TableStyle } from './styled';

interface Props {
    data: Object[]
}

export const Table: SFC<Props> = ({ data }) => {
    let dataHead = [];
    data.forEach(item => {
        Object.keys(item).forEach(key => {
            dataHead.push(key)
        });
    });
    dataHead = Array.from(new Set(dataHead));

    return (
        <TableStyle>
            <thead>
                <tr>
                    {dataHead.map((head, index) => (
                        <th key={index}>{head}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {Object.keys(item).map((key, index) =>
                            <td key={index}>{item[key]}</td>
                        )}
                    </tr>
                ))}
            </tbody>
        </TableStyle>
    )
}

