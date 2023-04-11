import React from 'react';
import ArrowIcon from './Icons/ArrowIcon';
export var EIcons;
(function (EIcons) {
    EIcons["arrow"] = "Arrow";
})(EIcons || (EIcons = {}));
export default function Icon(props) {
    const { name, styles } = props;
    switch (name) {
        case 'Arrow':
            return React.createElement(ArrowIcon, { styles: styles });
        default:
            return React.createElement(ArrowIcon, { styles: styles });
    }
}
