//import { DispatchArtist } from "../actions";
import { ActionTypes } from "../actions/types";
import { Artist } from "../actions";

export const artistReducer = (state: Artist | {} = {}, action: any) => {
  switch (action.type) {
    case ActionTypes.FETCH_ARTIST:
      return action.payload;

    default:
      return state;
  }
};
