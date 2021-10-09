var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { Flex } from '@chakra-ui/react';
import { ChartColumns } from './ChartColumns';
import { ChartProvider } from '../contexts/ChartContext';
import { RevenueStack } from './RevenueStack';
import { Header } from './Header';
import { StylesProvider } from '../contexts/StylesContext';
export function BarChart(_a) {
    var total = _a.total, oscillation = _a.oscillation, labels = _a.labels, columnsColor = _a.columnsColor, bgColor = _a.bgColor, textColor = _a.textColor, chakraProps = __rest(_a, ["total", "oscillation", "labels", "columnsColor", "bgColor", "textColor"]);
    return (<StylesProvider columnsColor={columnsColor} bgColor={bgColor} textColor={textColor}>
            <ChartProvider total={total} oscillation={oscillation} labels={labels}>
                <Flex display="grid" bg={bgColor ? bgColor : "gray.900"} {...chakraProps} h="18rem" borderRadius=".2rem" border="4px solid" borderColor="gray.700" gridTemplateColumns="auto 1fr" gridTemplateRows="auto 1fr" gridTemplateAreas={"'Header Header' 'Revenue Columns'"}>
                    <Header />
                    <ChartColumns />
                    <RevenueStack />
                </Flex>
            </ChartProvider>
        </StylesProvider>);
}
