import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body, html {
        height:100%;
        color: #555;
        font-family: Arial;
        font-size: 13px;
    }
    #root{
        height:100%;
        background: #f5f5f5;
        position: fixed;
        width: 100%;
    }
    * {
        margin: 0;
        padding: 0;
        color: #555;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
    }
    h3 {
        margin: 0 0 16px 0;
        font-size: 18px;
        color: #555;
    }
    a, a:active, a:hover, a:visited, a:link {
        color: #555;
        text-decoration: none;
    }
    ul {
        list-style-type: none;
    }
`;