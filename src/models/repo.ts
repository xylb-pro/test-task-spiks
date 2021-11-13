interface IRepoLang {
  name: string;
}
interface IRepoOwner {
  avatarUrl: string;
  login: string;
  url: string;
}

export interface IRepoModel {
  name: string;
  url: string;
  description: string;
  primaryLanguage: IRepoLang | null;
  forkCount: number;
  nameWithOwner: string;
  stargazerCount: number;
  owner: IRepoOwner;
  id: string;
}

export interface IRequestRepoVariables {
  repoName: string;
  cursor?: string;
}

export type TRepos = Array<IRepoModel>;
