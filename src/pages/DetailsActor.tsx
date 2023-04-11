import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import { BIG_IMG, PLACEHOLDER_IMG } from '../utils/consts';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import ErrorMessage from '../components/ErrorMessage';

interface DetailsActorPageParams {
  [n: string]: string;
}

export const DetailsActor: FC = () => {
  const { getActor } = useActions();
  const { actor, error, isLoading } = useTypedSelector((state) => state.actor);
  const params = useParams<DetailsActorPageParams>();
  useEffect(() => {
    getActor(`${params.id}`);
  }, []);

  const getPosterImg = () => {
    if (actor) {
      return actor.profile_path ? BIG_IMG + actor.profile_path : PLACEHOLDER_IMG;
    }
  };

  return (
    <div className="container mx-auto p-10">
      {isLoading && <Loader />}
      {error && <ErrorMessage content={error} />}
      {actor && (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 place-content-center">
          <div className="col-span-1 flex justify-center">
            <img
              className="object-fill h-full lg:w-full w-2/3 rounded-lg bg-gray-400 aspect-auto shadow-xl shadow-black"
              src={getPosterImg()}
              alt={actor.name}
            />
          </div>
          <div className="col-span-2 flex flex-col h-full items-center justify-center w-full text-slate-200">
            <h3 className="md:mb-5 mb-4 font-bold lg:text-6xl text-4xl text-center ">
              {actor.name}
            </h3>
            <div className="flex sm:flex-row flex-col justify-around w-full items-center p-4 sm:px-8 font-bold">
              <span>
                Place of birth: <span className="font-normal">{actor.place_of_birth}</span>
              </span>
              <span>
                Day of birth: <span className="font-normal">{actor.birthday}</span>
              </span>
            </div>
            <p className="mb-3 rounded-lg ">{actor.biography}</p>
          </div>
        </div>
      )}
    </div>
  );
};
