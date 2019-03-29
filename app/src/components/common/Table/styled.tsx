import styled from 'styled-components';

const BorderColor = '#efefef';


export const TableStyle = styled.table`
    border-collapse: collapse;
    width: 100%;
    border: 1px solid ${BorderColor};
    th {
        text-align: left;
        background:  #c0defd;
        border-color: ${BorderColor} !important;
        color: #8d8d8d;
        text-transform: uppercase;
        font-size: 11px;
        border-bottom-width: 2px !important;
        font-weight: 700;
    }
    td, th {
        border: 1px solid ${BorderColor};
        padding: 10px;
        background: white;
        border-left: none;
        border-right: none;
    }
    td {
        height: 30px;
    }
`;