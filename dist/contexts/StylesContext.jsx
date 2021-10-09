import { createContext } from "react";
export var StylesContext = createContext({});
export function StylesProvider(_a) {
    var children = _a.children, _b = _a.columnsColor, columnsColor = _b === void 0 ? "green.400" : _b, _c = _a.bgColor, bgColor = _c === void 0 ? "gray.900" : _c, _d = _a.textColor, textColor = _d === void 0 ? "gray.400" : _d;
    var theme = {
        columnsColor: columnsColor,
        bgColor: bgColor,
        textColor: textColor,
    };
    return (<StylesContext.Provider value={{
            theme: theme,
        }}>
            {children}
        </StylesContext.Provider>);
}
