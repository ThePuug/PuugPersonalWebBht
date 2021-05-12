import * as React from "react"
import { Link, graphql } from "gatsby"

const Page = ({ data: { allMdx: { nodes: links } } }) => {
  return <main>
    <ul>
      {links.map(link => (
        <Link to={link.slug} key={link.slug}>
          <li>
            <span>
              {link.frontmatter.title}
              <p>{link.frontmatter.description}</p>
            </span>
          </li>
        </Link>
      ))}
    </ul>
  </main>
}

export const pageQuery = graphql`query {
  allMdx {
    nodes {
      slug
      frontmatter {
        description
        title
      }
    }
  }
}`

export default Page
