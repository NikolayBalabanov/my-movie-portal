import React from 'react';
const ButtonConfirm = ({ callback, text }) => {
  return React.createElement(
    'button',
    {
      type: 'button',
      className:
        'mb-[10px] px-4 py-1 self-center rounded-lg border-none bg-gray-400 hover:bg-gray-600 focus-visible:bg-gray-600 outline-none',
      onClick: callback,
    },
    text
  );
};
export default ButtonConfirm;
