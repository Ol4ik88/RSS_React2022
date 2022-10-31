import { ICharacter } from 'type/type';

export interface ICharactersList {
  cards: ICharacter[];
  onShowModal?: (content: ICharacter) => void;
}
