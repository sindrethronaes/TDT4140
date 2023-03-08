import React from "react";
import { Card, Container, Row, Form, Button, Alert } from "react-bootstrap";
import { createHashHistory } from "history";
import { Component } from "react-simplified";

const history = createHashHistory();

export class UserLogIn extends Component {
  email: string = "";
  password: string = "";

  render() {
    return (
      <Card
        style={{
          border: "none",
          padding: "15px",
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {/*Card forms in for log in screen */}
        <Card.Title>Log in</Card.Title>
        <Container
          style={{ width: "20rem", marginLeft: "auto", marginRight: "auto" }}
        >
          <Row>
            <Form.Control
              value={this.email}
              type="text"
              placeholder="Email"
              onChange={(event) => (this.email = event.currentTarget.value)}
              style={{
                textAlign: "center",
                marginBottom: "10px",
              }}
            ></Form.Control>
          </Row>
          <Row>
            <Form.Control
              value={this.password}
              type="password"
              placeholder="Password"
              onChange={(event) => (this.password = event.currentTarget.value)}
              // Makes it possible to log in with enter as well as with button
              onKeyUp={(event) => {
                if (event.key == "Enter") {
                  this.logIn();
                }
              }}
              style={{
                textAlign: "center",
                marginBottom: "10px",
              }}
            ></Form.Control>
          </Row>
        </Container>
        {/*Card for buttons in login screen before user is identified or registered */}
        <Container
          style={{ width: "15rem", marginLeft: "auto", marginRight: "auto" }}
        >
          <Row>
            <Button
              // variant="success"
              onClick={() => this.logIn()}
              style={{
                marginBottom: "10px",
                backgroundColor: "#53aca8",
              }}
            >
              Log in
            </Button>
          </Row>
          <Row>
            <Button
              // variant="outline-success"
              onClick={() => this.createUser()}
              style={{
                marginBottom: "10px",
                backgroundColor: "#53aca8",
              }}
            >
              No user? Create one here
            </Button>
          </Row>
          <Row>
            <Button
              onClick={() => this.clearInput()}
              style={{
                marginBottom: "10px",
                backgroundColor: "#53aca8",
              }}
            >
              Clear input
            </Button>
          </Row>
        </Container>
      </Card>
    );
  }

  logIn() {
    if (this.email.length != 0 && this.password.length != 0) {
      userService
        .logIn(this.email, this.password)
        .then((user) => {
          currentUser = user;
          loggedIn = true;
          Alert.success("Logged in as " + currentUser.email);
          history.push("/recipes/user");
        })
        .catch((error) => Alert.danger(error.response.data));
    } else {
      Alert.danger("Please fill in all the fields");
    }
  }

  clearInput() {
    this.email = "";
    this.password = "";
  }

  createUser() {
    history.push("/profile/register");
  }
}