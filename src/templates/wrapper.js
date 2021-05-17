import React, { createRef } from "react"
import { Container, Dropdown, Icon, Menu, Ref, Segment, Sticky } from "semantic-ui-react"

const Template = (props) => {
  const sticky = createRef()
  return <Ref innerRef={sticky}>
    <Container>
      <Sticky context={sticky}>
        <Menu>
          <Dropdown icon={<Icon fitted name='ellipsis vertical' />} basic simple item>
            <Dropdown.Menu>
              <Dropdown.Item href="/">
                <Icon name="home" /><span>Home</span>
              </Dropdown.Item>
              <Dropdown.Item href="about">
                <Icon name="user circle" /><span>About me</span>
              </Dropdown.Item>
              <Dropdown.Item href="writings">
                <Icon name="pen square" /><span>Writings</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item position="right" header href="/">Baroque Horse Training</Menu.Item>
        </Menu>
      </Sticky>
      <Segment padded="very" style={{ border: "none", boxShadow: "none" }}>
        {props.children}
      </Segment>
    </Container>
  </Ref>
}

export default Template
