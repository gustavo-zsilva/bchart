import { useContext } from "react";
import { ChartContext } from "../contexts/ChartContext";

export function useChart() {
    return useContext(ChartContext)
}