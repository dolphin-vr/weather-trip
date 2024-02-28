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
	margin-right: 12px;
`;

export const WeekDay = styled.p`
	font-size: 40px;
	font-weight: 700;
`

export const Temperature = styled.p`
	display: flex;
	align-items: center;
	font-size: 64px;
	display: flex;

`
export const Unit = styled.span`
	font-size: 28px;
	align-self: flex-start;
`

export const City = styled.p`
	font-size: 36px;
`

// .send-btn::after {
//     content: "";
//     display: inline-block;
//     position: absolute;
//     top: 8px;
//     right: 24px;
//     width: 24px;
//     height: 24px;
//     background-image: url(../images/sprite.svg#send);
//     background-size: 32px;
// }
// {`${sprite}#${tag}`}