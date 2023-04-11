import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
export default function SearchClear({ onClear }) {
    return (React.createElement("button", { className: "search__icon hover:opacity-80", type: "button", id: "clear", "data-testid": "clear", onClick: () => onClear() },
        React.createElement(AiOutlineCloseCircle, null)));
}
