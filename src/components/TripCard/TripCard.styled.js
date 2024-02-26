import styled from "styled-components";

export const Item = styled.li`
	cursor: pointer;
	width: 240px;
	display: flex;
	flex-direction: column;
	gap: 8px;
`

export const Photo = styled.img`
	width: 100%;
	height: 240px;
`

export const City = styled.p`
  padding: 4px 16px;
  font-size: 1.4em;
  font-weight: 600;
`;

export const Period = styled.p`
  padding: 4px 16px;
  font-size: 1.2em;
  color: darkgrey;
`;
