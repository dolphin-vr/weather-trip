import styled from "styled-components";

export const Layout = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	display: flex;
`

export const Main = styled.main`
	padding: 16px;
	display: flex;
	flex-direction: column;
	gap: 20px;
`

export const Title = styled.h1`
	font-size: 3em;
`
export const Bold = styled.span`
	font-weight: 700;
`

export const Aside = styled.aside`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-color: navy;
`