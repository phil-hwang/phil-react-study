import { Form } from "react-bootstrap";

type Props = {
  type: string,
  id: string,
  name: string,
  placeholder: string,
  className: string,
  validationRule: any[]
}

const Input = ({ type, id, name, placeholder, className }: Props) => {

  return (
    <Form.Control
      type={ type }
      id={ id }
      name={ name }
      className={ className }
      placeholder={ placeholder }
    />
  )
};

export default Input;