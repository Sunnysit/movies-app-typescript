export interface MovieItem {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
}

export interface MovieItemList extends Array<MovieItem> {}

export interface MovieItemListProps {
  data: MovieItemList;
}

export interface MovieItemProps {
  movie: MovieItem;
  key: number;
}
