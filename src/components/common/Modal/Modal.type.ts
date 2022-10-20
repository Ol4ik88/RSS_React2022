import { ICharacter } from 'type/type';

export interface IPropModal {
  card: ICharacter;
  isModalActive: boolean;
  setActive: (active: boolean) => void;
}
