import { ICharacter } from 'type/type';

export interface ICardAPI {
  card: ICharacter;
  onShowModal: (content: ICharacter) => void;
}
