import styled from "styled-components";
import { Icon } from "../Icon/Icon";

export const List = styled.ul`
  display: flex;
  justify-content: start;
  gap: 40px;
  overflow-x: scroll;
	overflow-x: hidden;
	/* outline: 1px solid orange; */
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  /* border-radius: 4px; */
`;

export const BtnAdd = styled.button`
  width: 182px;
  height: 180px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  background-color: ${({ theme }) => theme.colors.lightgray};
  border: none;
  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;
export const SvgIcon = styled(Icon)`
  width: 32px;
  height: 32px;
`;
