import { Outlet } from "react-router"
import { Header } from "./Header"
import { Footer } from "./Footer"

export function Layout(){
    return (
        <div className="bg-white h-full max-w-screen dark:bg-theme overflow-x-hidden">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}