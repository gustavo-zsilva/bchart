import { Flex, Text, Tag } from '@chakra-ui/react'
import { useChart } from '../hooks/useChart'

export function ChartColumns() {

    const { percentageArr } = useChart()

    return (
        <Flex gridGap="1rem" gridArea="Columns" px=".6rem">
            {percentageArr.map((value, index) => (
                <Flex
                    key={index}
                    bg="green.400"
                    h={`${value}%`}
                    w="2rem"
                    alignSelf="flex-end"
                    borderTopRadius=".2rem"
                />
            ))}
        </Flex>
    )
}