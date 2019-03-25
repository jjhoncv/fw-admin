import styled from 'styled-components';

export const WrapperLogin = styled.div`
    padding: 10px 30px;
    border: 1px solid #ccc;
`;

export const PageWrapper = styled.div`
    width: 70%;
    margin: 30px auto 0;
`;

export const HeadPage = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const MainPage = styled.div`
    margin-top: 20px;
`;

export const PageOptionsHead = styled.div`
    button {

    }
`;

export const Button = styled.button`
    background: yellow;
    color: blue;
    border-radius: 4px;
    padding: 8px 12px;
`;

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    th {
        text-align: left;
        background:  #c0defd;
        border-color: #91c7ff !important
    }
    td, th {
        border: 1px solid #dedede;
        padding: 10px;
    }
`;