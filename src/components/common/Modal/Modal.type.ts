import { ICharacter } from 'type/type';

export interface IPropModal {
  card: ICharacter;
  activeModal: boolean;
  onClose: () => void;
}
