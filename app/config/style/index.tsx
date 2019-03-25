import { createGlobalStyle } from 'styled-components';

const css = `
    body, html {
        height:100%;
        color: #333;
        font-family: Arial;
        font-size: 13px;
    }
    #root{
        height:100%;
    }
    * {
        margin: 0;
        padding: 0;
    }
    a, a:active, a:hover {
        color: #333;
        text-decoration: none;
    }
    ul {
        list-style-type: none;
    }
    button {
        padding: 9px 25px;
        background: yellow;
        border: 1px solid #e8e800;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        &:hover {
            background: #ffff4e;
            border: 1px solid #e8e800;
            cursor: pointer;
        }
    }
`;

const GlobalStyle = createGlobalStyle`${css}`;

export { GlobalStyle };