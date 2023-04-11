import React from 'react';
import { PLACEHOLDER_IMG, SMALL_IMG } from '../../utils/consts';
export default function MovieActor({ imgPath, name }) {
    const actorImg = imgPath ? SMALL_IMG + imgPath : PLACEHOLDER_IMG;
    return (React.createElement("div", { className: "flex flex-col gap-2" },
        React.createElement("img", { src: actorImg, alt: name }),
        React.createElement("h3", null, name)));
}
