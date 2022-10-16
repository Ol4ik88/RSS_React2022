import { ICharacter } from 'type/type';

export interface ICardListAPI {
  cards: ICharacter[];
  onShowModal: (content: ICharacter) => void;
}
