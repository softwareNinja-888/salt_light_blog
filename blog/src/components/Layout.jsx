import { Outlet } from "react-router"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { HeaderTest } from "./HeaderTest"

export function Layout(){
    return (
        <div className="bg-white h-full max-w-screen  ">
            {/* <Header/> */}
            <HeaderTest/>
            <Outlet/>
            <Footer/>
        </div>
    )
}