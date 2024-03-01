import styled from "styled-components";

export const Layout = styled.div`
  max-width: 800px;
  height: 100vh;
  margin: 0 auto;
  padding: 32px;
  display: flex;
  flex-direction: column;
	align-items: center;
  gap: 40px;
`;

export const ErrorMsg = styled.span`
  margin-top: 32px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.red};
`;