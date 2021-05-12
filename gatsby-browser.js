import React from "react"
import Template from "./src/templates/wrapper"

export const wrapPageElement = ({element, props}) => (
  <Template {...props}>{element}</Template>
)