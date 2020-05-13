import React from "react";
interface InfoProps {
  image: string;
  name: string;
}

const Info = (props: InfoProps) => {
  const { name, image } = props;
  return (
    <div className="warpper">
      <div className="artist__header">
        <div className="artist__info">
          <div className="profile__img">
            <img src={image} alt="G-Eazy" />
          </div>
          <div className="artist__info__meta">
            <div className="artist__info__type">{name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
