import { IFormValues } from 'components/Form/Form.type';
import { UseFormRegister, FieldValues } from 'react-hook-form';

export type ElementName = 'name' | 'birthday' | 'kind' | 'file' | 'isAgree' | 'switcher';

export interface IPropsInput {
  label?: string;
  name: ElementName;
  type: string;
  noMargin?: boolean;
  inline?: boolean;
  required?: boolean;
  validationSchema: FieldValues;
  register: UseFormRegister<IFormValues>;
  errors: FieldValues | undefined;
}
