import React from 'react';
export default function ErrorMessage({ content }) {
    return React.createElement("h2", { className: "my-14 text-3xl font-bold text-center" }, content);
}
