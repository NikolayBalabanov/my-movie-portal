import React from 'react';
import { PLACEHOLDER_IMG, SMALL_IMG } from '../../utils/consts';

interface IMovieActorProps {
  name: string;
  imgPath: string | null;
}

export default function MovieActor({ imgPath, name }: IMovieActorProps) {
  const actorImg = imgPath ? SMALL_IMG + imgPath : PLACEHOLDER_IMG;

  return (
    <div className="flex flex-col gap-2">
      <img src={actorImg} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}
