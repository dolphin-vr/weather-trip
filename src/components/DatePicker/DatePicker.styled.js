import styled from "styled-components";
import { Icon } from "../Icon/Icon";

export const DateField = styled.div`
  position: relative;
  width: 224px;
  width: 100%;
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
  /* width: 50%; */
  margin-left: auto;
  margin-right: 0;
  padding: 8px;
  padding: 8px 40px 8px 8px;
  font-size: inherit;
  color: ${({ theme }) => theme.colors.gray};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
`;
export const BtnText = styled.button`
  position: absolute;
  z-index: 3;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  stroke: ${({ theme }) => theme.colors.gray};
`;
export const SvgIcon = styled(Icon)`
  width: 24px;
  height: 24px;
`;