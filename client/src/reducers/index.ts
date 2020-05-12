import { combineReducers } from "redux";
import { artistReducer } from "./artist";
import { Artist } from "../actions";

export interface StoreState {
  artistData: Artist;
}
export const reducers = combineReducers<StoreState>({
  artistData: artistReducer,
});
