import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {PropsWithChildren} from "react";
const Layout = ({children}: PropsWithChildren) => {
    return (
        <>
            <Navbar/>
            <main className="dark:bg-black dark:text-white">
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default Layout;