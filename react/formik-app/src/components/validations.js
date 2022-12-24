import { object, string, number, date, InferType, ref } from 'yup';

const validations = object({
  email: string().email('Geçerli bir email girin!').required('Zorunlu alan.'),
  password: string().min(5).required(),
  passwordConfirm: string().oneOf([ref("password")]).required(),
});

export default validations;