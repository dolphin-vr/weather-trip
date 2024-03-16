import styled from "styled-components";
import { Icon } from "../Icon/Icon";

export const Weekly = styled.section`
  position: relative;
  min-height: 210px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Title = styled.h2``;

export const List = styled.ul`
  width: 100%;
  display: flex;
  gap: 30px;
  overflow: hidden;
`;
export const Item = styled.li`
  position: relative;
  width: 80px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  &:hover .slide-text {
    transform: translateY(-75%);
  }
`;

export const Day = styled.span`
  color: ${({ theme }) => theme.colors.gray};
`;

export const SvgIcon = styled(Icon)`
  width: 64px;
  height: 64px;
`;

// todo tooltip on img-hover
export const Baloon = styled.span`
  position: absolute;
  left: 0;
  top: 100%;
  display: block;
  width: 100%;
  height: 100%;
  font-size: 9px;
  /* display: inline-block; */
  width: 100px;
  transition: transform ${({ theme }) => theme.effect.cubic};
`;
export const Temper = styled.span``;
