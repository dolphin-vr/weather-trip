import styled from "styled-components";
import { Icon } from "../Icon/Icon";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 12;
`;

export const Form = styled.form`
  position: relative;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  width: 600px;
  /* padding: 24px; */
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.h1`
  width: 100%;
  padding: 24px;
  font-size: 24px;
  line-height: 1;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightgray};
`;

export const BtnClose = styled.button`
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  /* border-radius: 50%; */
  stroke: ${({ theme }) => theme.colors.gray};
  background-color: transparent;
  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;
export const SvgIcon = styled(Icon)`
  width: 24px;
  height: 24px;
`;

export const Fields = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
`
export const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
`;
export const Star = styled.span`
  color: ${({ theme }) => theme.colors.red};
`;



export const Footer = styled.div`
  width: 100%;
  /* height: 64px; */
  padding: 24px;
  display: flex;
  gap: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.lightgray};
`;
export const BtnCancel = styled.button`
  cursor: pointer;
  height: 40px;
  margin-left: auto;
  display: flex;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  font-size: 18px;
  font-weight: 500;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;
export const BtnSave = styled.button`
  cursor: pointer;
  /* display: inline-block; */
  height: 40px;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.colors.activeblue};
  }
`;

export const ErrorMsg = styled.span`
  color: ${({ theme }) => theme.colors.red};
`;