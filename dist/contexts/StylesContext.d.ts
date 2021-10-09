import { ReactNode } from "react";
export declare const StylesContext: import("react").Context<StylesContextProps>;
declare type Theme = {
    columnsColor: string;
    bgColor: string;
    textColor: string;
};
declare type StylesContextProps = {
    theme: Theme;
};
declare type StylesProviderProps = {
    children: ReactNode;
    columnsColor: string;
    bgColor: string;
    textColor: string;
};
export declare function StylesProvider({ children, columnsColor, bgColor, textColor, }: StylesProviderProps): JSX.Element;
export {};
