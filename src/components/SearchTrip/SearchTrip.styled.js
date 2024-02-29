import styled from "styled-components";
import { Icon } from "../Icon/Icon";

export const Label = styled.label`
	position: relative;
	width: 300px;
	height: 48px;
`

export const Filter = styled.input`
  width: 100%;
  height: 100%;
  padding: 8px 8px 8px 48px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.lightgray};

  &::placeholder {
    font-size: 12px;
    color: gray;
  }
  &:focus {
    outline: none;
  }
`;

export const SvgIcon = styled(Icon)`
  position: absolute;
  display: inline-block;
  top: 12px;
  left: 12px;
  width: 24px;
  height: 24px;
  border-radius: 8px;
`;