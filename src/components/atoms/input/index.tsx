import classnames from 'classnames'
import './style.scss'
import React from "react";

type IInputProps = {
  type: 'text' | 'password' | 'tel',
  name: string,
  value: string,
  className: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onClick?: (event:  React.MouseEvent<HTMLInputElement, MouseEvent>) => void,
  onEnterKeyPress?: (event: React.KeyboardEvent) => void,
  placeholder?: string
}

const Input = (props: IInputProps) => {
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
  );

  const handleOnKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && onEnterKeyPress) {
      onEnterKeyPress(e);
    }
  };

  return (
    <input
      type={ type }
      className={ classProps }
      value={ value }
      placeholder={ placeholder }
      onChange={ onChange }
      onClick={ onClick }
      onFocus={ onFocus }
      onKeyPress={ handleOnKeyPress }
    />
  )
}

export default Input;