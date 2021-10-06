import { Flex, Tag } from "@chakra-ui/react";

import { useChart } from '../hooks/useChart'

export function Header() {

    const { oscillation } = useChart()

    return (
        <Flex
            gridArea="Header"
            gridColumnStart="2"
            gridGap="1rem"
            bgColor="gray.800"
            p=".2rem"
        >
            {oscillation.map((value, index) => (
                <Tag
                    key={index}
                    size="sm"
                    borderRadius=".2rem"
                    bg="gray.900"
                    color="#FFF"
                    maxW="2rem"
                >
                    {value}
                </Tag>
            ))}
        </Flex>
    )
}