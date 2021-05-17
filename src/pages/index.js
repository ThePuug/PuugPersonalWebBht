import * as React from "react"
import { graphql } from "gatsby"
import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { Button, Card } from "semantic-ui-react"

const Page = ({ data: { writings: { nodes: writings }, about } }) => {
  return <>
    <Card.Group stackable itemsPerRow={3}>
      <Card fluid link>&nbsp;</Card>
      <Card
        fluid link
        href={about.slug}
      >
        <GatsbyImage image={getImage(about.frontmatter.image)} alt={about.frontmatter.title} />
        <Card.Content textAlign="center">
          <Card.Header>{about.frontmatter.title}</Card.Header>
        </Card.Content>

      </Card>
      <Card
        fluid link
        href="https://www.facebook.com/lani.debaets"
      >
        <StaticImage src="../images/facebook.jpg" alt="facebook" />
        <Card.Content textAlign="center">
          <Card.Header>Connect with me on Facebook</Card.Header>
        </Card.Content>
      </Card>
    </Card.Group>
    <Card.Group stackable itemsPerRow={3}>
      {writings.map((e) => (
        <Card
          fluid link raised
          key={"writings-" + e.slug}
          href={e.slug}
          image={<GatsbyImage image={getImage(e.frontmatter.image)} alt={e.slug} ui="false" wrapped="false" />}
          header={e.frontmatter.title}
          description={e.frontmatter.description}
          extra={e.frontmatter.date}
        />
      ))}
      <Button fluid href="writings">More...</Button>
    </Card.Group>
  </>
}

export const pageQuery = graphql`query {
  writings: allMdx(filter: {slug: {regex: "/^writings\//"}}, limit: 3) {
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
          gatsbyImageData(aspectRatio: 1)
        }
      }
    }
    slug
  }
}`

export default Page
