import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import { BIG_IMG, PLACEHOLDER_IMG } from '../utils/consts';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import ErrorMessage from '../components/ErrorMessage';
export const DetailsActor = () => {
    const { getActor } = useActions();
    const { actor, error, isLoading } = useTypedSelector((state) => state.actor);
    const params = useParams();
    useEffect(() => {
        getActor(`${params.id}`);
    }, []);
    const getPosterImg = () => {
        if (actor) {
            return actor.profile_path ? BIG_IMG + actor.profile_path : PLACEHOLDER_IMG;
        }
    };
    return (React.createElement("div", { className: "container mx-auto p-10" },
        isLoading && React.createElement(Loader, null),
        error && React.createElement(ErrorMessage, { content: error }),
        actor && (React.createElement("div", { className: "grid lg:grid-cols-3 grid-cols-1 gap-4 place-content-center" },
            React.createElement("div", { className: "col-span-1 flex justify-center" },
                React.createElement("img", { className: "object-fill h-full lg:w-full w-2/3 rounded-lg bg-gray-400 aspect-auto shadow-xl shadow-black", src: getPosterImg(), alt: actor.name })),
            React.createElement("div", { className: "col-span-2 flex flex-col h-full items-center justify-center w-full text-slate-200" },
                React.createElement("h3", { className: "md:mb-5 mb-4 font-bold lg:text-6xl text-4xl text-center " }, actor.name),
                React.createElement("div", { className: "flex sm:flex-row flex-col justify-around w-full items-center p-4 sm:px-8 font-bold" },
                    React.createElement("span", null,
                        "Place of birth: ",
                        React.createElement("span", { className: "font-normal" }, actor.place_of_birth)),
                    React.createElement("span", null,
                        "Day of birth: ",
                        React.createElement("span", { className: "font-normal" }, actor.birthday))),
                React.createElement("p", { className: "mb-3 rounded-lg " }, actor.biography))))));
};
