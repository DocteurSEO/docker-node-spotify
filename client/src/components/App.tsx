import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Artist, fetchArtist } from "../actions";
import { StoreState } from "../reducers";

interface search {
  token: string;
  query: string;
  loading: boolean;
}
interface _AppProps {
  info: Artist;
  fetchArtist(query: string, token: string): any;
  location: any;
}
function _App(props: _AppProps) {
  const [search, setSearch] = useState<search>({
    token: "",
    query: "",
    loading: false,
  });

  useEffect((): void => {
    const token: string = props.location.search.split("access_token=")[1];

    if (token != undefined) {
      setSearch({ ...search, token });
      props.fetchArtist("Sandi Thom", token);
    }
  }, []);
  if (props.info.dataArtist != undefined) {
    console.log(props.info.dataArtist.name);
  }
  return (
    <div>
      Accueil
      <input />
      <button
        onClick={() => {
          window.location.href = "/api/auth";
        }}
      >
        GO token GO
      </button>
    </div>
  );
}
const mapStateToProps = (state: StoreState) => {
  return { info: state.artistData };
};
export const App = connect(mapStateToProps, { fetchArtist })(_App);
