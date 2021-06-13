import React, { useState } from 'react'
import { Jumbotron } from 'react-bootstrap'
import { LoginForm } from '../components/LoginForm.comp'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { onLogin } from './login.api'

export const ResetPassword = () => {
  const [{ username, password }, setCredentials] = useState({
    username: '',
    password: ''
  })
  const login = async (event: React.FormEvent) => {
    event.preventDefault()
    console.log('dsafasdf')
    const response = await onLogin({
      username,
      password
    })
  }
  return (
    <Container>
      <Row>
        <Col>
          <h1>New Password</h1>
          <hr />
          <Form onSubmit={login}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="email"
                placeholder="Password"
                value={username}
                onChange={(event) =>
                  setCredentials({
                    username: event.target.value,
                    password
                  })
                }
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Re-enter New Password</Form.Label>
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

            <Button variant="primary" type="submit">
              Reset
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
