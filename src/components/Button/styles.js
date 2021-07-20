import { css } from "@emotion/react"
import styled from "@emotion/styled"

const baseContainerStyles = ({ fullWidth }) => css`
  min-width: 100px;
  width: ${fullWidth ? "100%" : "initial"};
  text-align: center;
  background-color: #12964f;
  color: #ffffff;
  border-radius: 10px;
  border: 0;
  box-shadow: none;

  &:hover {
    cursor: pointer;
    background-color: #12ae5a;
  }
`

export const Container = styled.button`
  ${baseContainerStyles}
  padding: 16px 0;
  height: 48px;
`

export const LargeContainer = styled.button`
  ${baseContainerStyles}
  padding: 24px 0;
  border-radius: 10px;
  height: 64px;
`
