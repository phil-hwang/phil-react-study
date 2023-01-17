export interface IValidationField {
    key: string;
    rule: (a: string) => boolean;
    errorMessage: string;
}

export interface IErrorBack {
    key: string,
    message: string
}

class FileValidation {
    constructor() {

    }
}

export default FileValidation;