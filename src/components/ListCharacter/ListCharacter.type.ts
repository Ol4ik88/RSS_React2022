import { ICharacter } from 'type/type';

export interface IListCharacter {
  cards: ICharacter[];
  onShowModal: (content: ICharacter) => void;
}
