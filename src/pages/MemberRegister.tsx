import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import useForm from "../hooks/useForm";
import Validation from "../utils/validation";
import {email, min, required} from "../utils/validation/rules";

const MemberRegister = () => {
  const validation = new Validation([
    {
      key: "name",
      rule: required,
      errorMessage: '이름을 입력해주세요.'
    },
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
    },
    {
      key: "confirmPassword",
      rule: required,
      errorMessage: '패스워드를 입력해주세요.'
    },
    {
      key: "confirmPassword",
      rule: min(5),
      errorMessage: '패스워드는 최소 5 글자 입니다.'
    }
  ]);

  const { values, handleChange, handleSubmit, errors, getErrorMessage, isLoading } = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    onSubmit: () => {},
    validation: validation
  });

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    회원가입
                  </h2>
                  <div className="mb-3">
                    <Form onSubmit={ handleSubmit }>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Name"
                          value={ values.name }
                          onChange={ handleChange }
                          isInvalid={ getErrorMessage('name').length > 0 }
                        />
                        <Form.Control.Feedback type="invalid"  className={"float-left"}>{ getErrorMessage('name') }</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
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
                          value={ values.password }
                          onChange={ handleChange }
                          isInvalid={ getErrorMessage('password').length > 0 }
                        />
                        <Form.Control.Feedback type="invalid"  className={"float-left"}>{ getErrorMessage('password') }</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={ values.confirmPassword }
                          onChange={ handleChange }
                          isInvalid={ getErrorMessage('confirmPassword').length > 0 }
                        />
                        <Form.Control.Feedback type="invalid"  className={"float-left"}>{ getErrorMessage('confirmPassword') }</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group  className="mb-3" controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account??{' '}
                        <a href="{''}" className="text-primary fw-bold">
                          Sign In
                        </a>
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

export default MemberRegister;