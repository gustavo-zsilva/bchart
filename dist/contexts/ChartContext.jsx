import { createContext } from "react";
export var ChartContext = createContext({});
export function ChartProvider(_a) {
    var children = _a.children, total = _a.total, oscillation = _a.oscillation, labels = _a.labels;
    var percentageArr = oscillation.map(function (value) { return Math.round((value / total) * 100); });
    var breakpoints = [0, Math.round(total / 2), total].reverse();
    return (<ChartContext.Provider value={{
            total: total,
            oscillation: oscillation,
            percentageArr: percentageArr,
            breakpoints: breakpoints,
            labels: labels,
        }}>
            {children}
        </ChartContext.Provider>);
}
