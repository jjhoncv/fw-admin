import styled, { css } from 'styled-components';

const BorderColor = '#e2e2e2';

export const WrapperTopBar = styled.div`
  display: flex;
  width: 100%;
  background: white;
  align-items: center;
  border-bottom: 1px solid ${BorderColor};
`;

export const NavLeft = styled.div`
  display: flex;
  width: 100%;
  border-left: 1px solid ${BorderColor};
  border-right: 1px solid ${BorderColor};
  padding-left: 4%;
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


export const ListStyled = styled.ul`
    display: flex;
    list-style-type: none;
    align-items: center;
    > li {
        border-right: none !important;
        width: 120px;
        &:first-child {
            border-left: none;
        }
    }
    li {
        /* border: 1px solid ${BorderColor}; */
        border-top: none;
        border-bottom: none;
        margin-right: -1px;
        position: relative;

        &:hover {
            ul {
                display: block;
            }
        }

        a {
            height: 60px;
            align-items: center;
            display: flex;
            padding: 0 20px;
            position: relative;
            /* &:hover {
                background: rgba(255, 255, 255, 0.13);
            } */
        }
        ul {
            display: none;
            position: absolute;
            background: white;
            top: 60px;
            width: 120px;
            border-bottom: 1px solid ${BorderColor};
            ${({ pos }) => (pos === 'right') && css`
            right: 0;`}
            ${({ pos }) => (pos === 'left') && css`
            left: -1px;`}

            li {
                border-top: 1px solid ${BorderColor};
                border-left: 1px solid ${BorderColor};
                border-right: 1px solid ${BorderColor};
                &:first-child {
                    border-top: 1px solid ${BorderColor};
                }
                a {
                    height: 45px;
                    /* &:hover {
                        background: white;
                    } */
                }
            }
        }
    }
`;

export const Error = styled.div`
  width: 100%;
  height: 20px;
  text-align: center;
  font-size: 14px;
  color: red;
`;