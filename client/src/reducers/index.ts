import { combineReducers } from "redux";
import { artistReducer } from "./artist";
import { Artist } from "../actions";
import { tracksReducer } from "./tracks";

export interface StoreState {
  artistData: Artist;
  tracksData: any;
}
export const reducers = combineReducers<StoreState>({
  artistData: artistReducer,
  tracksData: tracksReducer,
});
