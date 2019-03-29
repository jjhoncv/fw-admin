import styled from 'styled-components';

// css Input
const BackgroundInput = '#fff';
const TextColorInput = '#6c7486';
const BorderColor = '#e2e2e2';

export const SelectStyle = styled.select`
    border-radius: 3px;
    background: ${BackgroundInput};
    border: 1px solid ${BorderColor};
    padding: 8px 1%;
    line-height: 22px;
    font-size: 14px;
    color: ${TextColorInput};
    width: 100%;
`;