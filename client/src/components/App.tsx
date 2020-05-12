import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Artist, fetchArtist } from "../actions";
import { StoreState } from "../reducers";

interface search {
  token: string;
  query: string;
  loading: boolean;
  info?: Artist;
}

function _App(props: any) {
  const [search, setSearch] = useState<search>({
    token: "",
    query: "",
    loading: false,
  });

  useEffect((): void => {
    const token: string = props.location.search.split("access_token=")[1];

    if (token != undefined) {
      setSearch({ ...search, token });
      props.fetchArtist("jule", token);
    }
  }, []);

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
