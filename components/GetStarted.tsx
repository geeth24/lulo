import {
    chakra,
    Input,
    Button,
    Box,
    InputGroup,
    InputRightElement,
    Image,
    VStack,
} from "@chakra-ui/react"
import React from "react"

function GetStarted() {
    return (
        <Box
            px={4}
            py={32}
            mx="auto"
            backgroundImage="url('/footerlight.svg')"
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
                maxW="xl"
                mb={20}
            >
                <VStack spacing={5}>
                    <Image
                        src="/lulologo.svg"
                        alt="logo"
                        width="75px"
                        height="75px"
                    />
                    <chakra.h1
                        mb={3}
                        fontSize={{
                            base: "4xl",
                            md: "5xl",
                        }}
                        fontWeight="bold"
                        color="white"
                        lineHeight="shorter"
                        textAlign="center"
                    >
                        Get started with Lulo
                    </chakra.h1>
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
                </VStack>
            </Box>
        </Box>
    )
}

export default GetStarted
