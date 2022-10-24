import { IFormValues } from 'components/Form/Form.type';
import { ElementName } from 'components/FormInput/FormInput.type';
import { UseFormRegister } from 'react-hook-form';

export interface IFormSelect {
  label: string;
  name: ElementName;
  values: string[];
  register: UseFormRegister<IFormValues>;
}
