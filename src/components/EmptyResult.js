import React from 'react';
export default function EmptyResult() {
    return (React.createElement("div", { className: "flex flex-col items-center p-4 my-16" },
        React.createElement("h2", { className: "mb-4 max-w-[500px] text-slate-50 text-3xl font-bold text-center" }, "Hmm... Result is empty. Try to serach something else!"),
        React.createElement("img", { className: "w-[480px] h-[270px] rounded", src: "https://media1.giphy.com/media/g01ZnwAUvutuK8GIQn/giphy.gif", alt: "Empty result" })));
}
