import { createContext, ReactNode } from "react";

export const StylesContext = createContext({} as StylesContextProps)

type Theme = {
    columnsColor: string,
    bgColor: string,
    textColor: string,
}

type StylesContextProps = {
    theme: Theme,
}

type StylesProviderProps = {
    children: ReactNode,
    columnsColor: string,
    bgColor: string,
    textColor: string,
}

export function StylesProvider({
    children,
    columnsColor = "green.400",
    bgColor = "gray.900",
    textColor = "gray.400",
}: StylesProviderProps) {

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