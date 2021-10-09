/// <reference types="react" />
import { ChakraProps } from '@chakra-ui/react';
declare type BarChartProps = ChakraProps & {
    total: number;
    oscillation: number[];
    labels: string[];
    columnsColor?: string;
    bgColor?: string;
    textColor?: string;
};
export declare function BarChart({ total, oscillation, labels, columnsColor, bgColor, textColor, ...chakraProps }: BarChartProps): JSX.Element;
export {};
