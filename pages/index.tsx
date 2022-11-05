import Head from "next/head"
import BackedBy from "../components/BackedBy"
import Footer from "../components/Footer"
import GetStarted from "../components/GetStarted"
import Hero from "../components/Hero"
import Interface from "../components/Interface"
import Navbar from "../components/Navbar"
import Protocols from "../components/Protocols"

export default function Home() {
    return (
        <>
            <Head>
                <title>Lulo</title>
            </Head>
            <Navbar />
            <Hero />
            <BackedBy />
            <Protocols />

            <Interface />
            <GetStarted />
            <Footer />
        </>
    )
}
