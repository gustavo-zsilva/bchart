import { Flex, Tag } from "@chakra-ui/react";

import { useChart } from '../hooks/useChart'
import { useStyles } from "../hooks/useStyles";

export function Header() {

    const { oscillation, labels } = useChart()
    const { theme } = useStyles()

    return (
        <Flex
            gridArea="Header"
            gridColumnStart="2"
            gridGap="1rem"
            bgColor="gray.800"
            p=".2rem .4rem"
            justifyContent={labels.length >= oscillation.length ? null : "space-around"}
        >
            {labels.map((value, index) => (
                <Tag
                    key={index}
                    size="sm"
                    borderRadius=".2rem"
                    bg={theme.bgColor}
                    color={theme.textColor}
                    p=".2rem"
                    maxW={labels.length >= oscillation.length ? "2rem" : null}
                    overflow="hidden"
                    cursor="pointer"
                    title={value}
                >
                    {value}
                </Tag>
            ))}
        </Flex>
    )
}