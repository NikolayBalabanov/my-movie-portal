import React, { useEffect, useRef, useState } from 'react';
import SelectItem from './SelectItem';
import Icon, { EIcons } from '../Icon';
export default function Select({ current, onChange, selectFields }) {
    const [isOpen, setIsOpen] = useState(false);
    const fieldsArr = selectFields.filter((el) => el.value !== current);
    const targetField = selectFields.filter((el) => el.value === current)[0].text;
    const select = useRef(null);
    const isMounted = useRef(false);
    const handleClick = (value) => {
        onChange(value);
        setIsOpen(false);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (select.current && !event.composedPath().includes(select.current) && isMounted.current) {
                setIsOpen(false);
            }
            isMounted.current = true;
        };
        document.body.addEventListener('click', handleClickOutside);
        return () => document.body.removeEventListener('click', handleClickOutside);
    }, []);
    return (React.createElement("div", { ref: select, className: "relative" },
        React.createElement("button", { type: "button", className: `${isOpen ? 'border-b border-b-colorGrey' : 'border-b border-transparent'} select-item`, onClick: () => setIsOpen(!isOpen) },
            React.createElement("span", null, targetField),
            React.createElement(Icon, { name: EIcons.arrow, styles: `transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}` })),
        isOpen && (React.createElement("ul", { className: "absolute top-full" }, fieldsArr.map((el) => (React.createElement(SelectItem, { key: el.value, onChooseFilter: handleClick, value: el.value, text: el.text })))))));
}
