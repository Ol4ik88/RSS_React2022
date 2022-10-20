import { ICharacter } from 'type/type';

export interface IPropModal {
  card: ICharacter;
  isModalActive: boolean;
  onClose: () => void;
}
