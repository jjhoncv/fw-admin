import styled, { css } from 'styled-components';

// css Button
const BackgroundButton = '#ff4669';
const TextColorButton = '#fff';

// css Input
const BackgroundInput = '#fff';
const TextColorInput = '#6c7486';
const BorderColor = '#e2e2e2';

export const InputStyle = styled.input`
    border-radius: 3px;
    ${({ type }) => (type === "text" || type === "password") && css`
        background: ${BackgroundInput};
        border: 1px solid ${BorderColor};
        padding: 8px 1%;
        line-height: 22px;
        font-size: 14px;
        color: ${TextColorInput};
        width: 98%;
    `}

    ${({ type }) => (type === "button" || type === "submit") && css`
        background: ${BackgroundButton};
        color: ${TextColorButton};
        border: 0;
        padding: 12px 24px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        text-transform: uppercase;
        font-size: 11px;

        &:hover {
            cursor: pointer;
            outline: 0;
        }
    `}
`;

