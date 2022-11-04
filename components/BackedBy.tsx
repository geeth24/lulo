import { Box, Text, Image } from "@chakra-ui/react"
import React from "react"

function BackedBy() {
    return (
        <Box
            w={{
                base: "full",
                md: 11 / 12,
                xl: 8 / 12,
            }}
            textAlign={{
                base: "center",
                md: "center",
            }}
            mx="auto"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <Text fontSize="xl" fontWeight="bold" color="white">
                Backed by
            </Text>
            <Image
                src="/backedby.png"
                alt="backed by"
                mt={5}
                mb={10}
                w={{
                    base: "md",
                    md: "xl",
                }}
            />
        </Box>
    )
}

export default BackedBy
