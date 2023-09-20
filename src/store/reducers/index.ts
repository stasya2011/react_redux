import { combineReducers } from "redux";
import { userReducer } from "./usersReducer";

export const rootReducer = combineReducers({ userReducer });

export type RootState = ReturnType<typeof rootReducer>;
