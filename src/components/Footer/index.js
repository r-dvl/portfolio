import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">
            <h1 className="title">R-dVL</h1>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink to="/home" tag={Link}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/home" tag={Link}>
                  Landing
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/home" tag={Link}>
                  Register
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/home" tag={Link}>
                  Profile
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink href="https://r-dvl.site">
                  Contact Me
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://r-dvl.site">
                  About Me
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://r-dvl.site">
                  Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://opensource.org/licenses/MIT">
                  License
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <h3 className="title">Follow me:</h3>
            <div className="btn-wrapper profile">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://github.com/r-dvl"
                id="tooltip622135962"
                target="_blank"
              >
                <i className="fab fa-github" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip622135962">
                Follow me on Github
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://www.linkedin.com/in/r-dvl"
                id="tooltip230450801"
                target="_blank"
              >
                <i className="fab fa-linkedin" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip230450801">
                Folle me on LinkedIn
              </UncontrolledTooltip>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
