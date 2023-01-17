import React, { useEffect, useState } from "react";
import Validation, {IErrorBack} from "../utils/validation";

type useFormProps = {
  initialValues: any,
  onSubmit: Function,
  validation: Validation | null
};

function useForm({ initialValues, onSubmit, validation }: useFormProps) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    setIsLoading(true);
    event.preventDefault();
    if(!!validation) {
      setErrors(validation.validate(values));
    }
  };

  useEffect(() => {
    (async () => {
      if (isLoading) {
        if (Object.keys(errors).length === 0) {
          await onSubmit(values);
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
  };
}

export default useForm;