import { Flex } from '@chakra-ui/react'

import { ChartColumn } from '../components/ChartColumn'

export function BarChart() {
    return (
        <Flex
            bg="gray.900"
            color="#FFF"
            p=".6rem"
            w="30rem"
            h="18rem"
            borderRadius=".2rem"
            border="4px solid"
            borderColor="gray.700"
            gridGap="1rem"
        >
            <ChartColumn />
            <ChartColumn />
            <ChartColumn />
            <ChartColumn />
            <ChartColumn />
            <ChartColumn />
            <ChartColumn />
            
        </Flex>
    )
}