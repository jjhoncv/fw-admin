
import styled from 'styled-components';

export const HeaderStyle = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    background: #044c92;
    align-items: center;
    border-bottom: 1px solid #044c92;
`;

export const NavLeft = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
`;

export const ItemList = styled.ul`
    display: flex;
    list-style-type: none;
    align-items: center;
    > li {
        border-right: none !important;
        &:first-child {
            border-left: none;
        }
    }
    li {
        border: 1px solid #1c5a96;
        border-top: none;
        border-bottom: none;
        margin-right: -1px;
        position: relative;

        a {
            height: 40px;
            align-items: center;
            display: flex;
            padding: 0 20px;
            color: white;
            position: relative;
            &:hover {
                background: rgba(255, 255, 255, 0.13);
            }
        }
        ul {
            display: none;
            position: absolute;
            background: white;
            top: 40px;
            li {
                border-top: 1px solid #ccc;
                border-left: 1px solid #ccc;
                border-right: 1px solid #ccc;
                /* border: 1px solid #ccc; */
                &:first-child {
                    border-top: 1px solid #044c92;
                }
                a {
                    color: #333;
                    &:hover {
                        background: white;
                    }
                }
            }
        }
        &:hover {
            ul {
                display: block;
                width: 120px;
                border-bottom: 1px solid #ccc;
                ${props => (props.pos) ? 'right: 0;' : 'left: -1px;'}
            }
        }
    }
`;

export const NavRight = styled.div`
    display: flex;
    margin-right: 25px;
`;

export const Logo = styled.div`
    display: flex;
    width: 25px;
    height: 25px;
    background: #333;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 2px;
`;

export const LogoWrapper = styled.div`
    display: flex;
    margin: 0 25px;
`;

export const FooterStyle = styled.div`
    position: fixed;
    width: 100%;
    height: 40px;
    background: #f1f1f1;
    bottom: 0;
    border-top: 1px solid #ccc;
    display: flex;
    align-items: center;
`;


export const WrapperFooter = styled.div`
    margin-left: 25px;
`;