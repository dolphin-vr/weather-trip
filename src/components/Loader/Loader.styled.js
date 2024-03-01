import styled from "styled-components";
import { Icon } from "../Icon/Icon";

export const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 96px;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SvgIcon = styled(Icon)`
  width: 64px;
  height: 64px;
  animation: spin infinite 20s linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
