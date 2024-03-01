import styled from "styled-components";
import { Icon } from "../Icon/Icon";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
`;
export const Input = styled.input`
  padding: 8px 40px 8px 8px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  background: transparent;
  color: ${({ theme }) => theme.colors.black};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;
export const BtnOpen = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 38px;
  height: 38px;
  padding: 0;
  border: none;
  background: transparent;
  stroke: ${({ theme }) => theme.colors.gray};
`;
export const SvgIcon = styled(Icon)`
  width: 24px;
  height: 24px;
`;

const getDisplay = props => {
  if (props.$isopen) {
    return "flex";
  } else {
    return "none";
  }
};

export const Options = styled.ul`
  display: ${getDisplay};
  position: absolute;
  top: 38px;
  left: 0;
  z-index: 9;
  width: 100%;
  max-height: 272px;
  flex-direction: column;
  gap: 4px;
  padding: 12px 18px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
    margin-right: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.gray};
    border-radius: 4px;
    margin-right: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.lightgray};
  }
`;
export const Option = styled.li`
  cursor: context-menu;
  padding: 4px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  border-radius: 4px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightgray};
  }
`;
