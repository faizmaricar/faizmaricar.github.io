import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query MetadataQuery {
      site {
        siteMetadata {
          title
          description
          navigation
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
