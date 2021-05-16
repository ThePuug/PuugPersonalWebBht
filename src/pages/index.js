import * as React from "react"
import { graphql, Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Card, Grid } from "semantic-ui-react"

const Page = ({ data: { writings: { nodes: writings }, about } }) => {
  return <main>
    <Grid stackable columns={3}>
      <Grid.Column></Grid.Column>
      <Grid.Column>
        <Link to={about.slug}>
          <GatsbyImage image={getImage(about.frontmatter.image)} alt={about.frontmatter.title}/>
        </Link>
      </Grid.Column>
      <Grid.Column></Grid.Column>
    </Grid>
    <Grid stackable columns={3}>
      {writings.map((e) => <Grid.Column key={"writings-" + e.slug}>
        <Card
          href={e.slug}
          fluid
          image={<GatsbyImage image={getImage(e.frontmatter.image)} alt={e.slug} ui="false" wrapped="false" />}
          header={e.frontmatter.title}
          description={e.frontmatter.description}
          extra={e.frontmatter.date}
          />
          </Grid.Column>
      )}
    </Grid>
  </main>
}

export const pageQuery = graphql`query {
  writings: allMdx(filter: {slug: {regex: "/^writings\//"}}) {
    nodes {
      slug
      frontmatter {
        description
        title
        image {
          childImageSharp {
            gatsbyImageData(aspectRatio: 1.33)
          }
        }
        date
      }
    }
  },
  about: mdx(slug: {eq: "about"}) {
    frontmatter {
      title
      image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    slug
  }
}`

export default Page
