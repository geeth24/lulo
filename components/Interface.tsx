import React from "react"
import {
    Box,
    chakra,
    HStack,
    Image,
    SimpleGrid,
    Text,
    VStack,
} from "@chakra-ui/react"
function Interface() {
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
                maxW={{ base: "md", md: "xl" }}
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
                    A familiar interface on a powerful matching engine
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
                    A familiar interface on top of a powerful matching engine.
                </chakra.p>
            </Box>
            <SimpleGrid
                //reverse the order of the grid
                columns={{ base: 1, md: 2 }}
                spacing={10}
                w={{
                    base: "full",
                    md: 11 / 12,
                    xl: 8 / 12,
                }}
                maxWidth={{ base: "sm", md: "5xl" }}
                mx="auto"
                display="flex"
                flexDirection={{ base: "column-reverse", md: "row-reverse" }}
                p={5}
            >
                <Image
                    src="/interfaces/1.png"
                    alt="backed by"
                    mt={5}
                    mb={10}
                    w={{
                        base: "md",
                        md: "sm",
                        lg: "md",
                        xl: "lg",
                    }}
                />
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    //align items left
                    alignItems="flex-start"
                    width="100%"
                >
                    <Box maxWidth="xs" alignItems="left">
                        <VStack spacing={3} align="flex-start">
                            <HStack spacing={3} textAlign="right">
                                <Image
                                    src="/interfaces/icons/1.svg"
                                    alt="interface1"
                                    width="20.94px"
                                    height="21.51px"
                                />
                                <Text
                                    fontSize={{base: "lg", md: "lg", lg: "xl"}}
                                    fontWeight="bold"
                                    bg="linear-gradient(180deg, #00F08B 0%, #00D176 100%)"
                                    bgClip="text"
                                >
                                    AUTOMATED VAULTS
                                </Text>
                            </HStack>
                            <Text
                                fontSize="3xl"
                                color="white"
                                lineHeight="base"
                                fontWeight="bold"
                                textAlign="left"
                            >
                                Easily deposit funds to earn interest
                            </Text>
                            <Text
                                fontSize="lg"
                                color="#AFAEB8"
                                textAlign="left"
                            >
                                Access capital-efficient lending strategies from
                                vaults that automate strategies on Lulo’s order
                                books.
                            </Text>
                        </VStack>
                    </Box>
                </Box>
            </SimpleGrid>
            <SimpleGrid
                //reverse the order of the grid
                columns={{ base: 1, md: 2 }}
                spacing={10}
                w={{
                    base: "full",
                    md: 11 / 12,
                    xl: 8 / 12,
                }}
                maxWidth={{ base: "sm", md: "5xl" }}
                mx="auto"
                display="flex"
                flexDirection={{ base: "column-reverse", md: "row" }}
                p={5}
            >
                <Image
                    src="/interfaces/2.png"
                    alt="backed by"
                    mt={5}
                    mb={10}
                     w={{
                        base: "md",
                        md: "sm",
                        lg: "md",
                        xl: "lg",
                    }}
                />
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    //align items left
                    alignItems="flex-end"
                    width="100%"
                >
                    <Box maxWidth="xs" alignItems="left">
                        <VStack spacing={3} align="flex-end">
                            <HStack spacing={3} textAlign="right">
                                <Text
                                    fontSize={{base: "lg", md: "lg", lg: "xl"}}
                                    fontWeight="bold"
                                    bg="linear-gradient(180deg, #00F08B 0%, #00D176 100%)"
                                    bgClip="text"
                                >
                                    FUNDING BOOK
                                </Text>
                                <Image
                                    src="/interfaces/icons/2.svg"
                                    alt="interface1"
                                    width="20.94px"
                                    height="21.51px"
                                />
                            </HStack>
                            <Text
                                fontSize="3xl"
                                color="white"
                                lineHeight="base"
                                fontWeight="bold"
                                textAlign="right"
                            >
                                Borrow and lend at desired rates
                            </Text>
                            <Text
                                fontSize="lg"
                                color="#AFAEB8"
                                textAlign="right"
                            >
                                Originate new loans in a precise and efficient
                                manner.
                            </Text>
                        </VStack>
                    </Box>
                </Box>
            </SimpleGrid>
            <SimpleGrid
                //reverse the order of the grid
                columns={{ base: 1, md: 2 }}
                spacing={10}
                w={{
                    base: "full",
                    md: 11 / 12,
                    xl: 8 / 12,
                }}
                maxWidth={{ base: "sm", md: "5xl" }}
                mx="auto"
                display="flex"
                flexDirection={{ base: "column-reverse", md: "row-reverse" }}
                p={5}
            >
                <Image
                    src="/interfaces/3.png"
                    alt="backed by"
                    mt={5}
                    mb={10}
                     w={{
                        base: "md",
                        md: "sm",
                        lg: "md",
                        xl: "lg",
                    }}
                />
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    //align items left
                    alignItems="flex-start"
                    width="100%"
                >
                    <Box maxWidth="xs" alignItems="left">
                        <VStack spacing={3} align="flex-start">
                            <HStack spacing={3} textAlign="right">
                                <Image
                                    src="/interfaces/icons/3.svg"
                                    alt="interface1"
                                    width="20.94px"
                                    height="21.51px"
                                />
                                <Text
                                    fontSize={{base: "lg", md: "lg", lg: "xl"}}
                                    fontWeight="bold"
                                    bg="linear-gradient(180deg, #00F08B 0%, #00D176 100%)"
                                    bgClip="text"
                                >
                                    RISK MANAGEMENT
                                </Text>
                            </HStack>
                            <Text
                                fontSize="3xl"
                                color="white"
                                lineHeight="base"
                                fontWeight="bold"
                                textAlign="left"
                            >
                                Closely monitor your counterparty risk
                            </Text>
                            <Text
                                fontSize="lg"
                                color="#AFAEB8"
                                textAlign="left"
                            >
                                Filter who you match with. On Lulo, every loan
                                has a known counterparty.
                            </Text>
                        </VStack>
                    </Box>
                </Box>
            </SimpleGrid>
        </>
    )
}

export default Interface
