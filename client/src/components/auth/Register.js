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
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";

import { Link, Redirect } from "react-router-dom";
const RegisterForm = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormDate] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });
  const { name, email, password, password2 } = formData;
  const onChange = e =>
    setFormDate({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Mật Khẩu không trùng khớp", "warning");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/login" />;
  }
  return (
    <Fragment>
      <div className="banner-register"></div>
      <Grid
        textAlign="center"
        style={{ height: "70vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            Đăng Ký
          </Header>
          <Form onSubmit={e => onSubmit(e)} size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Name"
                name="name"
                value={name}
                onChange={e => onChange(e)}
              />
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
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
                name="password"
                value={password}
                onChange={e => onChange(e)}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Confirm Password"
                type="password"
                name="password2"
                value={password2}
                onChange={e => onChange(e)}
              />

              <Button
                type="submit"
                value="Register"
                color="teal"
                fluid
                size="large"
              >
                Đăng Ký
              </Button>
            </Segment>
          </Form>
          <Message>
            Đã có tài khoản ? <Link to="/login">Đăng Nhập</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(RegisterForm);
