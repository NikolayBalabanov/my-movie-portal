import React from 'react';
import { Link } from 'react-router-dom';
import { IActor } from '../models/actor';

interface IActorCard {
  actor: IActor;
}

export default function ActorCard({ actor }: IActorCard) {
  const actorsImg = `https://image.tmdb.org/t/p/original${
    actor.profile_path ? actor.profile_path : '/aEsAdMAhwKYFgnHHxMOknktQYKK.jpg'
  }`;
  return (
    <Link
      to={`/actor/${actor.id}`}
      className="relative overflow-hidden h-full flex flex-col justify-between p-2 gap-2 group bg-slate-800 shadow-md rounded-lg"
    >
      <div className="overflow-hidden">
        <img
          className="object-cover h-full w-full hover:scale-105 transition-transform duration-500"
          src={actorsImg}
          alt={actor.name}
        />
      </div>
      <h3 className="absolute bottom-0 left-0 p-4 rounded-lg text-center text-gray-200 font-black text-base bg-slate-800">
        {actor.name}
      </h3>
    </Link>
  );
}
