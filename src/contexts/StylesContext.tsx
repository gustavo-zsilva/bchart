import { createContext, ReactNode } from "react";

export const StylesContext = createContext({} as StylesContextProps)

type StylesContextProps = {
    theme: Theme,
}

type Theme = {
    columnsColor: string,
    bgColor: string,
    textColor: string,
}

type StylesProviderProps = {
    children: ReactNode,
    columnsColor: string,
    bgColor: string,
    textColor: string,
}

export function StylesProvider({ children, columnsColor, bgColor, textColor }: StylesProviderProps) {

    const theme = {
        columnsColor,
        bgColor,
        textColor,
    }

    return (
        <StylesContext.Provider
            value={{
                theme,
            }}
        >
            {children}
        </StylesContext.Provider>
    )
}