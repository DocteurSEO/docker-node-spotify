import { Artist } from "../../actions";

export interface _AppState {
  token: string;
  query: string;
  loading: boolean;
}
export interface _AppProps {
  info: Artist;
  fetchArtist(query: string, token: string): any;
  location: any;
}
