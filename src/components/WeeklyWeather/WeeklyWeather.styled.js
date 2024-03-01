import styled from "styled-components";
import { Icon } from "../Icon/Icon";

export const Weekly = styled.section`
	display: flex;
	flex-direction: column;
	gap: 24px;
`

export const Title = styled.h2`
`

export const List = styled.ul`
  width: 100%;
  display: flex;
  gap: 30px;
  overflow-x: scroll;
  overflow-x: hidden;
`;
export const Item = styled.li`
	width: 80px;
	flex-shrink: 0;
	display: flex;
	flex-direction: column;
	gap: 8px;
	align-items: center;
	/* border: 1px solid gray; */
`

export const Day = styled.span`
	color: gray;
`

//  tooltip on img-hover?
export const SvgIcon = styled(Icon)`
	width: 100%;
	height: 100%;
	width: 96px;
	height: 96px;
	width: 64px;
	height: 64px;
`
export const Baloon = styled.span`
`
export const Temper = styled.span`
`