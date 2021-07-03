import { css } from "@emotion/react"
import styled from "@emotion/styled"

const baseHeadingStyles = css`
  font-family: Jost;
`
const baseBodyStyles = css`
  font-family: Poppins;
`

export const PageHeading = styled.h1`
  ${baseHeadingStyles};
  font-style: normal;
  font-weight: 500;
  font-size: 68px;
  line-height: 98px;
  letter-spacing: -0.03em;
`

export const ArticleHeading = styled(PageTitle)`
  font-size: 40px;
  line-height: 58px;
`

export const ArticleSubHeading = styled(ArticleTitle)`
  font-size: 24px;
  line-height: 35px;
`
export const Body = styled.p`
  ${baseBodyStyles}
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.05em;
`

export const StrongBody = styled(Body)`
  font-weight: bold;
`

export const BigBody = styled(Body)`
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.03em;
`

export const SmallBody = styled(Body)`
  font-size: 12px;
  font-weight: normal;
  line-height: 18px;
  letter-spacing: 0.1em;
`

export const PreTitle = styled(Body)`
  font-size: 12px;
  font-weight: normal;
  line-height: 18px;
  letter-spacing: 0.1em;
`

export const ButtonText = styled(StrongBody)`
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`
export const LargeButtonText = styled(ButtonText)`
  font-size: 16px;
  line-height: 18px;
`
