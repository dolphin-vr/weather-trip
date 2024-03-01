import styled from "styled-components";
import { Icon } from "../Icon/Icon";

export const Gallery = styled.section`
  min-height: 320px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const BtnAdd = styled.button`
  cursor: pointer;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  background-color: ${({ theme }) => theme.colors.lightgray};
  border: none;
  border-radius: 4px;
`;
export const SvgIcon = styled(Icon)`
  width: 32px;
  height: 32px;
`;
