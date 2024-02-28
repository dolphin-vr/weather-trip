import styled from "styled-components";
import { Icon } from "../Icon/Icon";

export const Wrapper = styled.section`
	width: 30%;
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: center;
`

export const SvgIcon = styled(Icon)`
  width: 64px;
  height: 64px;
`;

export const WeekDay = styled.p`
	font-size: 5em;
	font-weight: 700;
`

export const Temperature = styled.p`
	font-size: 7em;
`

export const City = styled.p`
	font-size: 4em;
`