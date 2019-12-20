import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Date from "../components/date"

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Site Last Built:</h1>
    <h2>From page query: {data.currentBuildDate.currentDate}</h2>
    <Date />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    currentBuildDate {
      currentDate
    }
  }
`
