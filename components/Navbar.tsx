import {
    useColorMode,
    useColorModeValue,
    useDisclosure,
    Icon,
    chakra,
    VStack,
    Button,
    Flex,
    HStack,
    IconButton,
    Box,
    Text,
    Link,
    Image,
} from "@chakra-ui/react"
import { useViewportScroll } from "framer-motion"
import React from "react"

import { AiOutlineMenu } from "react-icons/ai"
import { IoIosArrowDown } from "react-icons/io"
import { FaDiscord, FaMoon, FaSun, FaTimes, FaTwitter } from "react-icons/fa"
import { motion } from "framer-motion"

function Navbar() {
    const { toggleColorMode: toggleMode } = useColorMode()
    const text = useColorModeValue("dark", "light")
    const SwitchIcon = useColorModeValue(FaMoon, FaSun)
    const bg = useColorModeValue("white", "gray.800")
    const ref = React.useRef(null)
    const [y, setY] = React.useState(0)
    //@ts-ignore
    const height = ref.current ? ref.current.getBoundingClientRect() : 0
    const { scrollY } = useViewportScroll()
    React.useEffect(() => {
        return scrollY.onChange(() => setY(scrollY.get()))
    }, [scrollY])
    const cl = useColorModeValue("gray.800", "white")
    const mobileNav = useDisclosure()

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

    const MobileNavContent = (
        <VStack
            pos="absolute"
            top={20}
            left={0}
            right={0}
            display={mobileNav.isOpen ? "flex" : "none"}
            flexDirection="column"
            pb={4}
            bg="#00000079"
            //add blur
            backdropFilter="blur(10px)"
            rounded="sm"
            shadow="sm"
            zIndex="10"
            //animation
            as={motion.div}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition="0.5s linear"
        >
            <Box
                w="full"
                border="1.5px "
                borderBottomColor="linear-gradient(90deg, rgba(175, 174, 184, 0.21) 2.69%, rgba(175, 174, 184, 0) 96.58%)"
                p={3}
            >
                <Text fontSize="xl" fontWeight="bold" color="white">
                    Protocol
                </Text>
            </Box>
            <Box
                w="full"
                border="1.5px "
                borderBottomColor="linear-gradient(90deg, rgba(175, 174, 184, 0.21) 2.69%, rgba(175, 174, 184, 0) 96.58%)"
                p={3}
            >
                <Text fontSize="xl" fontWeight="bold" color="white">
                    Governance
                </Text>
            </Box>
            <Box
                w="full"
                border="1.5px "
                borderBottomColor="linear-gradient(90deg, rgba(175, 174, 184, 0.21) 2.69%, rgba(175, 174, 184, 0) 96.58%)"
                p={3}
            >
                <Text fontSize="xl" fontWeight="bold" color="white">
                    Docs
                </Text>
            </Box>
            <Box
                w="full"
                border="1.5px "
                borderBottomColor="linear-gradient(90deg, rgba(175, 174, 184, 0.21) 2.69%, rgba(175, 174, 184, 0) 96.58%)"
                p={3}
            >
                <Text fontSize="xl" fontWeight="bold" color="white">
                    About
                </Text>
            </Box>
            <Box
                w="full"
                border="1.5px "
                borderBottomColor="linear-gradient(90deg, rgba(175, 174, 184, 0.21) 2.69%, rgba(175, 174, 184, 0) 96.58%)"
                p={3}
            >
                <Text fontSize="xl" fontWeight="bold" color="white">
                    Twitter
                </Text>
            </Box>
            <Box
                w="full"
                border="1.5px"
                borderColor="linear-gradient(90deg, rgba(175, 174, 184, 0.21) 2.69%, rgba(175, 174, 184, 0) 96.58%)"
                p={3}
            >
                <Text fontSize="xl" fontWeight="bold" color="white">
                    Discord
                </Text>
            </Box>
        </VStack>
    )
    return (
        <chakra.header
            ref={ref}
            shadow={y > height ? "sm" : undefined}
            transition="box-shadow 0.2s"
            bg="transparent"
            borderTop="6px solid"
            borderTopColor="brand.400"
            w="full"
            overflowY="hidden"
            borderBottomWidth={2}
            color="gray.800"
            marginBottom={-90}
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
                                    src="/lulo.svg"
                                    alt="logo"
                                    width="150px"
                                    height="150px"
                                />
                            </HStack>
                        </Link>
                    </Flex>
                    <Flex align="center" maxWidth="xs">
                        <HStack
                            spacing="1"
                            display={{
                                base: "none",
                                md: "flex",
                            }}
                        >
                            <Button
                                color="white"
                                display="inline-flex"
                                alignItems="center"
                                fontSize={{ base: "xs", md: "sm" }}
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
                            <Button
                                color="white"
                                display="inline-flex"
                                alignItems="center"
                                fontSize={{ base: "xs", md: "sm" }}
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
                                fontSize={{ base: "xs", md: "sm" }}
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
                                fontSize={{ base: "xs", md: "sm" }}
                                _hover={{
                                    color: cl,
                                }}
                                _focus={{
                                    boxShadow: "none",
                                }}
                                variant="ghost"
                            >
                                About
                            </Button>

                            <Button
                                color="white"
                                display="inline-flex"
                                alignItems="center"
                                fontSize={{ base: "xs", md: "sm" }}
                                _hover={{
                                    color: cl,
                                }}
                                _focus={{
                                    boxShadow: "none",
                                }}
                                rightIcon={<IoIosArrowDown />}
                                variant="ghost"
                            >
                                More
                            </Button>
                        </HStack>
                    </Flex>
                    <Flex align="flex-end" color="white">
                        <HStack spacing="5">
                            <HStack
                                spacing="5"
                                display={{
                                    base: "none",
                                    md: "flex",
                                }}
                            >
                                <Icon as={FaDiscord} />
                                <Icon as={FaTwitter} />
                            </HStack>
                            <Button
                                variant="solid"
                                size="sm"
                                bg="white"
                                color="black"
                            >
                                Launching Soon...
                            </Button>
                            <IconButton
                                display={{
                                    base: "flex",
                                    md: "none",
                                }}
                                aria-label="Open menu"
                                fontSize="20px"
                                size="sm"
                                color="gray.800"
                                _dark={{
                                    color: "inherit",
                                }}
                                variant="ghost"
                                icon={
                                    mobileNav.isOpen ? (
                                        <FaTimes
                                            transform="rotate(90deg)"
                                            style={{
                                                transition:
                                                    "all 0.3s ease-in-out",
                                            }}
                                        />
                                    ) : (
                                        <AiOutlineMenu />
                                    )
                                }
                                onClick={() => mobileNav.onToggle()}
                            />
                        </HStack>
                    </Flex>
                </Flex>
                {MobileNavContent}
            </chakra.div>
        </chakra.header>
    )
}

export default Navbar
