import { useReducer } from "react";
import Reducer from "../reducer/reducer";
import  UseContextGobal from "../useContext/useContextGobal";

const GobalState = (props) => {
  const initialState = {
    iduser: 1,
  };

  
  const [state, dispatch] = useReducer(Reducer, initialState);

  const saveIduser = (id) => {
    dispatch({
      type: 'SAVE_ID',
      payload: id
    });
  };

  return (
    <UseContextGobal.Provider
      value={{
        iduser: state.iduser,
        saveIduser,
      }}
    >
      {props.children}
    </UseContextGobal.Provider>
  );
};

export default GobalState;
