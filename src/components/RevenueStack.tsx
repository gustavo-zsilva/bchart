import { Flex, Text, Divider } from "@chakra-ui/react";
import { useChart } from "../hooks/useChart";

export function RevenueStack() {

    const { oscillation } = useChart()

    return (
        <Flex flexDir="column" justifyContent="space-between" gridArea="Revenue" bgColor="gray.800">
            {oscillation.map((value, index) => (
                <Text key={index}>
                    {value}
                </Text>
            ))}
            <Divider orientation="vertical" color="#FFF" />
        </Flex>
    )
}