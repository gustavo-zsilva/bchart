import { Flex, Text, Divider } from "@chakra-ui/react";
import { useChart } from "../hooks/useChart";

export function RevenueStack() {

    const { breakpoints } = useChart()

    return (
        <Flex
            flexDir="column"
            justifyContent="space-between"
            gridArea="Revenue"
            borderRight="3px solid"
            borderTop="3px solid"
            borderColor="gray.800"
            px=".6rem"
            color="gray.400"
        >
            {breakpoints.map((value, index) => (
                <Text key={index}>
                    {value}
                </Text>
            ))}
        </Flex>
    )
}