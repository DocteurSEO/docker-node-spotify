//import { DispatchArtist } from "../actions";
import { ActionTypes } from "../actions/types";

export const tracksReducer = (state = {}, action: any) => {
  switch (action.type) {
    case ActionTypes.FETCH_TRACKS:
      return action.payload;

    default:
      return state;
  }
};
