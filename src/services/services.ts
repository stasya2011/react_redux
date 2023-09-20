import { IUser } from "../types/types";

export const getAllUsers = async (callback: { (data: IUser[]): void }) => {
  const response = await fetch("http://localhost:3500/users");
  const data: IUser[] = await response.json();

  callback(data);
};

export const addUser = async () => {
  const user = "Add";
  console.log(user);
};
