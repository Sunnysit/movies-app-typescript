import { RadioChangeEvent } from "antd/lib/radio/interface";

export type MovieItem = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
};

export type MovieItemList = Array<MovieItem>;

export type MovieItemListProps = {
  data: MovieItemList;
};

export type MovieItemProps = {
  movie: MovieItem;
  key: number;
};

export interface CategoryRadioProps {
  handleCategoryChange: (e: RadioChangeEvent) => void;
}

export type SearchFromProps = {
  handleQuerySubmit: (value: string) => void;
};
