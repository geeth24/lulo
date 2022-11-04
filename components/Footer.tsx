import {
    useColorModeValue,
    Icon,
    chakra,
    Button,
    Flex,
    HStack,
    Box,
    Link,
    Image,
    Divider,
} from "@chakra-ui/react"
import { useViewportScroll } from "framer-motion"
import React from "react"

function Footer() {
    const ref = React.useRef(null)
    const [y, setY] = React.useState(0)
    //@ts-ignore
    const height = ref.current ? ref.current.getBoundingClientRect() : 0
    const { scrollY } = useViewportScroll()
    React.useEffect(() => {
        return scrollY.onChange(() => setY(scrollY.get()))
    }, [scrollY])
    const cl = useColorModeValue("gray.800", "white")

    const Section = (props: {
        icon: string | undefined
        title:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined
        children:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined
    }) => {
        const ic = useColorModeValue("brand.600", "brand.50")
        const hbg = useColorModeValue("gray.50", "brand.400")
        const tcl = useColorModeValue("gray.900", "gray.50")
        const dcl = useColorModeValue("gray.500", "gray.50")
        return (
            <Link
                m={-3}
                p={3}
                display="flex"
                alignItems="start"
                rounded="lg"
                _hover={{
                    bg: hbg,
                }}
            >
                <Icon
                    flexShrink={0}
                    h={6}
                    w={6}
                    color={ic}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                >
                    <path d={props.icon} />
                </Icon>
                <Box ml={4}>
                    <chakra.p fontSize="sm" fontWeight="700" color={tcl}>
                        {props.title}
                    </chakra.p>
                    <chakra.p mt={1} fontSize="sm" color={dcl}>
                        {props.children}
                    </chakra.p>
                </Box>
            </Link>
        )
    }

    return (
        <chakra.footer
            ref={ref}
            shadow={y > height ? "sm" : undefined}
            transition="box-shadow 0.2s"
            bg="transparent"
            w="full"
            overflowY="hidden"
            sx={{
                borderImage:
                    "linear-gradient(90deg, rgba(1, 218, 124, 0) 2.69%, rgba(175, 174, 184, 0) 2.7%, rgba(175, 174, 184, 0.21) 50.12%, rgba(175, 174, 184, 0) 96.58%)",
                borderImageSlice: 1,
                borderTopWidth: "1.5px",
                borderTopStyle: "solid",
                borderTopColor: "transparent",
            }}
            marginTop={-90}
            
        >
            <chakra.div h="4.5rem" mx="auto" maxW="7xl" px={{ base: 2, sm: 4 }}>
                <Flex
                    w="full"
                    h="full"
                    px="6"
                    align="center"
                    justify="space-between"
                >
                    <Flex align="flex-start">
                        <Link href="/">
                            <HStack>
                                <Image
                                    src="/lulologowhite.svg"
                                    alt="logo"
                                    width="25px"
                                    height="25px"
                                />
                            </HStack>
                        </Link>
                    </Flex>
                    <Flex align="center" maxWidth={{ base: "None", lg: "xs" }}>
                        <HStack
                            display={{
                                base: "none",
                                md: "flex",
                            }}
                        >
                            <Button
                                color="white"
                                display="inline-flex"
                                alignItems="center"
                                fontSize="xs"
                                _hover={{
                                    color: cl,
                                }}
                                _focus={{
                                    boxShadow: "none",
                                }}
                                variant="ghost"
                            >
                                Protocol
                            </Button>
                            <Divider orientation="vertical" zIndex={10} />
                            <Button
                                color="white"
                                display="inline-flex"
                                alignItems="center"
                                fontSize="xs"
                                _hover={{
                                    color: cl,
                                }}
                                _focus={{
                                    boxShadow: "none",
                                }}
                                variant="ghost"
                            >
                                Governance
                            </Button>
                            <Button
                                color="white"
                                display="inline-flex"
                                alignItems="center"
                                fontSize="xs"
                                _hover={{
                                    color: cl,
                                }}
                                _focus={{
                                    boxShadow: "none",
                                }}
                                variant="ghost"
                            >
                                Docs
                            </Button>
                            <Button
                                color="white"
                                display="inline-flex"
                                alignItems="center"
                                fontSize="xs"
                                _hover={{
                                    color: cl,
                                }}
                                _focus={{
                                    boxShadow: "none",
                                }}
                                variant="ghost"
                            >
                                Twitter
                            </Button>{" "}
                            <Button
                                color="white"
                                display="inline-flex"
                                alignItems="center"
                                fontSize="xs"
                                _hover={{
                                    color: cl,
                                }}
                                _focus={{
                                    boxShadow: "none",
                                }}
                                variant="ghost"
                            >
                                Discord
                            </Button>
                        </HStack>
                    </Flex>
                    <Flex align="flex-end" color="white">
                        <HStack spacing="5">
                            <Button
                                variant="solid"
                                size="sm"
                                bg="linear-gradient(90.15deg, rgba(111, 130, 122, 0.18) 0.13%, rgba(54, 64, 60, 0.0378) 99.89%)"
                                border="1px solid conic-gradient(from 180deg at 50% 50%, #01E785 -44.56deg, rgba(255, 255, 255, 0.2) 44.31deg, #FFFFFF 131.43deg, rgba(255, 255, 255, 0.2) 222.84deg, #01E785 315.44deg, rgba(255, 255, 255, 0.2) 404.31deg)"
                                color="white"
                                _hover={{
                                    bg: "brand.400",
                                }}
                                leftIcon={
                                    <Image
                                        src="/solana.svg"
                                        alt="logo"
                                        width="20px"
                                        height="20px"
                                    />
                                }
                            >
                                Powered by Solana
                            </Button>
                        </HStack>
                    </Flex>
                </Flex>
            </chakra.div>
        </chakra.footer>
    )
}

export default Footer
