export interface IValidationField {
  key: string;
  rule: (a: string) => boolean;
  errorMessage: string;
}

export interface IErrorBack {
  key: string,
  message: string
}

class Validation {
  validationList: IValidationField[] = [];
  errorBack: IErrorBack[];

  constructor(validationList: IValidationField[]) {
    this.validationList = validationList;
    this.errorBack = [];
  }

  validate(values: any): IErrorBack[] {
    this.clearErrorBack();
    this.validationList.forEach( validation => {
      const value = values[validation.key];
      if(!validation.rule(value)) {
        this.errorBack.push({
          key: validation.key,
          message: validation.errorMessage
        });
      }
    });

    return this.errorBack;
  }

  clearErrorBack() {
    this.errorBack.splice(0, this.errorBack.length);
  }
}


export default Validation;