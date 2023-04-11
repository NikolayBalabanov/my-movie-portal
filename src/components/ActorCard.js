import React from 'react';
import { Link } from 'react-router-dom';
export default function ActorCard({ actor }) {
    const actorsImg = `https://image.tmdb.org/t/p/original${actor.profile_path ? actor.profile_path : '/aEsAdMAhwKYFgnHHxMOknktQYKK.jpg'}`;
    return (React.createElement(Link, { to: `/actor/${actor.id}`, className: "relative overflow-hidden h-full flex flex-col justify-between p-2 gap-3 group bg-slate-800 shadow-md rounded-lg" },
        React.createElement("div", { className: "overflow-hidden" },
            React.createElement("img", { className: "card-img", src: actorsImg, alt: actor.name })),
        React.createElement("h3", { className: "absolute bottom-0 left-0 p-4 rounded-lg text-center text-gray-200 font-black text-base bg-slate-800" }, actor.name)));
}
