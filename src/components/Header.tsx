import { Flex, Tag } from "@chakra-ui/react";

export function Header() {
    return (
        <Flex gridArea="Header">
            <Tag
                size="sm"
                borderRadius=".2rem"
                
                bg="gray.800"
                color="#FFF"
            >
                XD
            </Tag>
        </Flex>
    )
}