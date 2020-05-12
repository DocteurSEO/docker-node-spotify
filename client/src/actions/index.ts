import { Dispatch } from "redux";
import { ActionTypes } from "./types";

import { fetchData } from "../helpers/fetch-data";

export interface Artist {
  dataArtist: {
    name: string;
    imageURL: string;
    genres: string[];
    followers: number;
    dataAlbums: Object[];
  };
}
export interface DispatchArtist {
  type: ActionTypes.FETCH_ARTIST;
  payload: Artist;
}

const ARTIST_URL = "http://localhost:8000/api/artist/";

export const fetchArtist = (search: string, token: string) => {
  return async (dispatch: Dispatch) => {
    const artist = await fetchData(ARTIST_URL + search, token);
    dispatch<DispatchArtist>({
      type: ActionTypes.FETCH_ARTIST,
      payload: artist.data,
    });
  };
};
