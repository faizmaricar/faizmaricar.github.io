import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query MetadataQuery {
      site {
        siteMetadata {
          defaultTitle: title
          titleTemplate
          defaultDescription: description
          siteUrl: url
          twitterUsername
          navigation
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
