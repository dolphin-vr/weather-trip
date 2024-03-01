import styled from "styled-components";

export const Layout = styled.div`
  max-width: 1440px;
  height: 100vh;
  /* height: 760px; */
  margin: 0 auto;
  display: flex;
  /* outline: 1px solid orange; */
`;

export const Main = styled.main`
  width: 70%;
  padding: 32px;
  flex-grow: 1;
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