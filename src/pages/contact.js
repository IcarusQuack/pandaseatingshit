import React from "react"
import { graphql } from "gatsby"

const Contact = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allSitePage {
      edges {
        node {
          path
        }
        next {
          path
        }
      }
    }
  }
`

export default Contact
