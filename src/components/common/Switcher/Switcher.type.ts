import { IFormValues } from 'components/Form/Form.type';
import { ElementName } from 'components/FormInput/FormInput.type';
import { UseFormRegister } from 'react-hook-form';

export interface ISwitcer {
  name: ElementName;
  title: string;
  register: UseFormRegister<IFormValues>;
}
