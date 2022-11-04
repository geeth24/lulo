import { ColorModeScript } from "@chakra-ui/react"
import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import { theme } from "../theme"

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link href="/fonts/fonts_style.css" rel="stylesheet" />

                    <link rel="icon" type="image/svg" href="/lulologo.svg" />
                </Head>
                <body>
                    {/* 👇 Here's the script */}
                    <ColorModeScript
                        initialColorMode={theme.config.initialColorMode}
                    />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
