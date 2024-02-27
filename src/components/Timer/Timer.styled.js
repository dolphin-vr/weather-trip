import styled from "styled-components";

export const List = styled.ul`
	margin: 0 auto;
	display: flex;
	gap: 20px;
`

export const Item = styled.li`
	width: 48px;
	display: flex;
	flex-direction: column;
	gap: 8px;
	align-items: center;
`

export const Number = styled.span`
  font-size: 3em;
  line-height: 1.1;
  font-weight: 900;
  color: white;
`;
export const Unit = styled.span`
	text-transform: capitalize;
	color: gray
`