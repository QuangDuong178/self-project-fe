import { RepositoryMessage } from './repository-message';

export interface RepositoriesInterface {
  message: typeof RepositoryMessage;
}

const repositories: RepositoriesInterface = {
  message: RepositoryMessage,
};

export const RepositoryFactory = {
  create: (key: keyof RepositoriesInterface) => repositories[key],
};

export type RepositoriesType = <K extends keyof RepositoriesInterface>(key: K) => ReturnType<RepositoriesInterface[K]>;
