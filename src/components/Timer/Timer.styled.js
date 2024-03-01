import styled from "styled-components";

export const List = styled.ul`
  margin: 0 auto;
  display: flex;
  gap: 20px;
`;

export const Item = styled.li`
  width: 48px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

export const Number = styled.span`
  font-size: 30px;
  line-height: 1.1;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.white};
`;
export const Unit = styled.span`
  font-size: 11px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.lightgray};
`;

export const Expired = styled.span`
  font-size: 20px;
  font-weight: 500;
  text-transform: capitalize;
`;
