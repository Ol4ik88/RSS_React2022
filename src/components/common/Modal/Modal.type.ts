import { ICharacter } from 'type/type';

export interface IPropModal {
  card: ICharacter;
  activeModal: boolean;
  setActive: (active: boolean) => void;
}
