import { ReactNode } from "react";
export declare const ChartContext: import("react").Context<ChartContextProps>;
declare type ChartContextProps = {
    total: number;
    oscillation: number[];
    percentageArr: number[];
    breakpoints: number[];
    labels: string[];
};
declare type ChartProviderProps = {
    children: ReactNode;
    total: number;
    oscillation: number[];
    labels: string[];
};
export declare function ChartProvider({ children, total, oscillation, labels }: ChartProviderProps): JSX.Element;
export {};
