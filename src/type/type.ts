interface ICard {
  id: number;
  title: string;
  img: string;
  description: string;
}
export interface ICardItem {
  card: ICard;
}

export interface ICards {
  cards: ICard[];
}

export type PropsComponent = Record<string, unknown>;

export interface IFilterSearch {
  filter: (text: string) => void;
}
