import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const LoginForm = ({ setCredentials, username, password }: any) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>First Time Sign in</h1>
          <hr />
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={username}
                onChange={(event) =>
                  setCredentials({
                    username: event.target.value,
                    password
                  })
                }
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) =>
                  setCredentials({
                    username,
                    password: event.target.value
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginForm
