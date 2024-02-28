import styled from "styled-components";

export const Item = styled.li`
	cursor: pointer;
	width: 240px;
	display: flex;
	flex-direction: column;
`

export const Photo = styled.img`
	width: 100%;
	height: 240px;
`

export const Info = styled.div`
  padding: 16px 16px;
	border: 1px solid gray
`;
export const City = styled.p`
	margin-bottom: 16px;
  font-size: 16px;
  font-weight: 600;
`;

export const Period = styled.p`
  /* font-size: 1.2em; */
  color: darkgrey;
`;
