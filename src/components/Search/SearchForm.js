import React, { useState } from 'react';
import { ButtonSubmit } from '../UI/ButtonSubmit';
import SearchClear from './SearchClear';
import SearchIncon from './SearchIncon';
export const SearchForm = ({ onFormSubmit, placeholder }) => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(value);
        setValue('');
    };
    const handleClear = () => {
        onFormSubmit('');
        setValue('');
    };
    return (React.createElement("div", { className: "flex justify-center" },
        React.createElement("form", { className: "flex gap-3", onSubmit: (event) => handleSubmit(event) },
            React.createElement("div", { className: "relative sm:w-auto w-full" },
                React.createElement("input", { className: "border self-center rounded py-2 px-4 w-full bg-slate-200", type: "text", value: value, onChange: (e) => handleChange(e), placeholder: placeholder }),
                value ? React.createElement(SearchClear, { onClear: () => handleClear() }) : React.createElement(SearchIncon, null)),
            React.createElement(ButtonSubmit, null))));
};
