import styled from "styled-components";

export const DateField = styled.label`
  position: relative;
  width: 224px;
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 18px;
`;

export const Label = styled.span`
  margin-bottom: 4px;
  font-weight: 500;
`;

export const Field = styled.input`
	width: 172px;
	z-index: 2;
	padding: 4px 8px;
	font-size: inherit;
	border: 1px solid black;
	border-right: none;
	border-top-left-radius: 4px;
	border-bottom-left-radius: 4px;
`;

export const Calendar = styled.input`
  position: absolute;
  width: 100%;
	bottom: 0;
  margin: 0;
  padding: 4px;
  font-size: inherit;
  border: 1px solid black;
  border-radius: 4px;
`;