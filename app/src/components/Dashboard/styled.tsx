import styled from 'styled-components';

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

export const Main = styled.main`
  height: calc(100% - 100px);
  overflow-y: scroll;
`;
