import {SAVE_ID} from "../types/types";

// eslint-disable-next-line
export default function (state, action) {
  const { payload, type } = action;

  switch (type) {
    case SAVE_ID:
      return {
        ...state,
        iduser: payload,
      };
    default:
      return state;
  }
}
