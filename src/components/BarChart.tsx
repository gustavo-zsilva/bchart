import { Flex } from '@chakra-ui/react'

import { ChartColumns } from './ChartColumns'
import { ChartProvider } from '../contexts/ChartContext'
import { RevenueStack } from './RevenueStack'
import { Header } from './Header'

type BarChartProps = {
    total: number,
    oscillation: number[],
}

export function BarChart({ total, oscillation }: BarChartProps) {

    

    return (
        <ChartProvider total={total} oscillation={oscillation}>
            <Flex
                display="grid"
                bg="gray.900"
                color="#FFF"
                
                m="10rem auto"

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
    )
}