import { Outlet } from "react-router"
import { Header } from "./Header"
import { Footer } from "./Footer"

export function Layout(){
    return (
        <div className="bg-white h-full max-w-screen  ">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}