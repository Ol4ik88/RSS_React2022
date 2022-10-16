import { ICharacter } from 'type/type';

export interface ICardCharacter {
  card: ICharacter;
  onShowModal: (content: ICharacter) => void;
}
