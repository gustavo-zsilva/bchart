import { Flex, ChakraProps } from '@chakra-ui/react'

import { ChartColumns } from './ChartColumns'
import { ChartProvider } from '../contexts/ChartContext'
import { RevenueStack } from './RevenueStack'
import { Header } from './Header'
import { StylesProvider } from '../contexts/StylesContext'

type BarChartProps = ChakraProps & {
    total: number,
    oscillation: number[],
    labels: string[],
    columnsColor?: string,
    bgColor?: string,
    textColor?: string,
}

export function BarChart({
    total,
    oscillation,
    labels,
    columnsColor,
    bgColor,
    textColor,
    ...chakraProps
}: BarChartProps) {
    return (
        <StylesProvider columnsColor={columnsColor} bgColor={bgColor} textColor={textColor}>
            <ChartProvider total={total} oscillation={oscillation} labels={labels}>
                <Flex
                    display="grid"
                    bg={bgColor ? bgColor : "gray.900"}
                    
                    {...chakraProps}

                    h="18rem"

                    borderRadius=".2rem"
                    border="4px solid"
                    borderColor="gray.700"
                    gridTemplateColumns="auto 1fr"
                    gridTemplateRows="auto 1fr"
                    gridTemplateAreas={`'Header Header' 'Revenue Columns'`}
                >
                    <Header />
                    <ChartColumns />
                    <RevenueStack />
                </Flex>
            </ChartProvider>
        </StylesProvider>
    )
}