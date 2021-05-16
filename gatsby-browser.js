import React from "react"
import Template from "./src/templates/wrapper"
import "semantic-ui-less/semantic.less"

export const wrapPageElement = ({element, props}) => (
  <Template {...props}>{element}</Template>
)