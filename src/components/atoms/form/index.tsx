import './style.scss'
import React from "react";


type IFormProps = {
  name: string,
  formData: any | {},
  items: Array<any>,
  colCount: number | 1,
  disabled?: boolean | false,
  hint: string,
};

type IItemProps = {
  name: string,
  dataField: string,
  colSpan: number,
  disabled?: boolean | false,
};


type IGroupItemProps = {
  caption: string,
  colCount: number | 1,
  className: string,
  items: Array<any>,
};


const Form = (props: IFormProps) => {
  return (
    <div role="form">

    </div>
  )
};

export const Item = (props: IItemProps) => {
  return (
    <>
    </>
  )
};

export const GroupItem = (props: IGroupItemProps) => {
  return (
    <div>
    </div>
  )
};


export default Form;