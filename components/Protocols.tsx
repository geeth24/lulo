import React from "react"
import { Box, chakra, Image } from "@chakra-ui/react"
function Protocols() {
    return (
        <>
            {" "}
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
                mt={20}
            >
                <chakra.h1
                    mb={3}
                    fontSize={{
                        base: "2xl",
                        md: "3xl",
                    }}
                    fontWeight="bold"
                    color="white"
                    lineHeight="shorter"
                    textAlign="center"
                >
                    Designed to fix <br /> current lending protocols
                </chakra.h1>
                <chakra.p
                    fontSize={{
                        base: "sm",
                        md: "md",
                    }}
                    color="#AFAEB8"
                    lineHeight="base"
                    maxWidth="lg"
                    mb={10}
                    textAlign="center"
                >
                    Peer-to-peer matching eliminates rate spreads, enables
                    counterparty <br />
                    control, and scales risk without centralized decision
                    makers.
                </chakra.p>
            </Box>
            <Box
                alignItems="left"
                bg="linear-gradient(180deg, rgba(111, 130, 122, 0.18) 0%, rgba(54, 64, 60, 0.0378) 100%)"
                width="273px"
                height="252px"
                borderRadius="34.5px"
               //make a angULAR GRADIENT border
                border="1px solid angular-gradient(rgba(255, 255, 255, 0.31), rgba(255, 255, 255, 0.31))"
            >
                <Box
                    bgImage="url(protocols/bglight.svg)"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    width="273px"
                    height="252px"
                >
                    <Box
                        w="56px"
                        h="56px"
                        borderRadius="11px"
                        bg="linear-gradient(180deg, rgba(0, 240, 139, 0.09) 0%, rgba(0, 209, 118, 0.027) 100%)"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Image src="/protocols/triangle.svg" />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Protocols
