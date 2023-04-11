import React from 'react';
const ButtonClose = ({ callback }) => {
    return (React.createElement("button", { type: "button", className: "close-btn top-[12px] text-gray-400 right-[12px] hover:text-gray-300 focus:text-gray-600 focus:outline-none hover:scale-105 focus:scale-105", onClick: callback }));
};
export default ButtonClose;
