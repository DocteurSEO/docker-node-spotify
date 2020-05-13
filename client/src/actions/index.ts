import { Dispatch } from "redux";
import { ActionTypes } from "./types";

import { fetchData } from "../helpers/fetch-data";

interface imageUrlAlbum {
  url: string;
}

interface Album {
  id: string;
  images: imageUrlAlbum[];
  name: string;
  release_date: string;
}
export interface Artist {
  data: {
    name: string;
    imageURL: string;
    genres: string[];
    followers: number;
    dataAlbums: Album[];
  };
  error?: {};
}
export interface DispatchArtist {
  type: ActionTypes.FETCH_ARTIST | ActionTypes.FETCH_TRACKS;
  payload: Artist;
}

const ARTIST_URL = "http://localhost:8000/api/artist/";
const TRACKS_URL = "http://localhost:8000/api/tracks/";

export const fetchArtist = (search: string, token: string) => {
  return async (dispatch: Dispatch) => {
    const artist = await fetchData(ARTIST_URL + search, token);
    dispatch<DispatchArtist>({
      type: ActionTypes.FETCH_ARTIST,
      payload: artist.data,
    });
  };
};

export const fetchTracks = (search: string, token: string) => {
  return async (dispatch: Dispatch) => {
    const tracks = await fetchData(TRACKS_URL + search, token);
    dispatch<DispatchArtist>({
      type: ActionTypes.FETCH_TRACKS,
      payload: tracks.data,
    });
  };
};
