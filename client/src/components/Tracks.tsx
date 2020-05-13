import React, { memo } from "react";

import { fail } from "../helpers/fail";
function Tracks(props: any) {
  const ms = props.ms;
  const s = Math.floor(ms / 1000) % 60;
  const m = Math.floor(ms / 60000) % 60;

  return (
    <div
      className="tracks"
      onClick={(e) => {
        props.player(props.preview ? props.preview : fail);
      }}
    >
      <div className="track">
        <div className="track__number">{props.trackNumber}</div>

        <div className="track__title">{props.name}</div>

        <div className="track__length">{m + ":" + s}</div>
      </div>
    </div>
  );
}

export default memo(Tracks);
