import React from "react"
import { Box, chakra, Flex, Image, SimpleGrid, VStack } from "@chakra-ui/react"
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
            <Flex justifyContent="center" alignItems="center" p={5}>
                <SimpleGrid
                    columns={{ base: 2, md: 4, lg: 4 }}
                    spacing={5}
                    mt={10}
                >
                    <Box
                        width={{ base: "168px", lg: "233px" }}
                        height={{ base: "168px", lg: "233px" }}
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        p={5}
                        borderRadius="34.5px"
                        bg="linear-gradient(180deg, rgba(111, 130, 122, 0.18) 0%, rgba(54, 64, 60, 0.0378) 100%)"
                        position={{ base: "relative", md: "relative" }}
                        sx={{
                            borderColor: " #01E78580 ",
                            borderImageSlice: 1,
                            borderWidth: "1.5px",
                            borderStyle: "solid",
                        }}
                    >
                        <Box
                            width={{ base: "236.5 px", lg: "303px" }}
                            height={{ base: "236.5 px", lg: "303px" }}
                            position={"absolute"}
                            top={{ base: "-34.25px", lg: "-68.5px" }}
                            left={{ base: "-34.25px", lg: "-68.5px" }}
                            right={{ base: "-34.25px", lg: "-68.5px" }}
                            bottom={{ base: "-34.25px", lg: "-68.5px" }}
                            zIndex={-1}
                        >
                            <Image src="/protocols/bglight.svg" alt="bglight" />
                        </Box>

                        <VStack spacing={5} align="left">
                            <Box>
                                <Box
                                    bg="linear-gradient(180deg, rgba(0, 240, 139, 0.09) 0%, rgba(0, 209, 118, 0.027) 100%)"
                                    width={{ base: "32px", lg: "56px" }}
                                    height={{ base: "32px", lg: "56px" }}
                                    sx={{
                                        borderColor: "rgba(0, 240, 139, 0.26)",
                                        borderImageSlice: 1,
                                        borderWidth: "1.5px",
                                        borderStyle: "solid",
                                        borderRadius: "11px",
                                    }}
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Image
                                        src="/protocols/triangle.svg"
                                        alt="protocol1"
                                        width={{ base: "12px", lg: "23px" }}
                                        height={{ base: "12px", lg: "23px" }}
                                    />
                                </Box>
                            </Box>
                            <VStack spacing={2} align="left" maxWidth="xs">
                                <chakra.h1
                                    fontSize={{
                                        base: "md",
                                        lg: "21px",
                                    }}
                                    fontWeight="bold"
                                    color="white"
                                    lineHeight="shorter"
                                    textAlign="left"
                                >
                                    No more spread
                                </chakra.h1>
                                <chakra.p
                                    fontSize={{
                                        base: "xs",
                                        lg: "19px",
                                    }}
                                    color=" rgba(255, 255, 255, 0.48)"
                                    lineHeight="base"
                                    textAlign="left"
                                >
                                    No more borrow-lend spread. Earn more than
                                    on existing pools.
                                </chakra.p>
                            </VStack>
                        </VStack>
                    </Box>
                    <Box
                        width={{ base: "168px", lg: "233px" }}
                        height={{ base: "168px", lg: "233px" }}
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        p={5}
                        borderRadius="34.5px"
                        bg="linear-gradient(180deg, rgba(111, 130, 122, 0.18) 0%, rgba(54, 64, 60, 0.0378) 100%)"
                        position={{ base: "relative", md: "relative" }}
                        sx={{
                            borderColor: " #01E78580 ",
                            borderImageSlice: 1,
                            borderWidth: "1.5px",
                            borderStyle: "solid",
                        }}
                    >
                        <Box
                            width={{ base: "236.5 px", lg: "303px" }}
                            height={{ base: "236.5 px", lg: "303px" }}
                            position={"absolute"}
                            top={{ base: "-34.25px", lg: "-68.5px" }}
                            left={{ base: "-34.25px", lg: "-68.5px" }}
                            right={{ base: "-34.25px", lg: "-68.5px" }}
                            bottom={{ base: "-34.25px", lg: "-68.5px" }}
                            zIndex={-1}
                        >
                            <Image src="/protocols/bglight.svg" alt="bglight" />
                        </Box>

                        <VStack spacing={5} align="left">
                            <Box>
                                <Box
                                    bg="linear-gradient(180deg, rgba(0, 240, 139, 0.09) 0%, rgba(0, 209, 118, 0.027) 100%)"
                                    width={{ base: "32px", lg: "56px" }}
                                    height={{ base: "32px", lg: "56px" }}
                                    sx={{
                                        borderColor: "rgba(0, 240, 139, 0.26)",
                                        borderImageSlice: 1,
                                        borderWidth: "1.5px",
                                        borderStyle: "solid",
                                        borderRadius: "11px",
                                    }}
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Image
                                        src="/protocols/peer.svg"
                                        alt="protocol1"
                                        width={{ base: "12px", lg: "23px" }}
                                        height={{ base: "12px", lg: "23px" }}
                                    />
                                </Box>
                            </Box>
                            <VStack spacing={2} align="left" maxWidth="xs">
                                <chakra.h1
                                    fontSize={{
                                        base: "md",
                                        lg: "21px",
                                    }}
                                    fontWeight="bold"
                                    color="white"
                                    lineHeight="shorter"
                                    textAlign="left"
                                >
                                    Peer-to-peer
                                </chakra.h1>
                                <chakra.p
                                    fontSize={{
                                        base: "xs",
                                        lg: "19px",
                                    }}
                                    color=" rgba(255, 255, 255, 0.48)"
                                    lineHeight="base"
                                    textAlign="left"
                                >
                                    Every debt has a known counterparty wallet
                                    address.
                                </chakra.p>
                            </VStack>
                        </VStack>
                    </Box>
                    <Box
                        width={{ base: "168px", lg: "233px" }}
                        height={{ base: "168px", lg: "233px" }}
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        p={5}
                        borderRadius="34.5px"
                        bg="linear-gradient(180deg, rgba(111, 130, 122, 0.18) 0%, rgba(54, 64, 60, 0.0378) 100%)"
                        position={{ base: "relative", md: "relative" }}
                        sx={{
                            borderColor: " #01E78580 ",
                            borderImageSlice: 1,
                            borderWidth: "1.5px",
                            borderStyle: "solid",
                        }}
                    >
                        <Box
                            width={{ base: "236.5 px", lg: "303px" }}
                            height={{ base: "236.5 px", lg: "303px" }}
                            position={"absolute"}
                            top={{ base: "-34.25px", lg: "-68.5px" }}
                            left={{ base: "-34.25px", lg: "-68.5px" }}
                            right={{ base: "-34.25px", lg: "-68.5px" }}
                            bottom={{ base: "-34.25px", lg: "-68.5px" }}
                            zIndex={-1}
                        >
                            <Image src="/protocols/bglight.svg" alt="bglight" />
                        </Box>

                        <VStack spacing={5} align="left">
                            <Box>
                                <Box
                                    bg="linear-gradient(180deg, rgba(0, 240, 139, 0.09) 0%, rgba(0, 209, 118, 0.027) 100%)"
                                    width={{ base: "32px", lg: "56px" }}
                                    height={{ base: "32px", lg: "56px" }}
                                    sx={{
                                        borderColor: "rgba(0, 240, 139, 0.26)",
                                        borderImageSlice: 1,
                                        borderWidth: "1.5px",
                                        borderStyle: "solid",
                                        borderRadius: "11px",
                                    }}
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Image
                                        src="/protocols/assets.svg"
                                        alt="protocol1"
                                        width={{ base: "12px", lg: "23px" }}
                                        height={{ base: "12px", lg: "23px" }}
                                    />
                                </Box>
                            </Box>
                            <VStack spacing={2} align="left" maxWidth="xs">
                                <chakra.h1
                                    fontSize={{
                                        base: "md",
                                        lg: "21px",
                                    }}
                                    fontWeight="bold"
                                    color="white"
                                    lineHeight="shorter"
                                    textAlign="left"
                                >
                                    All the assets
                                </chakra.h1>
                                <chakra.p
                                    fontSize={{
                                        base: "xs",
                                        lg: "19px",
                                    }}
                                    color=" rgba(255, 255, 255, 0.48)"
                                    lineHeight="base"
                                    textAlign="left"
                                >
                                    Find a market to lend/borrow against any
                                    cryptoasset.
                                </chakra.p>
                            </VStack>
                        </VStack>
                    </Box>
                    <Box
                        width={{ base: "168px", lg: "233px" }}
                        height={{ base: "168px", lg: "233px" }}
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        p={5}
                        borderRadius="34.5px"
                        bg="linear-gradient(180deg, rgba(111, 130, 122, 0.18) 0%, rgba(54, 64, 60, 0.0378) 100%)"
                        position={{ base: "relative", md: "relative" }}
                        sx={{
                            borderColor: " #01E78580 ",
                            borderImageSlice: 1,
                            borderWidth: "1.5px",
                            borderStyle: "solid",
                        }}
                    >
                        <Box
                            width={{ base: "236.5 px", lg: "303px" }}
                            height={{ base: "236.5 px", lg: "303px" }}
                            position={"absolute"}
                            top={{ base: "-34.25px", lg: "-68.5px" }}
                            left={{ base: "-34.25px", lg: "-68.5px" }}
                            right={{ base: "-34.25px", lg: "-68.5px" }}
                            bottom={{ base: "-34.25px", lg: "-68.5px" }}
                            zIndex={-1}
                        >
                            <Image src="/protocols/bglight.svg" alt="bglight" />
                        </Box>

                        <VStack spacing={5} align="left">
                            <Box>
                                <Box
                                    bg="linear-gradient(180deg, rgba(0, 240, 139, 0.09) 0%, rgba(0, 209, 118, 0.027) 100%)"
                                    width={{ base: "32px", lg: "56px" }}
                                    height={{ base: "32px", lg: "56px" }}
                                    sx={{
                                        borderColor: "rgba(0, 240, 139, 0.26)",
                                        borderImageSlice: 1,
                                        borderWidth: "1.5px",
                                        borderStyle: "solid",
                                        borderRadius: "11px",
                                    }}
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Image
                                        src="/protocols/reward.svg"
                                        alt="protocol1"
                                        width={{ base: "12px", lg: "23px" }}
                                        height={{ base: "12px", lg: "23px" }}
                                    />
                                </Box>
                            </Box>
                            <VStack spacing={2} align="left" maxWidth="xs">
                                <chakra.h1
                                    fontSize={{
                                        base: "md",
                                        lg: "21px",
                                    }}
                                    fontWeight="bold"
                                    color="white"
                                    lineHeight="shorter"
                                    textAlign="left"
                                >
                                    Rewards for loyalty
                                </chakra.h1>
                                <chakra.p
                                    fontSize={{
                                        base: "xs",
                                        lg: "19px",
                                    }}
                                    color=" rgba(255, 255, 255, 0.48)"
                                    lineHeight="base"
                                    textAlign="left"
                                >
                                    Users increase ownership and capital
                                    efficiency over time.
                                </chakra.p>
                            </VStack>
                        </VStack>
                    </Box>
                </SimpleGrid>
            </Flex>
        </>
    )
}

export default Protocols
