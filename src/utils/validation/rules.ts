export const required = (value: any): boolean => !!value;
export const min = (min: number) => (value: string): boolean => !!value && value.length >= min;
export const max = (max: number) => (value: string): boolean => !!value && value.length <= max;
export const phone = (value: any): boolean => /^\d{3}-\d{3,4}-\d{4}$/.test(value);
export const email = (value: any): boolean => /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(value);
export const password = (value: any): boolean => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,14}$/i.test(value);