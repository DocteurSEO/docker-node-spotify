import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchTracks } from "../actions";
import { StoreState } from "../reducers";

import Tracks from "./Tracks";

interface MusicProps {
  imageAlbum: string;
  release: string;
  title: string;
  id: string;
  token: string;
  musicInfo: any;
  change(): any;
  fetchTracks(query: string, tokenauth: string): any;
}
let prevURl = "";
const audioElement = new Audio();
const _Music = (props: MusicProps) => {
  useEffect((): void => {
    props.fetchTracks(props.id, props.token);
  });

  function play(url: string) {
    if (!audioElement.paused && prevURl === url) {
      audioElement.pause();
    } else {
      audioElement.src = url;
      prevURl = url;
      audioElement.play();
    }
  }
  return (
    <div>
      <div className="artist__content">
        <div className="tab-content">
          <div role="tabpanel" className="tab-pane active" id="artist-overview">
            <div className="overview">
              <div className="overview__albums">
                <div className="overview__albums__head">
                  <span className="div-title">Albums</span>
                </div>
                <div className="album">
                  <div className="album__info">
                    <div className="album__info__art">
                      <img src={props.imageAlbum} alt="refacto later" />
                    </div>
                    <div className="album__info__meta">
                      <div className="album__year">{props.release}</div>
                      <div className="album__name">{props.title}</div>
                      <div className="album__actions">
                        <button
                          className="button-light save"
                          onClick={() => {
                            props.change();
                          }}
                        >
                          Next Album
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="album__tracks">
                    {props.musicInfo.data &&
                      props.musicInfo.data.items.map(
                        (title: any, i: number) => {
                          return (
                            <Tracks
                              player={play}
                              preview={title.preview_url}
                              name={title.name}
                              trackNumber={title.track_number}
                              key={i}
                              ms={title.duration_ms}
                            />
                          );
                        }
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state: StoreState) => {
  return { musicInfo: state.tracksData };
};
export const Music = connect(mapStateToProps, { fetchTracks })(_Music);
