export interface IUserState {
  users: IUser[];
}

export interface IUser {
  id: number;
  name: string;
  reports: IReportsAndId[];
}

export interface IReportsAndId {
  id: number;
  reports: IReport[];
}

export interface IReport {
  id: number;
  name: string;
}

export enum USER {
  ADD = "ADD",
  REMOVE = "REMOVE",
  ADD_ALL = "ADD_ALL",
  SEARCH = "SEARCH",
}

export interface IAddALLUsersAction {
  type: USER.ADD_ALL;
  payload: IUser[];
}

export interface IAddUserAction {
  type: USER.ADD;
  payload: IUser;
}

export interface IRemoveUserAction {
  type: USER.REMOVE;
  payload: number;
}
export interface ISearchUserAction {
  type: USER.SEARCH;
  payload: string;
}
export type IAction =
  | IAddALLUsersAction
  | IAddUserAction
  | IRemoveUserAction
  | ISearchUserAction;

export interface IListItem {
  id: number;
  content: string;
}
