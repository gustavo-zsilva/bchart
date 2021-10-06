import { createContext, ReactNode, useState } from "react";

export const ChartContext = createContext({} as ChartContextProps)

type ChartContextProps = {
    total: number,
    oscillation: number[],
    percentageArr: number[],
    breakpoints: number[],
    labels: string[],
}

type ChartProviderProps = {
    children: ReactNode,
    total: number,
    oscillation: number[],
    labels: string[],
}

export function ChartProvider({ children, total, oscillation, labels }: ChartProviderProps) {

    const percentageArr = oscillation.map(value => Math.round((value / total) * 100))
    const breakpoints = [0, Math.round(total / 2), total].reverse()

    return (
        <ChartContext.Provider
            value={{
                total,
                oscillation,
                percentageArr,
                breakpoints,
                labels,
            }}
        >
            {children}
        </ChartContext.Provider>
    )
}