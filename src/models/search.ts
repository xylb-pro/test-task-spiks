export interface ISearch<T> {
  search: {
    nodes: Array<T>;
    pageInfo: IPageInfo;
  };
}

export interface IPageInfo {
  endCursor: string;
  startCursor: string;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
