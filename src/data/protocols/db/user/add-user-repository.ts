import { AddUserRepositoryNamespace } from '@/data/namespace/db/user/add-user-repository.namespace';

export interface AddUserRepository {
  add: (
    data: AddUserRepositoryNamespace.Params,
  ) => Promise<AddUserRepositoryNamespace.Result>;
}
