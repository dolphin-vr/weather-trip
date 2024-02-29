import styled from "styled-components";
import { Icon } from "../Icon/Icon";

export const Gallery = styled.section`
  height: 284px;
  overflow-x: auto;
  overflow-x: scroll;
  overflow-x: hidden;
  /* overscroll-behavior-x: auto; */
  /* overscroll-behavior-x: contain; */
  /* overscroll-behavior-x: none; */
  /* overflow-wrap: normal; */
  /* scroll-snap-align: start; */
  flex-shrink: 1;
  display: flex;
  justify-content: start;
  gap: 40px;
`;

export const BtnAdd = styled.button`
  cursor: pointer;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  background-color: lightgray;
  border: none;
  border-radius: 4px;
`;
export const SvgIcon = styled(Icon)`
	width: 32px;
	height: 32px;
`
