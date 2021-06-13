import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import { LoginForm } from "../components/LoginForm.comp";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { onLogin } from "./login.api";
import { useHistory } from "react-router";

export const Login = () => {
  const [{ username, password }, setCredentials] = useState({
    username: "",//Change soon
    password: "",
  });
  const history = useHistory();
  const handleOnSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Fill up all the form");
    }
    // dispatch(loginPending());
    //TODO call api to submit the form
    try {
      const isAuth = await onLogin({ username, password });
      console.log(isAuth);
      // if (isAuth === false) {
      //   // return dispatch(loginFail(isAuth.status));
      // }
     
      history.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Row>
        <Col>
          <h1>First Time Sign in</h1>
          <hr />
          <Form onSubmit={handleOnSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={username} //Change
                onChange={(event) =>
                  setCredentials({
                    username: event.target.value,
                    password,
                  })
                }
              />
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
                    password: event.target.value,
                  })
                }
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Reset Your Password
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
