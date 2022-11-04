import { extendTheme } from "@chakra-ui/react"

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
}
const colors = {
  
  //make gray darker
  gray: {
    "800": "#000000",
  },


};

// 3. extend the theme
export const theme = extendTheme({ config, colors });
