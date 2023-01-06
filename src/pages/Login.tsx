import { Link } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import useForm from "../hooks/useForm";
import Validation from "../utils/validation"
import {email, min, required} from "../utils/validation/rules"

const Login = () => {
  const validation = new Validation([
    {
      key: "email",
      rule: required,
      errorMessage: '이메일을 입력해주세요.'
    },
    {
      key: "email",
      rule: email,
      errorMessage: '이메일 형식이 아닙니다.'
    },
    {
      key: "password",
      rule: required,
      errorMessage: '패스워드를 입력해주세요.'
    },
    {
      key: "password",
      rule: min(5),
      errorMessage: '패스워드는 최소 5 글자 입니다.'
    }
  ]);

  const { values, handleChange, handleSubmit, errors, getErrorMessage, isLoading } = useForm({
    initialValues: {email: "", password: ""},
    onSubmit: () => {},
    validation: validation
  });

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Brand</h2>
                  <p className=" mb-5">Please enter your login and password!</p>
                  <div className="mb-3">
                    <Form onSubmit={ event => handleSubmit(event) }>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          name="email"
                          value={ values.email }
                          onChange={ handleChange }
                          isInvalid={ getErrorMessage('email').length > 0 }
                        />
                        <Form.Control.Feedback type="invalid"  className={"float-left"}>{ getErrorMessage('email') }</Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          name="password"
                          value={ values.password }
                          onChange={ handleChange }
                          isInvalid={ getErrorMessage('password').length > 0 }
                        />
                        <Form.Control.Feedback type="invalid"  className={"float-left"}>{ getErrorMessage('password') }</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <p className="small">
                          <a className="text-primary" href="#!">
                            Forgot password?
                          </a>
                        </p>
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <Link className="text-primary fw-bold" to="">
                          Sign Up
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login;
