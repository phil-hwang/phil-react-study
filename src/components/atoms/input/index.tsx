import classnames from 'classnames'
import './style.scss'
import {ChangeEvent} from "react";

type Props = {
  type: 'text' | 'password',
  value: string,
  className: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
  onFocus: (event: ChangeEvent<HTMLInputElement>) => void,
  onClick: (event: MouseEvent<HTMLInputElement, MouseEvent>) => void,
  onEnterKeyPress: (event: ChangeEvent<HTMLInputElement>) => void,
  placeholder: string
}

const Input = (props: Props) => {
  const {
    type,
    value,
    className,
    onChange,
    onFocus,
    onClick,
    onEnterKeyPress,
    placeholder
  } = props;

  const classProps: string = classnames(
    `input-${type}`,
    className
  )

  return (
    <input
      type={ type }
      className={ classProps }
      value={ value }
      placeholder={ placeholder }
      onChange={ onChange }
      onClick={ onClick }
    />
  )
}

export default Input;