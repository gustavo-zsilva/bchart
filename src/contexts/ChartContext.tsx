import { createContext, ReactNode } from "react";

export const ChartContext = createContext({} as ChartContextProps)

type ChartContextProps = {
    total: number,
    oscillation: number[],
    percentageArr: number[],
}

type ChartProviderProps = {
    children: ReactNode,
    total: number,
    oscillation: number[],
}

export function ChartProvider({ children, total, oscillation }: ChartProviderProps) {

    const percentageArr = oscillation.map(value => Math.round((value / total) * 100))

    return (
        <ChartContext.Provider
            value={{
                total,
                oscillation,
                percentageArr,
            }}
        >
            {children}
        </ChartContext.Provider>
    )
}