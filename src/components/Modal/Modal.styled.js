import styled from "styled-components";

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
  padding: 24px;
	display: flex;
	flex-direction: column;
	gap: 12px;
  background-color: white;
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  color: transparent;
`;