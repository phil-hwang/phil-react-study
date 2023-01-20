import React, {SyntheticEvent, useEffect, useState} from "react";
import Validation, {IErrorBack} from "../utils/validation";

type useFormProps = {
  initialValues: any,
  onSubmit: Function,
  onValidFailed?: (errors: IErrorBack[]) => void,
  validation?: Validation
};

type handleEventType = {
  target: {
    name: string,
    value: any,
  }
}

function useForm({ initialValues, onSubmit, validation, onValidFailed }: useFormProps) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<IErrorBack[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | handleEventType) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    setIsLoading(true);
    event.preventDefault();
    if(!!validation) {
      setErrors(validation.validate(values));
    }
  };

  useEffect(() => {
    (async () => {
      if (isLoading) {
        if (errors.length === 0) {
          await onSubmit(values);
        }else {
          if(onValidFailed) onValidFailed(errors);
        }
        setIsLoading(false);
      }
    })();
  }, [errors, isLoading]);


  const getErrorMessage = (key: string): string => {
    const errorBack = errors as IErrorBack[];
    if(!Array.isArray(errorBack)) return '';

    const findError = errorBack.find(error => error.key === key);

    if(findError) {
      return findError.message;
    }else {
      return '';
    }

  }

  return {
    values,
    errors,
    getErrorMessage,
    isLoading,
    handleChange,
    handleSubmit,
    setValues
  };
}

export default useForm;