import { Flex, Text } from "@chakra-ui/react";
import { useChart } from "../hooks/useChart";
import { useStyles } from "../hooks/useStyles";
export function RevenueStack() {
    var breakpoints = useChart().breakpoints;
    var theme = useStyles().theme;
    return (<Flex flexDir="column" justifyContent="space-between" gridArea="Revenue" borderRight="3px solid" borderTop="3px solid" borderColor="gray.800" px=".6rem" color={theme.textColor}>
            {breakpoints.map(function (value, index) { return (<Text key={index}>
                    {value}
                </Text>); })}
        </Flex>);
}
