import styled from "styled-components";

export const Layout = styled.div`
  max-width: 1440px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
`;

export const Main = styled.main`
  width: 70%;
  padding: 32px;
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Aside = styled.aside`
  position: relative;
  min-width: 260px;
  width: 306px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.navy};
`;
