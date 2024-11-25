import { jsx, Fragment } from 'react/jsx-runtime';

const PopupNotPopup = () => {
    return (jsx(Fragment, { children: jsx("div", { className: "popup-background", children: jsx("div", { className: "popup", children: jsx("h2", { children: "Popup" }) }) }) }));
};

export { PopupNotPopup };
//# sourceMappingURL=index.js.map
