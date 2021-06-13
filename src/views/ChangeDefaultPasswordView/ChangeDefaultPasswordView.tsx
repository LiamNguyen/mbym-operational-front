import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import queryString from 'query-string'

import { onLogin } from '../login.api'
import { isValidGuid } from '../../helpers/TypeHelpers'
import UnauthorizedPanel from '../../components/UnauthorizedPanel'

const ChangeDefaultPasswordView = (props: any) => {
  const [{ username, password }, setCredentials] = useState({
    username: '',
    password: ''
  })
  const [isAuthorized, setIsAuthorized] = useState(false)

  useEffect(() => {
    const { token } = queryString.parse(props.location.search)

    setIsAuthorized(isValidGuid(token as string))
  }, [props.location.search])

  const login = async (event: React.FormEvent) => {
    event.preventDefault()

    await onLogin({
      username,
      password
    })
  }

  return !isAuthorized ? (
    <UnauthorizedPanel />
  ) : (
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

export default ChangeDefaultPasswordView
