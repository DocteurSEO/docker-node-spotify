import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchArtist } from "../actions";
import { StoreState } from "../reducers";
import { _AppProps, _AppState } from "./interfaces/App_interface";
import Header from "./Header";
import Info from "./Info";
import { Music } from "./Music";

function _App(props: _AppProps) {
  const [search, setSearch] = useState<_AppState>({
    token: "",
    query: "",
    loading: false,
  });

  const [numAlbum, SetNumAlbum] = useState(0);
  const [nameArtist, setNameArtist] = useState("Sandi Thom");

  useEffect((): void => {
    const token: string = props.location.search.split("access_token=")[1];

    if (token != undefined) {
      setSearch({ ...search, token });
      props.fetchArtist(nameArtist, token);
    }
  }, [nameArtist]);

  const handleChangeNameArtist = (name: string): void => {
    setNameArtist(name);
  };

  const handleChangeAlbum = (): void => {
    if (props.info.data.dataAlbums.length > numAlbum + 1) {
      console.log(props.info.data.dataAlbums.length);
      console.log(" n", numAlbum);
      SetNumAlbum(numAlbum + 1);
    } else {
      SetNumAlbum(0);
    }
  };

  return (
    <div>
      <Header changeName={handleChangeNameArtist} />
      <div className="content">
        {props.info.error && (
          <Info
            image={"https://media.giphy.com/media/dJYoOVAWf2QkU/giphy.gif"}
            name={"no music"}
          />
        )}
        {props.info.data && (
          <Info image={props.info.data.imageURL} name={props.info.data.name} />
        )}
        {props.info.data != undefined && (
          <Music
            change={handleChangeAlbum}
            imageAlbum={props.info.data.dataAlbums[numAlbum].images[1].url}
            release={props.info.data.dataAlbums[numAlbum].release_date}
            title={props.info.data.dataAlbums[numAlbum].name}
            id={props.info.data.dataAlbums[numAlbum].id}
            token={search.token}
          />
        )}
      </div>
      {search.token === "" && (
        <button
          onClick={() => {
            window.location.href = "api/auth";
          }}
        >
          Connect To spotify
        </button>
      )}
    </div>
  );
}
const mapStateToProps = (state: StoreState) => {
  return { info: state.artistData };
};
export const App = connect(mapStateToProps, { fetchArtist })(_App);
