import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Date = () => {
  const data = useStaticQuery(graphql`
    query {
      currentBuildDate {
        currentDate
      }
    }
  `)

  return (
    <h2>From component static query: {data.currentBuildDate.currentDate}</h2>
  )
}

export default Date
