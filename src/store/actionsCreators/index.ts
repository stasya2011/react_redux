import { Dispatch } from "redux";
import { IAddALLUsersAction, USER } from "../../types/types";
import axios from "axios";

const url = "http://localhost:3500/users";

export const addAllUsers =
  () => async (dispatch: Dispatch<IAddALLUsersAction>) => {
    try {
      const response = await axios.get(url);
      dispatch({ type: USER.ADD_ALL, payload: response.data });
    } catch (e) {
      console.log(e);
    }
  };

export const deleteUser = (id: number) => async (dispatch: Dispatch) => {
  try {
    await axios.delete(`${url}/${id}`);
    dispatch({ type: USER.REMOVE, payload: id });
  } catch (e) {
    console.log(e);
  }
};

export const addUser = (content: string) => async (dispatch: Dispatch) => {
  try {
    const newUser = {
      id: Date.now(),
      name: content,
      reports: [],
    };
    await axios.post(url, newUser);
    dispatch({ type: USER.ADD, payload: newUser });
  } catch (e) {
    console.log(e);
  }
};

export const searchUser = (query: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: USER.SEARCH, payload: query });
  } catch (e) {
    console.log(e);
  }
};
