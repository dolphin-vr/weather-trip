import styled from "styled-components";
import { Icon } from "../Icon/Icon";

export const Card = styled.div`
  cursor: pointer;
  position: relative;
  width: 182px;
  /* flex-basis: 220px; */
  /* flex-shrink: 0; */
  display: flex;
  flex-direction: column;
  /* border-radius: 4px; */
`;

export const Photo = styled.img`
  /* width: 100%; */
  height: 180px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Info = styled.div`
  padding: 16px 16px;
  border: 1px solid gray;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;
export const City = styled.p`
	margin-bottom: 16px;
  font-size: 16px;
  font-weight: 600;
`;

export const Period = styled.p`
  /* font-size: 1.2em; */
  letter-spacing: 0.4px;
  color: darkgrey;
`;

export const BtnDelete = styled.button`
  position: absolute;
  bottom: 4px;
  right: 4px;
  padding: 4px;
  border: none;
  background-color: transparent;
  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;
export const SvgIcon = styled(Icon)`
	width: 24px;
	height: 24px;
`