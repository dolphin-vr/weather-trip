import styled from "styled-components";
import { Icon } from "../Icon/Icon";

export const Weekly = styled.section`
`

export const Title = styled.h2`
`

export const List = styled.ul`
	width: 100%;
	display: flex;
	gap: 20px;
	overflow-x: scroll;
`
export const Item = styled.li`
	width: 96px;
	display: flex;
	flex-direction: column;
	gap: 8px;
	align-items: center;
`

export const Day = styled.span`
	color: gray;
`

//  tooltip on img-hover?
export const SvgIcon = styled(Icon)`
	width: 100%;
	/* width: 64px;
	height: 64px; */
`
export const Baloon = styled.span`
`
export const Temper = styled.span`
`