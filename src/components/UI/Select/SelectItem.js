import React from 'react';
export default function SelectItem({ onChooseFilter, value, text }) {
    return (React.createElement("button", { type: "button", className: "select-item", onClick: () => onChooseFilter(value) },
        React.createElement("span", null, text)));
}
