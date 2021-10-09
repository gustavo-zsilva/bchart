import { Flex } from '@chakra-ui/react';
import { useChart } from '../hooks/useChart';
import { useStyles } from '../hooks/useStyles';
export function ChartColumns() {
    var percentageArr = useChart().percentageArr;
    var theme = useStyles().theme;
    return (<Flex gridGap="1rem" gridArea="Columns" px=".6rem">
            {percentageArr.map(function (value, index) { return (<Flex key={index} bg={theme.columnsColor} h={value + "%"} w="2rem" alignSelf="flex-end" borderTopRadius=".2rem" boxShadow="-2px 0 4px 2px"/>); })}
        </Flex>);
}
