// import { useDispatch } from "react-redux";
// import { AppDispatch, RootState } from "../store/store";
// import { TypedUseSelectorHook } from "react-redux";
// import { useSelector } from "react-redux";

// export const useAppDispatch = () => useDispatch<AppDispatch>;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/reducers";
import { bindActionCreators } from "redux";
import * as UserActionCreators from "../store/actionsCreators";

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(UserActionCreators, dispatch);
};
