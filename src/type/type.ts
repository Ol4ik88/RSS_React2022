export interface ICard {
  id?: number;
  title?: string;
  img: string | null;
  description?: string;
  name?: string;
  birthday?: string;
  kind?: string;
  sex?: string;
  isAgree?: boolean;
}

export interface IStateCards {
  cards: ICard[];
}

export interface ICharacter {
  _id: string;
  height: string;
  race: string;
  gender: string;
  birth: string;
  spouse: string;
  death: string;
  realm: string;
  hair: string;
  name: string;
  wikiUrl: string;
}

export interface IStateCardsAPI {
  cards: ICharacter[];
  isLoaded: boolean;
  showCard: ICharacter;
  activeModal: boolean;
}

export type PropsComponent = Record<string, unknown>;
