import { css } from "@emotion/react"
import styled from "@emotion/styled"

const baseContainerStyles = () => css`
  min-width: 100px;
  text-align: center;
  background-color: #12964f;
  color: #ffffff;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background-color: #12ae5a;
  }
`

export const Container = styled.div`
  ${baseContainerStyles}
  padding: 16px 0;
  height: 48px;
`

export const LargeContainer = styled.div`
  ${baseContainerStyles}
  padding: 24px 0;
  border-radius: 10px;
  height: 64px;
`
