import React, { useState, Fragment } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";
import { connect } from "react-redux";
import { login } from "../../actions/auth";

import { Link, Redirect } from "react-router-dom";
const LoginForm = ({ login, isAuthenticated }) => {
  const [formData, setFormDate] = useState({
    email: "",
    password: ""
  });
  const { email, password } = formData;
  const onChange = e =>
    setFormDate({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };
  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <div className="banner-login"></div>
      <Grid
        textAlign="center"
        style={{ height: "70vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="yellow" textAlign="center">
            Log-in to your account
          </Header>
          <Form onSubmit={e => onSubmit(e)} size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                required
                name="email"
                value={email}
                onChange={e => onChange(e)}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                required
                name="password"
                value={password}
                onChange={e => onChange(e)}
              />

              <Button color="yellow" fluid size="large">
                Đăng Nhập
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us?{" "}
            <Link to="/register" href="#">
              Sign Up
            </Link>
          </Message>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(LoginForm);
