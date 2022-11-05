import {
    chakra,
    Input,
    Button,
    Box,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react"
import React from "react"

function Hero() {
    return (
        <Box
            px={4}
            py={32}
            mx="auto"
            backgroundImage="url('/headerlight.svg')"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            backgroundSize="cover"
        >
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
                maxW="2xl"
                mt={20}
            >
                <chakra.h1
                    mb={3}
                    fontSize={{
                        base: "5xl",
                        md: "7xl",
                    }}
                    fontWeight="bold"
                    color="white"
                    lineHeight="shorter"
                    textAlign="center"
                >
                    A Decentralized Lending Order Book
                </chakra.h1>
                <chakra.p
                    fontSize={{
                        base: "md",
                        md: "lg",
                    }}
                    color="#AFAEB8"
                    lineHeight="base"
                    maxWidth="xl"
                    mb={10}
                    textAlign="center"
                >
                    Lulo is a market-driven lending protocol. Our mission is to{" "}
                    enable efficient and tradable crypto lending markets.
                </chakra.p>

                <InputGroup size="lg" maxW="xs">
                    <Input
                        type="email"
                        placeholder="Email address"
                        required
                        rounded="xl"
                        height="37px"
                        //change placeholder font size
                        _placeholder={{
                            fontSize: "sm",
                        }}
                        fontSize="sm"
                        border="0.9px solid rgba(255, 255, 255, 0.31)"
                        bg="linear-gradient(89.91deg, rgba(111, 130, 122, 0.18) 0.07%, rgba(54, 64, 60, 0.0378) 99.93%)"
                    />
                    <InputRightElement width="9.5rem" h="100%">
                        <Button
                            height="full"
                            size="lg"
                            type="submit"
                            bg="linear-gradient(180deg, rgba(0, 240, 139, 0.12) 0%, rgba(0, 209, 118, 0.12) 100%);"
                            rounded="xl"
                            color="#00F08B"
                            fontSize="sm"
                            fontWeight="bold"
                            width="100%"
                            border="0.9px solid #00f08c83"
                        >
                            Sign Up for Alpha
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Box>
        </Box>
    )
}

export default Hero
