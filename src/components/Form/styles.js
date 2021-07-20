import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { baseBodyStyles, SmallBody } from "@components/Text"

const baseInputStyles = () => css`
  display: block;
  margin-bottom: 16px;
  width: 100%;
  padding: 4px 8px;
`

export const StyledLabel = styled(SmallBody)`
  ${baseBodyStyles}
  font-weight: bold;
  display: inline-block;
  margin-bottom: 8px;
`
export const StyledInput = styled.input`
  ${baseInputStyles}
`

export const StyledTextArea = styled.textarea`
  ${baseInputStyles}
  height: 200px;
  resize: none;
`
