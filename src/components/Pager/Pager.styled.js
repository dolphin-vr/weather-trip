import styled from "styled-components";
import { Icon } from "../Icon/Icon";

export const Panel = styled.ul`
  display: flex;
  gap: 24px;
  justify-content: center;
`;

export const Button = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  fill: ${({ theme }) => theme.colors.darkgray};
  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.colors.gray};
  }
  &:disabled {
    cursor: default;
    fill: ${({ theme }) => theme.colors.gray};
    background-color: ${({ theme }) => theme.colors.lightgray};
  }
`;
export const SvgIcon = styled(Icon)`
  width: 24px;
  height: 24px;
`;
