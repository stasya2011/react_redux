import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/reducers";
import { bindActionCreators } from "redux";
import * as UserActionCreators from "../store/actionsCreators";

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(UserActionCreators, dispatch);
};
